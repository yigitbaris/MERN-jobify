import Job from '../models/JobModel.js'
import { StatusCodes } from 'http-status-codes'

export const getAllJobs = async (req, res) => {
  // console.log(req)
  const jobs = await Job.find({})
  res.status(StatusCodes.OK).json({ jobs })
}

export const createJob = async (req, res) => {
  const job = await Job.create(req.body)
  res.status(StatusCodes.CREATED).json({ job })
}

export const getJob = async (req, res) => {
  const job = await Job.findById(req.params.id)
  res.status(StatusCodes.OK).json({ job })
}

export const updateJob = async (req, res) => {
  const updatedJob = await Job.findByIdAndUpdate(req.body.id, req.body, {
    new: true,
  })

  return res.status(StatusCodes.OK).json({ msg: 'job modify', job: updatedJob })
}

export const deleteJob = async (req, res) => {
  const removedJob = await Job.findByIdAndDelete(req.params.id)

  return res
    .status(StatusCodes.OK)
    .json({ msg: 'job deleted', job: removedJob })
}
