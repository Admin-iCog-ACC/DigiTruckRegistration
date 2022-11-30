import { Router } from 'express';
import mongoose from 'mongoose';
import { errorCatcher } from './error.js';
import cors from 'cors';

const accSchema = mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
    },

    gender: String,
    dob: {
      type: Date,
      required: true,
    },
    phoneNumber: String,

    email: { type: String, required: true },
    socialMedia: String,

    address: { type: String, required: true },
    schoolName: { type: String, required: true },
    gradeLevel: { type: String, required: true },
    collageName: String,
    attendingYear: Number,
    department: String,
    contactFullName: { type: String, required: true },
    contactPhone: { type: String, required: true },
    contactOtherPhone: String,
    contactRelation: String,
    wdyhbtp: { type: String, required: true },
    hypiskopb: { type: String, required: true },
    wiyewtp: String,
    hdydc: { type: String, required: true },
    wdyeftp: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const AccModel = mongoose.model('Acc', accSchema);

async function registerAcc(req, res) {
  await AccModel.create({ ...req.body });
  res.status(200).json({ message: 'success' });
}

const router = Router();

router.route('/acc').post(cors(),errorCatcher(registerAcc));

export default router;
