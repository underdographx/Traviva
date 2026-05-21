import crypto from "crypto";
import Razorpay from "razorpay";

const getRazorpayClient = () => {
  if (!process.env.RAZORPAY_KEY_ID || !process.env.RAZORPAY_KEY_SECRET) {
    throw new Error("Razorpay keys are missing in your backend .env file");
  }

  return new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID,
    key_secret: process.env.RAZORPAY_KEY_SECRET,
  });
};

export const createPaymentOrder = async (req, res, next) => {
  try {
    const { amount, tripTitle } = req.body;
    const numericAmount = Number(amount);

    if (!numericAmount || numericAmount <= 0) {
      return res.status(400).json({ message: "Valid amount is required" });
    }

    const razorpay = getRazorpayClient();
    const order = await razorpay.orders.create({
      amount: Math.round(numericAmount * 100),
      currency: "INR",
      receipt: `traviva_${Date.now()}`,
      notes: {
        tripTitle: tripTitle || "TRAVIVA Luxury Trip",
        userId: req.user.id.toString(),
        userEmail: req.user.email,
      },
    });

    res.status(201).json({
      key: process.env.RAZORPAY_KEY_ID,
      order,
    });
  } catch (error) {
    next(error);
  }
};

export const verifyPayment = async (req, res) => {
  const { razorpay_order_id, razorpay_payment_id, razorpay_signature } =
    req.body;

  if (!razorpay_order_id || !razorpay_payment_id || !razorpay_signature) {
    return res.status(400).json({ message: "Payment verification failed" });
  }

  const body = `${razorpay_order_id}|${razorpay_payment_id}`;
  const expectedSignature = crypto
    .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
    .update(body)
    .digest("hex");

  if (expectedSignature !== razorpay_signature) {
    return res.status(400).json({ message: "Invalid payment signature" });
  }

  res.status(200).json({
    message: "Payment verified successfully",
    paymentId: razorpay_payment_id,
  });
};
