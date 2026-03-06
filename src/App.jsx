import { useMemo, useState } from "react"
import Navbar from "./components/Navbar"
import Banner from "./components/Banner"
import TicketCard from "./components/TicketCard"
import StatusPanel from "./components/StatusPanel"
import Footer from "./components/Footer"



const seed = [
  { id: 9102, title: "Login issues – Can't Access Account", description: "Customer is unable to log in to their account. They tried resetting the password multiple times.", customer: "Acme", priority: "HIGH", status: "Open", agent: "John Smith", date: "09/11/2024" },
  { id: 9720, title: "Payment failed – Card Declined", description: "Customer attempted to pay via Visa ending 1234 but the payment keeps failing.", customer: "FinPay", priority: "HIGH", status: "Open", agent: "Sarah Johnson", date: "09/11/2024" },
  { id: 9180, title: "Unable to Download Invoice", description: "Customer cannot download their January invoice from the Billing section.", customer: "Globex", priority: "MEDIUM", status: "Open", agent: "Michael Brent", date: "09/11/2024" },
  { id: 9150, title: "Incorrect Billing Address", description: "Customers billing address shows a different city. They updated it but it still shows old info.", customer: "Umbrella", priority: "LOW", status: "Open", agent: "Emily Cox", date: "09/10/2024" },
  { id: 9130, title: "App Crash on Launch", description: "Customers report that the mobile app crashes immediately after opening.", customer: "Hooli", priority: "HIGH", status: "Open", agent: "David Wirth", date: "09/09/2024" },
  { id: 9060, title: "Refund Not Processed", description: "Customer requested a refund two weeks ago but has not received it.", customer: "Starkline", priority: "MEDIUM", status: "In-Progress", agent: "Sophia Tay", date: "09/10/2024" },
  { id: 9072, title: "Two-Factor Authentication Issue", description: "2FA codes not received on one registered phone.", customer: "Wonka", priority: "HIGH", status: "Open", agent: "James Anderson", date: "09/08/2024" },
  { id: 9162, title: "Unable to Upload Profile Picture", description: "Customers trying to upload a new profile picture but it gets stuck.", customer: "Orbit", priority: "LOW", status: "Open", agent: "Olivia Morfin", date: "09/12/2024" },
  { id: 9178, title: "Subscription Auto-Renewal", description: "Customer says they were auto-renewed after cancel.", customer: "Wayne", priority: "MEDIUM", status: "In-Progress", agent: "Liam Tham", date: "09/07/2024" },
  { id: 9204, title: "Missing Order Confirmation Email", description: "Customer placed an order but didn’t receive a confirmation email.", customer: "Lexara", priority: "MEDIUM", status: "Open", agent: "Isabella Grady", date: "09/12/2024" }
]

function toast(msg, kind='success'){
  const bg = kind==='success' ? 'bg-emerald-600' : kind==='info' ? 'bg-sky-600' : 'bg-rose-600'
  const n = document.createElement('div')
  n.className = `toast ${bg} text-white text-sm px-3 py-2 rounded-lg shadow`
  n.textContent = msg
  document.getElementById('toasts').appendChild(n)
  setTimeout(()=>n.remove(), 1600)
}

export default function App(){
  const [tickets, setTickets] = useState(seed)
  const [inProgressIds, setInProgressIds] = useState([])
  const [resolved, setResolved] = useState([])

  const inProgress = useMemo(
    () => tickets.filter(t => inProgressIds.includes(t.id)),
    [tickets, inProgressIds]
  )

  const addToStatus = (id) => {
    if (inProgressIds.includes(id)) return toast('Already in Task Status','info')
    setInProgressIds(prev => [...prev, id])
    toast('Ticket added to Task Status')
  }

  const complete = (id) => {
    const idx = tickets.findIndex(t => t.id === id)
    if (idx === -1) return
    const ticket = tickets[idx]
    setTickets(ts => ts.filter(t => t.id !== id))
    setInProgressIds(ids => ids.filter(x => x !== id))
    setResolved(rs => [ticket, ...rs])
    toast('Ticket resolved')
  }

  return (
    <>
      <Navbar />
      <Banner inProgress={inProgress.length} resolved={resolved.length} />

      <main className="max-w-6xl mx-auto px-4 mt-6 grid grid-cols-1 lg:grid-cols-[2fr,1fr] gap-6">
        {/* Left: customer tickets */}
        <section>
          <h3 className="font-semibold text-slate-800 mb-3">Customer Tickets</h3>
          <div className="grid sm:grid-cols-2 gap-4">
            {tickets.map(t => (
              <TicketCard key={t.id} t={t} onAdd={addToStatus} />
            ))}
          </div>
        </section>

        {/* Right: sidebar */}
        <section>
          <h3 className="font-semibold text-slate-800 mb-3">Task Status</h3>
          <StatusPanel items={inProgress} onComplete={complete} resolved={resolved} />
        </section>
      </main>

      <Footer />
      

    </>
  )
}
