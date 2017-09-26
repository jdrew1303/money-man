import { IRecurring, Recurring } from './recur'

export interface IPayment extends IRecurring {
  name: string
  type: string
  source: string
  startDate: Date
  amount: number
}

export class Payment extends Recurring implements IPayment {
  constructor(public name: string, public type: string, public source: string,
    recurrenceString: string, public startDate: Date, public amount: number) {
      super(recurrenceString)
  }
}