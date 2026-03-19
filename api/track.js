export default async (req, res) => {
  // CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).json({ ok: true });
  }

  // Accept both GET and POST
  let trackingNumber;
  
  if (req.method === 'POST') {
    trackingNumber = req.body?.trackingNumber;
  } else if (req.method === 'GET') {
    trackingNumber = req.query?.trackingNumber;
  }

  if (!trackingNumber) {
    return res.status(400).json({ error: 'Tracking number required' });
  }

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
  });
};
