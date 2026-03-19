module.exports = async (req, res) => {
  // CORS - Set headers BEFORE anything else
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  res.setHeader('Content-Type', 'application/json');

  // Handle preflight
  if (req.method === 'OPTIONS') {
    return res.status(200).send('');
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { trackingNumber } = req.body;

    if (!trackingNumber) {
      return res.status(400).json({ error: 'Tracking number required' });
    }

    // Return sample data for all tracking numbers
    return res.status(200).json({
      trackingNumber: trackingNumber,
      status: 'In Transit',
      statusColor: '#16a34a',
      carrier: 'FedEx',
      currentLocation: 'Distribution Center, New York, NY',
      estimatedDelivery: 'March 24, 2026',
      events: [
        {
          date: 'Mar 20, 2:30 PM',
          location: 'Distribution Center, New York, NY',
          status: 'Package in transit',
          icon: '📦'
        },
        {
          date: 'Mar 19, 11:15 AM',
          location: 'Processing Facility, New Jersey',
          status: 'Package sorted',
          icon: '✓'
        }
      ],
      found: true
    });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
