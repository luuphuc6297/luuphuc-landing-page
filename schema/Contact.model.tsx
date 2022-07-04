import mongoose from 'mongoose';

const ContactSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
        },
        budget: {
            type: String,
        },
        interested_in: {
            type: String,
        },
        message: {
            type: String,
        },
        attachments: {
            type: String,
        },
    },
    { timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' } },
);

/**
 * Module exports
 * @public
 */

export default mongoose.models.Contact || mongoose.model('Contact', ContactSchema);
