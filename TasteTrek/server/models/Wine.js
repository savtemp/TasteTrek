import mongoose from "mongoose";

const Schema = mongoose.Schema;

export const WineSchema = new Schema(
  {
    name: { type: String },
    color: { type: String },
    producer_name: { type: String },
    producer_region: { type: String },
    description: { type: String },
    imgUrl: {
      type: String,
      default:
        "https://media.istockphoto.com/id/985025476/photo/red-wine-bottle-with-blank-label-for-any-brand-on-the-table-aginst-black-background.jpg?s=612x612&w=0&k=20&c=gmDwS5yPfFo52_x4Al_Xi7d5bO0IhQZbaACNAIRfUr8=",
    },
    price: { type: Number },
  },

  { timestamps: true, toJSON: { virtuals: true } }
);
