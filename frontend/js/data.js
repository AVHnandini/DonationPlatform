// Dummy data used as fallback / initial UI
// Dummy data used as fallback / initial UI
export const campaigns = [
  {
    id: 'camp1',
    title: 'Flood Relief & Rescue',
    description: 'Help families affected by severe flooding. Provide emergency shelter, food, and medical aid to flood victims.',
    goalAmount: 750000,
    collectedAmount: 320000,
    imageURL: './images/campaign-floods.jpg',
    category: 'disaster',
    beneficiaries: 8500
  },
  {
    id: 'camp2',
    title: 'Earthquake Survivor Support',
    description: 'Support families impacted by earthquakes. Rebuild homes and provide emergency medical care.',
    goalAmount: 1000000,
    collectedAmount: 450000,
    imageURL: './images/campaign-earthquake.jpg',
    category: 'disaster',
    beneficiaries: 6000
  },
  {
    id: 'camp3',
    title: 'Blood Donation Drive',
    description: 'Emergency blood donation campaign for accident victims and critical patients in hospitals.',
    goalAmount: 500000,
    collectedAmount: 280000,
    imageURL: './images/campaign-blood.jpg',
    category: 'medical',
    beneficiaries: 2500
  },
  {
    id: 'camp4',
    title: 'Disaster Recovery Fund',
    description: 'Emergency response for natural disasters. Help people recover and rebuild their lives.',
    goalAmount: 900000,
    collectedAmount: 380000,
    imageURL: './images/campaign-disaster.jpg',
    category: 'disaster',
    beneficiaries: 5500
  },
  {
    id: 'camp5',
    title: 'Emergency Crisis Response',
    description: 'Rapid response team for people in crisis situations - accidents, injuries, and emergencies.',
    goalAmount: 600000,
    collectedAmount: 220000,
    imageURL: './images/campaign-emergency.jpg',
    category: 'medical',
    beneficiaries: 3200
  },
  {
    id: 'camp6',
    title: 'Crisis Relief & Rehabilitation',
    description: 'Comprehensive support for crisis survivors including counseling, medical care, and rehabilitation.',
    goalAmount: 850000,
    collectedAmount: 410000,
    imageURL: './images/campaign-crisis.jpg',
    category: 'medical',
    beneficiaries: 4800
  }
];

export const issues = [
  { id: 'iss1', name: 'Rita', location: 'Village A', description: 'Need food and shelter after flood', imageURL: '' },
  { id: 'iss2', name: 'Aman', location: 'City B', description: 'Severe medical condition, needs funds', imageURL: '' }
];

export const volunteers = [
  { id: 'vol1', name: 'Sana', email: 'sana@example.com', skills: 'Teaching' },
  { id: 'vol2', name: 'Ravi', email: 'ravi@example.com', skills: 'Healthcare' }
];
