module.exports = async (req, res) => {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { trackingNumber } = req.body;

  if (!trackingNumber) {
    return res.status(400).json({ error: 'Tracking number required' });
  }

  try {
    // For now, return a sample response
    // In production, you can add real tracking API integration
    const response = {
      trackingNumber,
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
        },
        {
          date: 'Mar 18, 9:45 PM',
          location: 'Local Warehouse, Newark, NJ',
          status: 'Package picked up',
          icon: '📍'
        }
      ],
      found: true
    };

    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ error: 'Server error', message: error.message });
  }
};
