type Props = { message: string; kind?: 'success' | 'error' }

export default function Notification({ message, kind = 'success' }: Props) {
  if (!message) return null
  return <div className={`notification notification-${kind}`} role={kind === 'error' ? 'alert' : 'status'}><span aria-hidden="true">✳</span>{message}</div>
}
