export interface Iappointment{
  
  appointmentId?: number,
  patientId?: number,
  problem: string,
  dateToVisit: string,
  timeslot: string,
  specialisationLookingFor: string,
  doctorId?: number,
}