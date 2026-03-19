export default async (req, res) => {
  res.setHeader('Access-Control-Allow-Credentials', 'true')
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT')
  res.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version')
  
  if (req.method === 'OPTIONS') {
    res.status(200).end()
    return
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const { trackingNumber } = req.body

  return res.status(200).json({
    trackingNumber,
    status: 'In Transit',
    statusColor: '#16a34a',
    carrier: 'FedEx',
    currentLocation: 'Distribution Center, New York, NY',
    estimatedDelivery: 'March 24, 2026',
    events: [
      { date: 'Mar 20, 2:30 PM', location: 'Distribution Center, NY', status: 'Package in transit', icon: '📦' },
      { date: 'Mar 19, 11:15 AM', location: 'Processing Facility, NJ', status: 'Package sorted', icon: '✓' }
    ],
    found: true
  })
}
