import { MessageFrame } from "./messageFrame"
import { SubscriptionHandler } from "./subscriptionHandler"

export interface SubscriptionData {
  endpoint: string
  firstIdentifier: number | null
  secondIdentifier: number | null
  message: any
  subscriptionHandlers: SubscriptionHandler<MessageFrame>[]
}