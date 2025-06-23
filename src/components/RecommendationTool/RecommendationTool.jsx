import { useState } from 'react'
import './RecommendationTool.css'
import { ChevronRight, ChevronLeft, Check, Info, Heart, Clock, Shield, DollarSign } from 'lucide-react';



const RecommendationTool = () => {

   const [currentStep, setCurrentStep] = useState(0);
   const [answers, setAnswers] = useState({});
   const [showResults, setShowResults] = useState(false);

  const data = [
    {
      id: 'method_type',
      title: 'What type of birth control do you prefer?',
      subtitle: 'This helps us narrow down your options',
      type: 'single',
      options: [
        { value: 'hormonal', label: 'Hormonal options', desc: 'Uses hormones to prevent pregnancy' },
        { value: 'non-hormonal', label: 'Non-hormonal options', desc: 'No hormones involved' },
        { value: 'both', label: 'Show me both types', desc: 'I want to see all options' }
      ]
    },
    {
      id: 'maintenance_frequency',
      title: 'How often are you willing to maintain your birth control?',
      subtitle: 'Different methods require different levels of attention',
      type: 'single',
      options: [
        { value: 'daily', label: 'Daily' },
        { value: 'weekly', label: 'Weekly'},
        { value: 'monthly', label: 'Monthly'},
        { value: 'long-term', label: 'Set and forget'}
      ]
    },
    {
      id: 'preferences',
      title: 'Which of the following describes your comfort and control preferences for birth control?',
      subtitle: 'Different methods require different levels of attention',
      type: 'multiple',
      options: [
        
        { label: 'I want full control', value: 'control', desc: 'I prefer methods I can start, stop, and use on my own.' },
        { label: "I'm okay with provider-managed methods", value: 'provider', desc: "I'm comfortable with going to the clinic to start medication and maintenance." },
        { label: 'I prefer something completely private', value: 'private', desc: 'I want a method no one will see or know about.' },
        {label: 'I want a method that is external or non-invasive', value: 'external', desc: 'I want a method that is not inserted into my body.'}
        
        
      ]
    },
    {
      id: 'pregnancy_timeline',
      title: 'When do you see forsee yourself getting pregnant?',
      subtitle: 'Different methods require different levels of attention',
      type: 'single',
      options: [
        { value: 'Within this year', desc: 'Easily reversible' },
        { value: "In 2-5 years", desc: "Flexible timing" },
        { value: 'More than 5 years', desc: 'Long-term protection' },
        { value: 'Never', desc: 'Permanent option' }   
      ]
    },
    {
      id: 'medical_history',
      title: 'Do any of these apply to you?',
      subtitle: 'Check all that apply. These will assess the safety or additional benefits of certain methods.',
      type: 'multiple',
      options: [
        { value: 'Blood clots or stroke' },
        { value: "High blood pressure" },
        { value: 'Heavy periods'},
        { value: 'Breastfeeding'},
        { value: 'None'},
      ]
    },
  ];

  const methods = {
    'birth-control-pill': {
      name: 'Birth Control Pill',
      effectiveness: '93%',
      type: 'Hormonal',
      maintenance: 'Daily',
      reversibility: 'Immediate',
      cost: '$0-50/month',
      pros: ['Can reduce period pain', 'May clear up acne', 'Easily reversible'],
      cons: ['Must remember daily', 'May cause nausea', 'May cause irregular bleeding initially']
    },
    'iud-hormonal': {
      name: 'Hormonal IUD',
      effectiveness: '99%',
      type: 'Hormonal',
      maintenance: '3-7 years',
      reversibility: '1-2 months',
      cost: '$0-1300 upfront',
      pros: ['Highly effective', 'Discreet', 'Long-lasting', 'May reduce periods'],
      cons: ['Insertion discomfort', 'Irregular bleeding initially', 'Requires provider removal']
    },
    'iud-copper': {
      name: 'Copper IUD',
      effectiveness: '99%',
      type: 'Non-hormonal',
      maintenance: '10 years',
      reversibility: 'Immediate',
      cost: '$0-1300 upfront',
      pros: ['No hormones', 'Highly effective', 'Discreet', 'Long-lasting'],
      cons: ['May increase period flow', 'Insertion discomfort', 'Requires provider removal']
    },
    'implant': {
      name: 'Arm Implant',
      effectiveness: '99%',
      type: 'Hormonal',
      maintenance: '3 years',
      reversibility: '1-3 months',
      cost: '$0-1300 upfront',
      pros: ['Highly effective', 'Long-lasting', 'Hidden'],
      cons: ['Irregular periods', 'Insertion/removal procedure', 'May cause weight gain']
    },
    'shot': {
      name: 'Birth Control Shot',
      effectiveness: '96%',
      type: 'Hormonal',
      maintenance: 'Every 3 months',
      reversibility: '12-18 months',
      cost: '$0-150 per shot',
      pros: ['Only 4 times per year', 'May stop periods', 'Private'],
      cons: ['Weight gain common', 'Delayed fertility return', 'Bone density concerns']
    },

'patch': {
  name: 'Patch',
  effectiveness: '93%',
  type: 'Hormonal',
  maintenance: 'Weekly',
  reversibility: 'Immediate',
  cost: '$0–150/month',
  pros: ['Applied weekly', 'May help regulate periods', 'Non-invasive'],
  cons: ['Visible on skin', 'May cause skin irritation', 'Weekly maintenance']
},

'ring': {
  name: 'Vaginal Ring',
  effectiveness: '93%',
  type: 'Hormonal',
  maintenance: 'Monthly',
  reversibility: 'Immediate',
  cost: '$0–200/month',
  pros: ['Monthly maintenance', 'Low hormone dosage', 'Discreet'],
  cons: ['Requires insertion', 'May cause vaginal irritation', 'Must remember monthly change']
},

'condoms': {
  name: 'Condoms',
  effectiveness: '85%',
  type: 'Non-hormonal',
  maintenance: 'Each time',
  reversibility: 'Immediate',
  cost: '$2–15/month',
  pros: ['STI protection', 'No hormones', 'Easily accessible'],
  cons: ['Must use every time', 'Can break or slip', 'May reduce sensation']
},

'internal-condoms': {
  name: 'Internal Condoms',
  effectiveness: '79%',
  type: 'Non-hormonal',
  maintenance: 'Each time',
  reversibility: 'Immediate',
  cost: '$2–5 each',
  pros: ['STI protection', 'No hormones', 'Can be inserted ahead of time'],
  cons: ['Can be noisy or uncomfortable', 'May be difficult to insert', 'Less widely available']
},

'diaphragm-with-spermicide': {
  name: 'Diaphragm with Spermicide',
  effectiveness: '83%',
  type: 'Non-hormonal',
  maintenance: 'Each time',
  reversibility: 'Immediate',
  cost: '$0–250 upfront + spermicide',
  pros: ['No hormones', 'Reusable', 'User-controlled'],
  cons: ['Must use every time', 'Requires fitting by provider', 'Increased risk of UTI']
},

'fertility-awareness': {
  name: 'Fertility Awareness',
  effectiveness: '76%',
  type: 'Non-hormonal',
  maintenance: 'Daily tracking',
  reversibility: 'Immediate',
  cost: 'Free–$20 for apps or thermometers',
  pros: ['No hormones', 'Increased body awareness', 'Aligned with natural cycles'],
  cons: ['Requires daily commitment', 'Less reliable', 'No STI protection']
},

'sterilization': {
  name: 'Sterilization (Tubal Ligation)',
  effectiveness: '99.5%',
  type: 'Non-hormonal',
  maintenance: 'None (permanent)',
  reversibility: 'Not reversible',
  cost: '$0–6,000 (depending on insurance)',
  pros: ['Permanent solution', 'Highly effective', 'No hormones'],
  cons: ['Surgical procedure', 'Not reversible', 'Does not protect against STIs']
}


};
   

   const getRecommendations = () => {
    let recs = [];

    // Helper to push unique recommendations
    const pushUnique = (newRec) => {
        if (!recs.some(r => r.method === newRec.method)) {
        recs.push(newRec);
        }
    };
   
    // Logic based on answers

 // both long term
if (answers.method_type === 'both' && answers.maintenance_frequency === 'long-term') {
  pushUnique({ method: 'iud-hormonal', score: 95, reason: 'Low-maintenance and lasts several years with high effectiveness' });
  pushUnique({ method: 'iud-copper', score: 95, reason: 'Hormone-free, long-term protection that’s easy to forget about' });
  pushUnique({ method: 'implant', score: 90, reason: 'Inserted once and works for years without daily effort' });
}

// both short term
if (answers.method_type === 'both' && answers.maintenance_frequency === 'daily') {
  pushUnique({ method: 'condoms', score: 95, reason: 'Great for short-term use and easily available anytime' });
  pushUnique({ method: 'birth-control-pill', score: 90, reason: 'Lets you maintain daily control with hormonal benefits' });
}

// never get pregnant
if (answers.pregnancy_timeline === 'Never') {
  pushUnique({ method: 'sterilization', score: 100, reason: 'Permanent, worry-free protection for those not planning to get pregnant' });
  pushUnique({ method: 'iud-hormonal', score: 98, reason: 'Long-lasting option for people not planning pregnancy but not ready for permanent solutions' });
  pushUnique({ method: 'implant', score: 95, reason: 'Discreet, long-term option with no daily upkeep' });
}

// Hormonal weekly maintenance
if (answers.method_type === 'hormonal' && answers.maintenance_frequency === 'weekly') {
  pushUnique({ method: 'patch', score: 90, reason: 'Change just once a week while staying protected' });
  pushUnique({ method: 'ring', score: 85, reason: 'Monthly upkeep with steady hormone levels' });
  pushUnique({ method: 'birth-control-pill', score: 80, reason: 'Well-known option that works when taken daily' });
}

// Hormonal + provider-managed
if (answers.method_type === 'hormonal' && answers.preferences?.includes('provider')) {
  pushUnique({ method: 'patch', score: 90, reason: 'Prescribed by a provider and doesn’t require daily attention' });
}

// Heavy periods
if (answers.medical_history?.includes('Heavy periods')) {
  pushUnique({ method: 'iud-hormonal', score: 92, reason: 'Can make periods lighter or stop them altogether' });
  pushUnique({ method: 'birth-control-pill', score: 88, reason: 'May reduce pain and bleeding during periods' });
}

// Non-hormonal + external preference
if (answers.method_type === 'non-hormonal' && answers.preferences?.includes('external')) {
  pushUnique({ method: 'condoms', score: 95, reason: 'No hormones and easy to use whenever needed' });
  pushUnique({ method: 'internal-condoms', score: 90, reason: 'Discrete and non-invasive alternative to external condoms' });
  pushUnique({ method: 'diaphragm-with-spermicide', score: 85, reason: 'Reusable, hormone-free method you control' });
}

// Non-hormonal + control preference
if (answers.method_type === 'non-hormonal' && answers.preferences?.includes('control')) {
  pushUnique({ method: 'condoms', score: 90, reason: 'Gives you complete control and is available without a prescription' });
  pushUnique({ method: 'internal-condoms', score: 95, reason: 'Discrete and lets you stay in charge of your method' });
  pushUnique({ method: 'diaphragm-with-spermicide', score: 85, reason: 'User-inserted and hormone-free' });
}

// Hormonal + control preference
if (answers.method_type === 'Hormonal' && answers.preferences?.includes('control')) {
  pushUnique({ method: 'birth-control-pill', score: 90, reason: 'Daily control and predictable cycles' });
  pushUnique({ method: 'patch', score: 85, reason: 'Once-a-week control with steady hormone release' });
  pushUnique({ method: 'ring', score: 80, reason: 'Monthly upkeep that you manage yourself' });
}

// Hormonal + long-term
if (answers.method_type === 'hormonal' && answers.maintenance_frequency === 'long-term') {
  pushUnique({ method: 'iud-hormonal', score: 95, reason: 'Highly effective for years without daily attention' });
  pushUnique({ method: 'implant', score: 90, reason: 'Works for up to 3 years with one insertion' });
}

// Hormonal daily maintenance
if (answers.method_type === 'hormonal' && answers.maintenance_frequency === 'daily') {
  pushUnique({ method: 'birth-control-pill', score: 90, reason: 'Well-known and effective when taken consistently' });
  pushUnique({ method: 'patch', score: 85, reason: 'Weekly option that still feels hands-on' });
  pushUnique({ method: 'ring', score: 80, reason: 'Monthly insert you control yourself' });
}

// Pregnancy within 1 year – non-hormonal
if (answers.method_type === 'non-hormonal' && answers.pregnancy_timeline === 'Within this year') {
  pushUnique({ method: 'condoms', score: 95, reason: 'Immediate protection and no delay in fertility return' });
  pushUnique({ method: 'diaphragm-with-spermicide', score: 80, reason: 'Hormone-free and fully reversible' });
}

// Pregnancy within 1 year – hormonal
if (answers.method_type === 'hormonal' && answers.pregnancy_timeline === 'Within this year') {
  pushUnique({ method: 'birth-control-pill', score: 90, reason: 'Quick to start and stop based on your timing' });
  pushUnique({ method: 'patch', score: 80, reason: 'Easy to discontinue when ready to conceive' });
  pushUnique({ method: 'condoms', score: 70, reason: 'Flexible, non-hormonal option' });
}

// Preferences - private
if (answers.preferences?.includes('private')) {
  pushUnique({ method: 'implant', score: 87, reason: 'Inserted under the skin and not visible to others' });
  pushUnique({ method: 'shot', score: 85, reason: 'Taken every 3 months with no daily reminders or visibility' });
}

// Medical history – blood clots / high blood pressure
if (
  answers.medical_history?.includes('Blood clots or stroke') ||
  answers.medical_history?.includes('High blood pressure')
) {
  pushUnique({ method: 'iud-copper', score: 90, reason: 'Hormone-free and safe for your health condition' });
  pushUnique({ method: 'condoms', score: 85, reason: 'No hormonal side effects or risks' });

  const restrictedMethods = ['birth-control-pill', 'patch', 'ring', 'implant', 'iud-hormonal', 'shot'];
  recs = recs.filter(rec => !restrictedMethods.includes(rec.method));
}


  // Default fallback
  if (recs.length === 0) {
    pushUnique({ method: 'birth-control-pill', score: 85, reason: 'Popular, flexible option' });
    pushUnique({ method: 'iud-hormonal', score: 80, reason: 'Long-term and highly effective' });
    pushUnique({ method: 'condoms', score: 75, reason: 'Easy to access and hormone-free' });
  }

  return recs.sort((a, b) => b.score - a.score).slice(0, 3)
};





  const handleAnswer = (questionId, value) => {
    const question = data.find(q => q.id === questionId);
    const isMultiple = question.type === 'multiple';

    setAnswers(prev => {
        const prevValue = prev[questionId] || [];

        return {
        ...prev,
        [questionId]: isMultiple
            ? prevValue.includes(value)
            ? prevValue.filter(v => v !== value) // unselect if already selected
            : [...prevValue, value] // add new selection
            : value // for single type
        };
    });
};

  const nextStep = () => {
    if (currentStep < data.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setShowResults(true);
      return 0;
    }
  };

  

  const restart = () => {
    setCurrentStep(0);
    setAnswers({});
    setShowResults(false);
  };

  //frontend questions

  const question = data[currentStep];
 
 


 return (
    <div className = 'container'>
      <h1>Which Birth Control Should You Take?</h1>
      <hr />
      {!showResults ? (
    <>
      <h2>{question.title}</h2>
      <ul>
        {question.type === 'single' &&
          question.options.map((option, index) => (
            <li
              key={index}
              onClick={() => handleAnswer(question.id, option.value)}
              className={
                answers[question.id] === option.value
                  ? 'option selected'
                  : 'option'
              }
            >
              <div className="flex items-center justify-between">
                <div>
                  <div>{option.label || option.value}</div>
                  {option.desc && <div className="desc">{option.desc}</div>}
                </div>
              </div>
            </li>
          ))}

        {question.type === 'multiple' &&
          question.options.map((option, index) => (
            <li
              key={index}
              onClick={() => handleAnswer(question.id, option.value)}
              className={
                answers[question.id]?.includes(option.value)
                  ? 'option selected'
                  : 'option'
              }
            >
              <div className="flex items-center justify-between">
                <div>
                  <div>{option.label || option.value}</div>
                  {option.desc && <div className="desc">{option.desc}</div>}
                </div>
              </div>
            </li>
          ))}
      </ul>
      <button onClick={nextStep}>Next</button>
      <div className="index">
        {currentStep + 1} of {data.length} questions
      </div>
    </>
  ) : (
    <div className="results">
        <h2>Your Personalized Recommendations</h2>

        {getRecommendations().map((rec, index) => {
          const method = methods[rec.method]; // assumes you defined this elsewhere
          return (
            <div className="recommendation-card" key={rec.method}>
              <div className="recommendation-header">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="rank-badge">
                      #{index + 1} Match ({rec.score}%)
                    </span>
                    <h3 className="method-title">{method.name}</h3>
                  </div>
                  <p className="method-reason">{rec.reason}</p>
                </div>
              </div>

              <div className="method-grid">
                <div className="method-item">
                  <Shield className="w-4 h-4 text-green-600" />
                  <div>
                    <div className="method-label">Effectiveness</div>
                    <div className="method-value text-green-600">
                      {method.effectiveness}
                    </div>
                  </div>
                </div>
                <div className="method-item">
                  <Clock className="w-4 h-4 text-blue-600" />
                  <div>
                    <div className="method-label">Maintenance</div>
                    <div className="method-value">{method.maintenance}</div>
                  </div>
                </div>
                <div className="method-item">
                  <Heart className="w-4 h-4 text-purple-600" />
                  <div>
                    <div className="method-label">Reversibility</div>
                    <div className="method-value">{method.reversibility}</div>
                  </div>
                </div>
                <div className="method-item">
                  <DollarSign className="w-4 h-4 text-orange-600" />
                  <div>
                    <div className="method-label">Cost</div>
                    <div className="method-value">{method.cost}</div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
         <div>
  <button onClick={restart} className="restart-button">Restart Quiz
  </button>
</div>
      </div>
      
    )}

    
  </div>
)};



export default RecommendationTool
