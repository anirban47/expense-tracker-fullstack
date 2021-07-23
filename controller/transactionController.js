const Transaction = require("../models/Transaction");

// @desc Get all transactions
// @route GET /api/transactions
exports.getTransactions = async (req, res, next) => {
    try {
        const transactions = await Transaction.find();

        return res.status(200).json({
            success: true,
            data: transactions,
            count: transactions.length,
        });
    } catch (err) {
        return res.status(500).json({
            success: false,
            error: "Server Error",
        });
    }
};

// @desc Add new transaction
// @route POST /api/transaction
exports.addTransaction = async (req, res, next) => {
    try {
        const { text, amount } = req.body;

        const transaction = await Transaction.create({
            text: text,
            amount: amount,
        });

        return res.status(201).json({
            success: true,
            data: transaction,
        });
    } catch (err) {
        if (err.name === "ValidationError") {
            const messages = Object.values(err.errors).map(
                (val) => val.message
            );

            return res.status(400).json({
                success: false,
                error: messages,
            });
        } else {
            return res.status(500).json({
                success: false,
                error: "Server Error",
            });
        }
    }
};

// @desc Delete transaction
// @route DELETE /api/transactions/:id
exports.deleteTransaction = async (req, res) => {
    try {
        const transaction = await Transaction.findById(req.params.id);
        if (!transaction) {
            return res.status(404).json({
                success: false,
                error: "No transaction found",
            });
        } else {
            await transaction.remove();
            return res.status(200).json({
                success: true,
                data: {},
            });
        }
    } catch (err) {
        return res.status(500).json({
            success: false,
            error: "Server Error",
        });
    }
};
