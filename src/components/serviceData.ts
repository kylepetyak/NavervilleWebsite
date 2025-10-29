import { 
  Activity,
  Brain,
  Bone,
  Heart,
  Zap,
  Users,
  Shield,
  Target,
  AlertCircle,
  Hand,
  Footprints,
  Baby,
  Moon,
  Trophy,
  Car,
  Briefcase,
  Stethoscope,
  Timer,
  AlertTriangle
} from "lucide-react";

export interface ServiceData {
  id: string;
  name: string;
  icon: any;
  heroImage: string;
  hero: {
    headline: string;
    subheadline: string;
    ctaText: string;
  };
  aboutCondition: {
    title: string;
    description: string;
    keyPoints: string[];
  };
  whyItWorks: {
    title: string;
    subtitle: string;
    methods: {
      icon: any;
      title: string;
      description: string;
      color: string;
    }[];
  };
  treatment: {
    title: string;
    subtitle: string;
    treatments: string[];
  };
  relatedResources: {
    title: string;
    links: {
      title: string;
      description: string;
      type: "service" | "blog";
    }[];
  };
  testimonials: {
    title: string;
    stories: {
      quote: string;
      name: string;
      condition: string;
      rating: number;
    }[];
  };
  faqs: {
    title: string;
    questions: {
      question: string;
      answer: string;
    }[];
  };
}

export const serviceDataMap: Record<string, ServiceData> = {
  "arthritis": {
    id: "arthritis",
    name: "Arthritis",
    icon: Bone,
    heroImage: "https://images.unsplash.com/photo-1715531786629-bd8b2dd87066?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRocml0aXMlMjBoYW5kcyUyMGtuZWUlMjBqb2ludCUyMGNhcmV8ZW58MXx8fHwxNzU2NDk0NTA5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    hero: {
      headline: "Arthritis Care in Naperville, IL",
      subheadline: "Comprehensive, Integrative Relief for Osteoarthritis & Rheumatoid Arthritis",
      ctaText: "Schedule Your $29 Consultation"
    },
    aboutCondition: {
      title: "Why We Excel in Arthritis Treatment",
      description: "Our multidisciplinary approach combines evidence-based research with personalized care specifically for Naperville residents dealing with arthritis pain and mobility challenges.",
      keyPoints: [
        "Multidisciplinary, integrative, non-surgical approaches combining manual therapy, acupuncture, exercise therapy, and lifestyle modifications for comprehensive arthritis management.",
        "Convenient and personalized access with Naperville-focused scheduling and care, including same-day appointments and flexible treatment plans tailored to your lifestyle and work schedule."
      ]
    },
    whyItWorks: {
      title: "What the Research Shows",
      subtitle: "Evidence-based treatments that make a real difference for arthritis patients",
      methods: [
        {
          icon: Stethoscope,
          title: "Acupuncture Benefits",
          description: "Research demonstrates that acupuncture improves pain and function in osteoarthritis patients, offering significant relief without medication dependency.",
          color: "bg-blue-100 text-blue-600"
        },
        {
          icon: Activity,
          title: "Manual Therapy Support",
          description: "Clinical studies show manual therapy supports joint mobility, reduces stiffness, and improves overall function in arthritis patients.",
          color: "bg-green-100 text-green-600"
        },
        {
          icon: Heart,
          title: "Lifestyle Therapies",
          description: "Evidence-based lifestyle interventions including exercise, nutrition, and yoga assist with RA outcomes and overall quality of life improvements.",
          color: "bg-purple-100 text-purple-600"
        }
      ]
    },
    treatment: {
      title: "Our Arthritis Treatment Roadmap",
      subtitle: "A systematic 5-step approach to comprehensive arthritis care",
      treatments: [
        "Step 1: Assessment — Comprehensive evaluation including joint analysis, movement assessment, pain pattern identification, and lifestyle factors review.",
        "Step 2: Personalized Plan — Custom treatment strategy combining manual therapy, acupuncture, exercise prescription, and nutritional guidance based on your specific type and severity of arthritis.",
        "Step 3: Evidence-Based Add-Ons — Integration of proven therapies such as heat/cold therapy, targeted exercises, stress reduction techniques, and anti-inflammatory protocols.",
        "Step 4: Education & Empowerment — Patient education on joint protection, home exercise programs, activity modification, and self-management strategies for long-term success.",
        "Step 5: Follow-Up — Regular monitoring, treatment adjustment, progress tracking, and ongoing support to maintain improvements and prevent flare-ups."
      ]
    },
    relatedResources: {
      title: "Why Choose Camelback for Arthritis",
      links: [
        {
          title: "Integrated, Evidence-Supported Care",
          description: "Our comprehensive approach combines multiple therapeutic modalities with proven research backing for optimal arthritis management outcomes.",
          type: "service"
        },
        {
          title: "Naperville Lifestyle Relevance",
          description: "Treatment plans designed specifically for Naperville residents, considering local climate, activities, and lifestyle factors that impact arthritis symptoms.",
          type: "service"
        },
        {
          title: "Sustainable, Patient-Driven Outcomes",
          description: "Focus on long-term self-management strategies and sustainable improvements that put you in control of your arthritis care.",
          type: "blog"
        }
      ]
    },
    testimonials: {
      title: "Real Experiences in Naperville",
      stories: [
        {
          quote: "The combination of acupuncture and exercise therapy has given me my life back. I can garden and walk without constant pain now.",
          name: "Margaret K.",
          condition: "Osteoarthritis",
          rating: 5
        },
        {
          quote: "Their holistic approach to my rheumatoid arthritis has reduced my flare-ups significantly. I feel more confident managing my condition.",
          name: "James R.",
          condition: "Rheumatoid Arthritis",
          rating: 5
        },
        {
          quote: "The team taught me exercises and lifestyle changes that have made a huge difference in my daily comfort and mobility.",
          name: "Linda S.",
          condition: "Joint Pain",
          rating: 5
        }
      ]
    },
    faqs: {
      title: "Common Questions",
      questions: [
        {
          question: "What types of arthritis do you treat?",
          answer: "We treat all forms of arthritis including osteoarthritis, rheumatoid arthritis, psoriatic arthritis, and other inflammatory joint conditions. Our approach is tailored to your specific type and severity."
        },
        {
          question: "How does acupuncture help with arthritis pain?",
          answer: "Research shows acupuncture can reduce inflammation, improve joint function, and provide significant pain relief for arthritis patients. It works by stimulating natural pain-relieving mechanisms in the body."
        },
        {
          question: "Can you help me reduce my dependence on arthritis medications?",
          answer: "Our goal is to improve your symptoms and function naturally. While we work alongside your physician, many patients find they can reduce their medication use as their symptoms improve with our integrated approach."
        },
        {
          question: "What makes your approach different for Naperville residents?",
          answer: "We understand the local climate effects on arthritis, seasonal activity patterns, and lifestyle factors specific to our Naperville community, allowing us to create more relevant and effective treatment plans."
        },
        {
          question: "How long before I see improvement in my arthritis symptoms?",
          answer: "Many patients notice some improvement within the first few treatments. Significant changes typically occur within 4-8 weeks of consistent care, with continued improvements as we optimize your treatment plan."
        }
      ]
    }
  },
  "adhd": {
    id: "adhd",
    name: "ADHD",
    icon: Brain,
    heroImage: "https://images.unsplash.com/photo-1654613698246-b6d44aef0fd5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYW1pbHklMjBjb25zdWx0YXRpb24lMjBBREhEJTIwdGhlcmFweXxlbnwxfHx8fDE3NTY0OTQ3NDh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    hero: {
      headline: "ADHD Care in Naperville, IL",
      subheadline: "Holistic, Evidence-Based Support for Children & Adults",
      ctaText: "Start Your ADHD Journey"
    },
    aboutCondition: {
      title: "Why Camelback Excels in ADHD Care",
      description: "Our comprehensive approach combines the latest research with personalized care plans, offering both children and adults in Naperville a holistic path to ADHD management and success.",
      keyPoints: [
        "Integrated, Multidisciplinary Care — We provide behavioral therapies, neurofeedback, coaching, and medical oversight all under one roof, creating a seamless treatment experience tailored to your specific ADHD presentation.",
        "Convenient, Locally Tailored Support — Same-day appointments, flexible scheduling, and personalized plans designed around Naperville families' routines, school schedules, and work commitments for maximum accessibility and success."
      ]
    },
    whyItWorks: {
      title: "What the Latest Research Tells Us",
      subtitle: "Evidence-based approaches that deliver real results for ADHD management",
      methods: [
        {
          icon: Stethoscope,
          title: "Behavioral Therapies Proven Effective",
          description: "Research shows that CBT and parent training serve as effective first-line treatments for ADHD, helping develop coping strategies and improving family dynamics.",
          color: "bg-blue-100 text-blue-600"
        },
        {
          icon: Brain,
          title: "Digital Therapeutics Success",
          description: "EndeavorRx, the FDA-approved digital therapeutic, demonstrates real-world improvements in attention and focus for children with ADHD through game-based interventions.",
          color: "bg-green-100 text-green-600"
        },
        {
          icon: Activity,
          title: "Neurofeedback Long-term Benefits",
          description: "Clinical studies show neurofeedback provides long-term symptom reduction in ADHD patients, offering sustainable improvements in attention and self-regulation.",
          color: "bg-purple-100 text-purple-600"
        },
        {
          icon: Heart,
          title: "Lifestyle Support Enhancement",
          description: "Evidence confirms that structured routines, regular exercise, and proper sleep significantly aid focus and mood regulation in individuals with ADHD.",
          color: "bg-orange-100 text-orange-600"
        }
      ]
    },
    treatment: {
      title: "How We Support You",
      subtitle: "A comprehensive 7-step pathway to ADHD success and long-term management",
      treatments: [
        "Step 1: Assessment — Comprehensive ADHD screening, detailed history taking, cognitive testing, and environmental factors evaluation to understand your unique presentation.",
        "Step 2: Personalized Plan — Custom treatment strategy incorporating therapy modalities, digital tools, family support, and educational accommodations based on individual needs.",
        "Step 3: Behavior & Parent Support — Evidence-based behavioral interventions, parent training programs, and family therapy to create supportive home and school environments.",
        "Step 4: Technology & Brain Training — Integration of neurofeedback, EndeavorRx digital therapeutic, and other technology-based interventions for cognitive enhancement.",
        "Step 5: Lifestyle Coaching — Structured routine development, exercise prescription, sleep hygiene improvement, and nutritional guidance for optimal brain function.",
        "Step 6: Integrative Supports — Optional complementary therapies including mindfulness training, stress reduction techniques, and organizational skills coaching as needed.",
        "Step 7: Ongoing Monitoring — Regular progress assessments, treatment adjustments, school coordination, and family support to maintain long-term success and growth."
      ]
    },
    relatedResources: {
      title: "Why Choose Camelback for ADHD Support",
      links: [
        {
          title: "Layered, Evidence-Informed Care Spectrum",
          description: "Our comprehensive approach integrates multiple research-backed modalities to address all aspects of ADHD, from behavioral interventions to cutting-edge digital therapeutics.",
          type: "service"
        },
        {
          title: "Local Insight for Naperville Families",
          description: "Treatment plans tailored to Naperville's school systems, community resources, and family routines, ensuring practical, implementable strategies for daily success.",
          type: "service"
        },
        {
          title: "Sustainable, Patient-First Mindset",
          description: "Focus on lasting functional improvements and self-management skills that grow with you, emphasizing long-term success over short-term fixes.",
          type: "blog"
        }
      ]
    },
    testimonials: {
      title: "Real Experiences in Naperville",
      stories: [
        {
          quote: "The combination of behavioral therapy and neurofeedback has transformed my daughter's ability to focus at school. She's more confident and her grades have improved dramatically.",
          name: "Sarah M.",
          condition: "Pediatric ADHD",
          rating: 5
        },
        {
          quote: "As an adult with newly diagnosed ADHD, the coaching and lifestyle strategies have given me tools I never had before. I'm finally organized and productive at work.",
          name: "Michael R.",
          condition: "Adult ADHD",
          rating: 5
        },
        {
          quote: "The parent training component was a game-changer for our family. We learned how to support our son effectively, and our home is much more peaceful now.",
          name: "Lisa and Tom K.",
          condition: "Family ADHD Support",
          rating: 5
        }
      ]
    },
    faqs: {
      title: "Common Questions",
      questions: [
        {
          question: "Do you treat both children and adults with ADHD?",
          answer: "Yes, we provide comprehensive ADHD care for all ages. Our approach is tailored to developmental needs, whether helping children succeed in school or supporting adults in workplace and life management."
        },
        {
          question: "What is EndeavorRx and how does it help with ADHD?",
          answer: "EndeavorRx is the first FDA-approved digital therapeutic for children with ADHD. It's a game-based treatment that improves attention function through targeted cognitive training, backed by clinical research."
        },
        {
          question: "How does neurofeedback work for ADHD?",
          answer: "Neurofeedback trains the brain to regulate itself more effectively by providing real-time feedback about brain activity. Research shows it can lead to lasting improvements in attention, focus, and self-control."
        },
        {
          question: "Do you coordinate with schools for children with ADHD?",
          answer: "Absolutely. We work closely with Naperville schools to ensure consistent support, help develop appropriate accommodations, and provide teacher resources for classroom success."
        },
        {
          question: "How long does ADHD treatment typically take?",
          answer: "Treatment duration varies by individual needs. Many patients see initial improvements within 4-8 weeks, with ongoing support and skill-building continuing as needed for long-term success and development."
        }
      ]
    }
  },
  "allergies-asthma": {
    id: "allergies-asthma",
    name: "Allergies & Asthma",
    icon: Heart,
    heroImage: "https://images.unsplash.com/photo-1637930030080-4ec4b95914c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwYWxsZXJneSUyMGFzdGhtYSUyMHRyZWF0bWVudHxlbnwxfHx8fDE3NTY0ODkyMjF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    hero: {
      headline: "Allergies & Asthma Care in Naperville, IL",
      subheadline: "Your Trusted Local Resource for Relief & Wellness",
      ctaText: "Schedule Your $29 New Patient Special"
    },
    aboutCondition: {
      title: "Why Choose Naperville Camelback Medical Centers for Allergies & Asthma?",
      description: "We provide comprehensive, integrative allergy and asthma care specifically tailored for Naperville residents, combining evidence-based treatments with holistic wellness approaches.",
      keyPoints: [
        "Holistic, Integrative Approach — We blend conventional medical practices with supportive therapies under one roof—chiropractic care, medical evaluation, physical rehab, acupuncture, and more—to treat both allergies and asthma comprehensively.",
        "Convenient Access in Naperville — Our clinic, located at 3416 South Route 59 #108, Naperville, IL 60564, welcomes same-day appointments and walk-ins to reach relief faster.",
        "Advanced Diagnostics & Personalized Care — We leverage precise tests—like skin-prick and IgE blood testing—to identify triggers and incorporate allergy treatment options such as immunotherapy, injection therapy, and lifestyle coaching."
      ]
    },
    whyItWorks: {
      title: "What Makes Our Allergy & Asthma Approach Effective?",
      subtitle: "Evidence-based, multi-layered care that addresses your specific needs",
      methods: [
        {
          icon: Stethoscope,
          title: "Evidence-Based, Multi-Layered Care",
          description: "Effective management involves combining diagnostics, trigger avoidance, education, and supportive therapies—a widely supported strategy in clinical research.",
          color: "bg-blue-100 text-blue-600"
        },
        {
          icon: Target,
          title: "Locally Tailored Treatments",
          description: "From monitoring Naperville's pollen seasons to advising on home environment adjustments, our strategies are crafted for Illinois residents.",
          color: "bg-green-100 text-green-600"
        },
        {
          icon: Shield,
          title: "Safe and Complementary Options",
          description: "We offer optional adjunctive therapies—such as acupuncture, nasal irrigation, or breathing techniques—that align with medical guidance for added support.",
          color: "bg-purple-100 text-purple-600"
        },
        {
          icon: Users,
          title: "Community-Centered Approach",
          description: "From seasonal allergy coping to family-based asthma education, our local commitment helps Naperville residents live healthier, allergy- and symptom-free lives.",
          color: "bg-orange-100 text-orange-600"
        }
      ]
    },
    treatment: {
      title: "Our Allergy & Asthma Treatment Blueprint",
      subtitle: "A systematic approach to comprehensive care and lasting relief",
      treatments: [
        "Step 1: Comprehensive Evaluation — Includes medical history, pulmonary function testing, allergy testing, and environmental review.",
        "Step 2: Integrated Treatment Planning — Combines evidence-based tools: immunotherapy (shots or sublingual), medication management, and holistic therapies as needed.",
        "Step 3: Education & Action Plan — We empower you with actionable steps—how to avoid triggers, when to use inhalers, lifestyle advice, and coping strategies.",
        "Step 4: Continuous Monitoring & Adjustment — Regular follow-ups keep you breathing free and allow fine-tuning of your plan.",
        "Step 5: Optional Supportive Therapies — As desired—acupuncture, dietary counseling, breathing techniques, stress reduction."
      ]
    },
    relatedResources: {
      title: "Local Expertise — Why Our Naperville Clinic Stands Out",
      links: [
        {
          title: "Expertise in Allergies & Asthma Care",
          description: "Similar to specialized centers like AllerVie Health in Naperville, we offer comprehensive diagnostics, personalized immunotherapy, and pediatric/adult-focused plans.",
          type: "service"
        },
        {
          title: "Part of Camelback's Integrated Medicine Network",
          description: "We're integrated with Camelback's established diagnostic and therapeutic infrastructure—bringing proven pain and wellness strategies into allergy and asthma care.",
          type: "service"
        },
        {
          title: "Community-Centered Approach",
          description: "From seasonal allergy coping to family-based asthma education, our local commitment helps Naperville residents live healthier, allergy- and symptom-free lives.",
          type: "blog"
        }
      ]
    },
    testimonials: {
      title: "Real Experiences in Naperville",
      stories: [
        {
          quote: "The comprehensive evaluation identified triggers I never knew about. Now I can breathe freely during allergy season!",
          name: "Jennifer M.",
          condition: "Seasonal Allergies",
          rating: 5
        },
        {
          quote: "Their integrated approach combining immunotherapy with acupuncture has been life-changing for my asthma management.",
          name: "Robert C.", 
          condition: "Adult Asthma",
          rating: 5
        },
        {
          quote: "The team's local expertise with Naperville's environmental factors made all the difference in my treatment plan.",
          name: "Maria L.",
          condition: "Environmental Allergies",
          rating: 5
        }
      ]
    },
    faqs: {
      title: "Common Questions",
      questions: [
        {
          question: "What types of allergy testing do you offer?",
          answer: "We provide comprehensive testing including skin-prick tests, IgE blood testing, and environmental assessments. Our advanced diagnostics help identify specific triggers for personalized treatment planning."
        },
        {
          question: "Do you offer immunotherapy treatments?",
          answer: "Yes, we offer both traditional injection immunotherapy and sublingual (under-the-tongue) immunotherapy options. Our medical team will determine the best approach based on your specific condition and lifestyle needs."
        },
        {
          question: "How do you tailor treatments for Naperville's environment?",
          answer: "We monitor local pollen counts, understand common Illinois allergens, and provide specific guidance for dealing with regional environmental factors that affect our Naperville patients."
        },
        {
          question: "Can you help with both adult and pediatric allergies and asthma?",
          answer: "Absolutely! Our team has extensive experience with patients of all ages. We offer family-based education and age-appropriate treatment plans for both children and adults."
        },
        {
          question: "What supportive therapies do you offer alongside medical treatment?",
          answer: "We offer complementary therapies including acupuncture, dietary counseling, breathing techniques, stress reduction, and lifestyle coaching—all designed to support your primary medical treatment."
        }
      ]
    }
  },
  "back-pain": {
    id: "back-pain",
    name: "Back Pain",
    icon: Activity,
    heroImage: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYWNrJTIwcGFpbiUyMHRyZWF0bWVudCUyMG1lZGljYWx8ZW58MXx8fHwxNzU2NDg5MjIxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    hero: {
      headline: "Back Pain Relief in Naperville",
      subheadline: "Effective, non-surgical treatments for acute and chronic back pain. Get back to the activities you love with our comprehensive spinal care approach.",
      ctaText: "Schedule Your $29 New Patient Special"
    },
    aboutCondition: {
      title: "Understanding Back Pain",
      description: "Back pain affects up to 80% of adults at some point in their lives. Whether it's a sudden injury or chronic discomfort, back pain can significantly impact your daily activities and quality of life.",
      keyPoints: [
        "Most back pain is mechanical and can be treated without surgery",
        "Poor posture and sedentary lifestyle contribute to chronic back issues",
        "Early treatment prevents acute problems from becoming chronic",
        "Combination therapies often provide the best long-term results"
      ]
    },
    whyItWorks: {
      title: "Why the Camelback Method Works",
      subtitle: "Comprehensive care that addresses all aspects of back pain",
      methods: [
        {
          icon: Stethoscope,
          title: "Precise Diagnosis",
          description: "Advanced imaging and assessment to identify the exact source of your pain",
          color: "bg-blue-100 text-blue-600"
        },
        {
          icon: Target,
          title: "Targeted Treatment",
          description: "Customized therapy plans based on your specific condition and lifestyle",
          color: "bg-green-100 text-green-600"
        },
        {
          icon: Activity,
          title: "Active Recovery",
          description: "Movement-based therapies that strengthen and stabilize your spine",
          color: "bg-purple-100 text-purple-600"
        },
        {
          icon: Shield,
          title: "Prevention Focus",
          description: "Long-term strategies to prevent future back pain episodes",
          color: "bg-orange-100 text-orange-600"
        }
      ]
    },
    treatment: {
      title: "How We Help",
      subtitle: "Multi-modal approach to back pain relief and prevention",
      treatments: [
        "Comprehensive spinal examination and movement assessment",
        "Chiropractic adjustments and spinal manipulation",
        "Physical therapy and therapeutic exercises",
        "Spinal decompression therapy for disc-related pain",
        "Trigger point therapy and soft tissue treatment",
        "Posture correction and ergonomic education",
        "Core strengthening and stability training",
        "Heat/cold therapy and electrical stimulation"
      ]
    },
    relatedResources: {
      title: "Explore Nearby Topics",
      links: [
        {
          title: "Sciatica",
          description: "Treatment for radiating leg pain from spinal issues",
          type: "service"
        },
        {
          title: "Neck Pain",
          description: "Cervical spine treatment and pain relief",
          type: "service"
        },
        {
          title: "Posture Improvement",
          description: "Tips for better posture and spinal health",
          type: "blog"
        },
        {
          title: "Exercise for Back Health",
          description: "Safe exercises to strengthen your back",
          type: "blog"
        }
      ]
    },
    testimonials: {
      title: "Real Experiences in Naperville",
      stories: [
        {
          quote: "After suffering with chronic lower back pain for years, I finally found relief. I can garden and play with my grandchildren again!",
          name: "Barbara T.",
          condition: "Chronic Lower Back Pain",
          rating: 5
        },
        {
          quote: "The team helped me avoid back surgery. Their comprehensive approach got me back to work and the golf course.",
          name: "David K.",
          condition: "Herniated Disc",
          rating: 5
        },
        {
          quote: "I was skeptical about chiropractic care, but the results speak for themselves. My back pain is completely gone.",
          name: "Lisa S.",
          condition: "Acute Back Strain",
          rating: 5
        }
      ]
    },
    faqs: {
      title: "Common Questions",
      questions: [
        {
          question: "How quickly can I expect relief from back pain?",
          answer: "Many patients experience some relief after the first treatment, with significant improvement typically seen within 2-4 weeks. Chronic conditions may take longer to fully resolve, but most patients notice improvements early in their care."
        },
        {
          question: "Is chiropractic treatment safe for back pain?",
          answer: "Yes, chiropractic care is widely recognized as one of the safest, non-invasive treatments for back pain. Our doctors are extensively trained and use gentle, precise techniques tailored to your specific condition."
        },
        {
          question: "Do I need X-rays or MRI for back pain treatment?",
          answer: "Not always. Our doctors will perform a thorough examination first. Advanced imaging is only recommended when necessary to rule out serious conditions or plan specific treatments."
        },
        {
          question: "Can you help prevent future back pain episodes?",
          answer: "Absolutely! Prevention is a key focus of our treatment. We provide education on proper posture, ergonomics, exercise, and lifestyle modifications to help prevent future back pain."
        },
        {
          question: "What should I do if my back pain is severe?",
          answer: "If you're experiencing severe back pain, especially with numbness, tingling, or weakness in your legs, contact us immediately or seek emergency care. We offer same-day appointments for acute conditions."
        }
      ]
    }
  },
  "neck-pain": {
    id: "neck-pain",
    name: "Neck Pain",
    icon: Target,
    heroImage: "https://images.unsplash.com/photo-1594824804732-5f7e79cd6e75?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZWNrJTIwcGFpbiUyMHRyZWF0bWVudCUyMG1lZGljYWx8ZW58MXx8fHwxNzU2NDg5MjIxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    hero: {
      headline: "Neck Pain Treatment in Naperville",
      subheadline: "Comprehensive care for cervical spine issues, headaches, and neck-related pain. Find relief from stiffness, tension, and chronic discomfort.",
      ctaText: "Schedule Your $29 New Patient Special"
    },
    aboutCondition: {
      title: "Understanding Neck Pain",
      description: "Neck pain is increasingly common in our digital age, often caused by poor posture, stress, injuries, or underlying cervical spine conditions. It can range from mild stiffness to severe pain that radiates into the shoulders and arms.",
      keyPoints: [
        "Poor posture from computer work is a leading cause of neck pain",
        "Whiplash injuries can cause long-term cervical spine problems",
        "Neck pain often contributes to headaches and shoulder tension",
        "Early treatment prevents acute issues from becoming chronic"
      ]
    },
    whyItWorks: {
      title: "Why the Camelback Method Works",
      subtitle: "Targeted care for cervical spine health and pain relief",
      methods: [
        {
          icon: Target,
          title: "Precise Assessment",
          description: "Detailed evaluation of cervical spine alignment and movement patterns",
          color: "bg-blue-100 text-blue-600"
        },
        {
          icon: Activity,
          title: "Gentle Techniques",
          description: "Safe, effective treatments specifically designed for the delicate cervical spine",
          color: "bg-green-100 text-green-600"
        },
        {
          icon: Brain,
          title: "Headache Relief",
          description: "Address cervicogenic headaches at their source in the neck",
          color: "bg-purple-100 text-purple-600"
        },
        {
          icon: Shield,
          title: "Posture Correction",
          description: "Long-term solutions that address workplace and lifestyle factors",
          color: "bg-orange-100 text-orange-600"
        }
      ]
    },
    treatment: {
      title: "How We Help",
      subtitle: "Comprehensive cervical spine care and pain management",
      treatments: [
        "Detailed cervical spine examination and postural analysis",
        "Gentle chiropractic adjustments for cervical vertebrae",
        "Soft tissue therapy for neck and shoulder muscles",
        "Cervical traction and decompression therapy",
        "Therapeutic exercises for neck strengthening",
        "Postural correction and ergonomic guidance",
        "Stress reduction techniques and relaxation therapy",
        "Heat therapy and electrical stimulation for pain relief"
      ]
    },
    relatedResources: {
      title: "Explore Nearby Topics",
      links: [
        {
          title: "Headaches & Migraines",
          description: "Treatment for cervicogenic and tension headaches",
          type: "service"
        },
        {
          title: "Whiplash",
          description: "Recovery from motor vehicle accident injuries",
          type: "service"
        },
        {
          title: "Workplace Ergonomics",
          description: "Setting up your workspace to prevent neck pain",
          type: "blog"
        },
        {
          title: "Stress Management",
          description: "Reducing tension-related neck and shoulder pain",
          type: "blog"
        }
      ]
    },
    testimonials: {
      title: "Real Experiences in Naperville",
      stories: [
        {
          quote: "My chronic neck pain from years of computer work is finally gone. I sleep better and no longer need daily pain medication.",
          name: "Michelle R.",
          condition: "Chronic Cervical Pain",
          rating: 5
        },
        {
          quote: "After my car accident, I thought I'd always have neck problems. The team here proved me wrong!",
          name: "Carlos M.",
          condition: "Whiplash Injury",
          rating: 5
        },
        {
          quote: "Not only did they fix my neck pain, but my headaches are gone too. I didn't realize they were connected.",
          name: "Amanda J.",
          condition: "Cervicogenic Headaches",
          rating: 5
        }
      ]
    },
    faqs: {
      title: "Common Questions",
      questions: [
        {
          question: "Is neck manipulation safe?",
          answer: "When performed by licensed professionals, cervical manipulation is very safe. Our doctors are specially trained in gentle techniques and will always discuss treatment options with you before proceeding."
        },
        {
          question: "Can neck pain cause headaches?",
          answer: "Yes, many headaches originate from problems in the cervical spine. These are called cervicogenic headaches, and treating the underlying neck issues often provides significant headache relief."
        },
        {
          question: "How can I prevent neck pain from computer work?",
          answer: "Proper ergonomics are crucial. Your monitor should be at eye level, feet flat on the floor, and you should take breaks every 30 minutes. We provide detailed ergonomic assessments and recommendations."
        },
        {
          question: "When should I be concerned about neck pain?",
          answer: "Seek immediate care if neck pain is accompanied by severe headache, fever, numbness or tingling in arms, or difficulty moving your neck. For persistent pain lasting more than a few days, schedule an evaluation."
        },
        {
          question: "How long does neck pain treatment take?",
          answer: "Treatment duration varies based on the cause and severity. Acute issues may resolve in a few weeks, while chronic conditions might require several months of care. Most patients notice improvement within the first few treatments."
        }
      ]
    }
  },
  "headaches": {
    id: "headaches",
    name: "Headaches & Migraines",
    icon: Brain,
    heroImage: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoZWFkYWNoZSUyMG1pZ3JhaW5lJTIwdHJlYXRtZW50fGVufDF8fHx8MTc1NjQ4OTIyMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    hero: {
      headline: "Headache & Migraine Relief in Naperville",
      subheadline: "Natural, effective treatment for tension headaches, migraines, and cervicogenic headaches. Stop letting pain control your life.",
      ctaText: "Schedule Your $29 New Patient Special"
    },
    aboutCondition: {
      title: "Understanding Headaches & Migraines",
      description: "Headaches affect millions of people and can significantly impact work, relationships, and quality of life. Many headaches have treatable underlying causes related to neck alignment, muscle tension, and lifestyle factors.",
      keyPoints: [
        "Many headaches originate from neck and upper cervical spine problems",
        "Tension-type headaches are often related to muscle stress and posture",
        "Migraines can be triggered by spinal misalignments and nerve irritation",
        "Natural treatments can reduce frequency and intensity without medication dependence"
      ]
    },
    whyItWorks: {
      title: "Why the Camelback Method Works",
      subtitle: "Addressing headaches at their source for lasting relief",
      methods: [
        {
          icon: Brain,
          title: "Root Cause Analysis",
          description: "Identify and treat the underlying causes of your headache patterns",
          color: "bg-blue-100 text-blue-600"
        },
        {
          icon: Target,
          title: "Cervical Focus",
          description: "Specialized treatment for neck-related headaches and cervicogenic pain",
          color: "bg-green-100 text-green-600"
        },
        {
          icon: Heart,
          title: "Drug-Free Relief",
          description: "Natural approaches that reduce reliance on pain medications",
          color: "bg-purple-100 text-purple-600"
        },
        {
          icon: Shield,
          title: "Prevention Strategies",
          description: "Lifestyle modifications and techniques to prevent future headaches",
          color: "bg-orange-100 text-orange-600"
        }
      ]
    },
    treatment: {
      title: "How We Help",
      subtitle: "Comprehensive headache and migraine management",
      treatments: [
        "Detailed headache assessment and trigger identification",
        "Upper cervical chiropractic adjustments",
        "Craniosacral therapy and gentle manipulation techniques",
        "Soft tissue therapy for neck and jaw muscles",
        "Nutritional counseling and trigger food identification",
        "Stress management and relaxation techniques",
        "Postural correction and ergonomic improvements",
        "Lifestyle modification recommendations"
      ]
    },
    relatedResources: {
      title: "Explore Nearby Topics",
      links: [
        {
          title: "Neck Pain",
          description: "Cervical spine treatment for headache relief",
          type: "service"
        },
        {
          title: "TMJ",
          description: "Jaw disorders that can trigger headaches",
          type: "service"
        },
        {
          title: "Stress Management",
          description: "Techniques to reduce tension headaches",
          type: "blog"
        },
        {
          title: "Nutrition for Headaches",
          description: "Dietary triggers and helpful foods",
          type: "blog"
        }
      ]
    },
    testimonials: {
      title: "Real Experiences in Naperville",
      stories: [
        {
          quote: "I used to get migraines 3-4 times a week. Now I maybe get one a month, and they're much less severe.",
          name: "Sarah K.",
          condition: "Chronic Migraines",
          rating: 5
        },
        {
          quote: "After years of daily headaches, I finally found a solution that doesn't involve medication. Life-changing!",
          name: "Mark D.",
          condition: "Tension Headaches",
          rating: 5
        },
        {
          quote: "The team identified that my headaches were coming from my neck. Fixing my posture fixed my headaches!",
          name: "Jennifer L.",
          condition: "Cervicogenic Headaches",
          rating: 5
        }
      ]
    },
    faqs: {
      title: "Common Questions",
      questions: [
        {
          question: "Can chiropractic care really help with migraines?",
          answer: "Yes, numerous studies show that chiropractic treatment can significantly reduce migraine frequency and intensity, especially for migraines with a cervical component. Many patients see dramatic improvements."
        },
        {
          question: "How do you determine what's causing my headaches?",
          answer: "We conduct a comprehensive evaluation including medical history, physical examination, postural analysis, and sometimes imaging studies to identify the specific triggers and underlying causes of your headaches."
        },
        {
          question: "Will I need to stop my headache medications?",
          answer: "We work with you and your physician regarding medications. Many patients are able to reduce or eliminate medication use as their headaches improve, but any medication changes should always be supervised by your prescribing doctor."
        },
        {
          question: "How long before I see improvement in my headaches?",
          answer: "Many patients notice some improvement within the first few treatments. For chronic conditions, significant changes typically occur within 4-8 weeks of consistent care."
        },
        {
          question: "Can stress-related headaches be treated?",
          answer: "Absolutely. We address both the physical components (muscle tension, alignment) and provide stress management techniques and lifestyle recommendations to help reduce stress-related headaches."
        }
      ]
    }
  },
  "sciatica": {
    id: "sciatica",
    name: "Sciatica",
    icon: Zap,
    heroImage: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2lhdGljYSUyMGxlZyUyMHBhaW4lMjB0cmVhdG1lbnR8ZW58MXx8fHwxNzU2NDg5MjIxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    hero: {
      headline: "Sciatica Treatment in Naperville",
      subheadline: "Effective relief for radiating leg pain, numbness, and tingling. Get back to walking, sitting, and moving without pain.",
      ctaText: "Schedule Your $29 New Patient Special"
    },
    aboutCondition: {
      title: "Understanding Sciatica",
      description: "Sciatica refers to pain that radiates along the path of the sciatic nerve, which branches from your lower back through your hips and buttocks and down each leg. This condition can cause severe pain and significantly limit mobility.",
      keyPoints: [
        "Sciatica is usually caused by compression or irritation of nerve roots",
        "Herniated discs are the most common cause of sciatic nerve pain",
        "Symptoms can include pain, numbness, tingling, and weakness in the leg",
        "Most cases can be successfully treated without surgery"
      ]
    },
    whyItWorks: {
      title: "Why the Camelback Method Works",
      subtitle: "Targeted treatment to relieve nerve compression and restore function",
      methods: [
        {
          icon: Target,
          title: "Precise Diagnosis",
          description: "Advanced assessment to identify the exact cause of nerve compression",
          color: "bg-blue-100 text-blue-600"
        },
        {
          icon: Zap,
          title: "Nerve Decompression",
          description: "Gentle techniques to relieve pressure on the sciatic nerve",
          color: "bg-green-100 text-green-600"
        },
        {
          icon: Activity,
          title: "Movement Restoration",
          description: "Specific exercises to improve mobility and prevent recurrence",
          color: "bg-purple-100 text-purple-600"
        },
        {
          icon: Shield,
          title: "Long-term Solutions",
          description: "Comprehensive care that addresses underlying spinal issues",
          color: "bg-orange-100 text-orange-600"
        }
      ]
    },
    treatment: {
      title: "How We Help",
      subtitle: "Multi-modal approach to sciatica relief and recovery",
      treatments: [
        "Comprehensive lumbar spine and neurological examination",
        "Spinal decompression therapy to relieve disc pressure",
        "Chiropractic adjustments to restore proper spinal alignment",
        "Physical therapy exercises for core strengthening",
        "Soft tissue therapy to reduce muscle spasms",
        "Postural education and ergonomic modifications",
        "Heat/cold therapy and electrical stimulation",
        "Activity modification and movement education"
      ]
    },
    relatedResources: {
      title: "Explore Nearby Topics",
      links: [
        {
          title: "Back Pain",
          description: "Comprehensive lower back pain treatment",
          type: "service"
        },
        {
          title: "Herniated Disc",
          description: "Non-surgical disc problem treatment",
          type: "blog"
        },
        {
          title: "Core Strengthening",
          description: "Exercises to support your lower back",
          type: "blog"
        },
        {
          title: "Posture Improvement",
          description: "Preventing future sciatic episodes",
          type: "blog"
        }
      ]
    },
    testimonials: {
      title: "Real Experiences in Naperville",
      stories: [
        {
          quote: "The shooting pain down my leg was unbearable. After just a few treatments, I could walk normally again.",
          name: "Robert H.",
          condition: "Acute Sciatica",
          rating: 5
        },
        {
          quote: "I was told I needed surgery for my herniated disc. Thanks to this team, I avoided the operating room completely.",
          name: "Patricia W.",
          condition: "Herniated Disc with Sciatica",
          rating: 5
        },
        {
          quote: "Not only did they relieve my sciatica, but they taught me how to prevent it from coming back.",
          name: "James F.",
          condition: "Chronic Sciatica",
          rating: 5
        }
      ]
    },
    faqs: {
      title: "Common Questions",
      questions: [
        {
          question: "How long does it take to recover from sciatica?",
          answer: "Recovery time varies depending on the cause and severity. Acute cases may improve within a few weeks, while chronic sciatica might take several months. Most patients notice significant improvement within 4-6 weeks of treatment."
        },
        {
          question: "Can sciatica be cured permanently?",
          answer: "With proper treatment and lifestyle modifications, most people can achieve long-term relief from sciatica. Our goal is not just to relieve current symptoms but to address underlying causes to prevent recurrence."
        },
        {
          question: "Is it safe to exercise with sciatica?",
          answer: "Yes, but it's important to do the right exercises. We'll provide specific exercises that are safe and beneficial for your condition, while advising which activities to avoid during recovery."
        },
        {
          question: "When should I be concerned about sciatica?",
          answer: "Seek immediate care if you experience loss of bowel or bladder control, severe weakness in the leg, or progressively worsening symptoms. These could indicate a serious condition requiring urgent attention."
        },
        {
          question: "Can sciatica be treated without surgery?",
          answer: "Yes, the vast majority of sciatica cases can be successfully treated without surgery. Conservative treatments like those we provide are typically the first and most effective approach."
        }
      ]
    }
  },
  "adhd": {
    id: "adhd",
    name: "ADHD",
    icon: Brain,
    heroImage: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxBREhEJTIwdHJlYXRtZW50JTIwY2hpbGRyZW4lMjBmb2N1c3xlbnwxfHx8fDE3NTY0ODkyMjF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    hero: {
      headline: "ADHD Support in Naperville",
      subheadline: "Natural, comprehensive approaches to attention and focus challenges. Supporting children and adults with integrated care strategies.",
      ctaText: "Schedule Your $29 New Patient Special"
    },
    aboutCondition: {
      title: "Understanding ADHD",
      description: "Attention Deficit Hyperactivity Disorder (ADHD) affects both children and adults, impacting attention, impulse control, and sometimes hyperactivity. A comprehensive approach can significantly improve focus and daily functioning.",
      keyPoints: [
        "ADHD symptoms can often be improved with natural interventions",
        "Nutrition and lifestyle factors play important roles in attention",
        "Physical alignment and nervous system function affect focus",
        "Multi-modal approaches often provide better outcomes than medication alone"
      ]
    },
    whyItWorks: {
      title: "Why the Camelback Method Works",
      subtitle: "Holistic approach to attention and focus challenges",
      methods: [
        {
          icon: Brain,
          title: "Neurological Support",
          description: "Optimizing nervous system function through spinal care and neurological exercises",
          color: "bg-blue-100 text-blue-600"
        },
        {
          icon: Heart,
          title: "Nutritional Guidance",
          description: "Identifying food sensitivities and providing brain-healthy nutrition plans",
          color: "bg-green-100 text-green-600"
        },
        {
          icon: Activity,
          title: "Movement Therapy",
          description: "Specific exercises and activities that improve focus and attention",
          color: "bg-purple-100 text-purple-600"
        },
        {
          icon: Users,
          title: "Family Support",
          description: "Education and strategies for parents, teachers, and caregivers",
          color: "bg-orange-100 text-orange-600"
        }
      ]
    },
    treatment: {
      title: "How We Help",
      subtitle: "Comprehensive support for attention and focus challenges",
      treatments: [
        "Comprehensive neurological and developmental assessment",
        "Chiropractic care to optimize nervous system function",
        "Nutritional evaluation and dietary recommendations",
        "Food sensitivity testing and elimination protocols",
        "Sensory integration and movement therapy",
        "Cognitive exercises and brain training activities",
        "Lifestyle modifications and environmental adjustments",
        "Family education and support strategies"
      ]
    },
    relatedResources: {
      title: "Explore Nearby Topics",
      links: [
        {
          title: "Sleep Issues",
          description: "Improving sleep quality for better focus",
          type: "service"
        },
        {
          title: "Nutrition Counseling",
          description: "Brain-healthy diet strategies",
          type: "blog"
        },
        {
          title: "Stress Management",
          description: "Techniques for managing overwhelm and anxiety",
          type: "blog"
        },
        {
          title: "Exercise for Focus",
          description: "Movement activities that improve attention",
          type: "blog"
        }
      ]
    },
    testimonials: {
      title: "Real Experiences in Naperville",
      stories: [
        {
          quote: "My son's focus improved dramatically after addressing his food sensitivities and starting chiropractic care.",
          name: "Karen M.",
          condition: "Pediatric ADHD",
          rating: 5
        },
        {
          quote: "As an adult with ADHD, I never thought natural treatments could help. I was wrong - my concentration is so much better.",
          name: "Michael T.",
          condition: "Adult ADHD",
          rating: 5
        },
        {
          quote: "The comprehensive approach here helped our daughter succeed in school without increasing her medication.",
          name: "David & Lisa R.",
          condition: "Childhood ADHD",
          rating: 5
        }
      ]
    },
    faqs: {
      title: "Common Questions",
      questions: [
        {
          question: "Can ADHD be treated naturally?",
          answer: "While ADHD is a neurological condition that may require medication, many symptoms can be significantly improved through natural interventions including nutrition, chiropractic care, exercise, and lifestyle modifications."
        },
        {
          question: "How does chiropractic care help with ADHD?",
          answer: "Chiropractic care can optimize nervous system function, which may improve focus and attention. Proper spinal alignment ensures optimal communication between the brain and body."
        },
        {
          question: "What role does nutrition play in ADHD?",
          answer: "Nutrition plays a significant role in brain function. Food sensitivities, sugar intake, and nutrient deficiencies can all impact attention and behavior. We help identify and address these factors."
        },
        {
          question: "Do you work with children's existing doctors and teachers?",
          answer: "Absolutely. We believe in collaborative care and are happy to communicate with your child's pediatrician, psychiatrist, teachers, and other care providers to ensure coordinated treatment."
        },
        {
          question: "How long before we see improvements?",
          answer: "Some families notice improvements within a few weeks, particularly with dietary changes. Neurological improvements from chiropractic care and other interventions typically become evident within 4-8 weeks of consistent care."
        }
      ]
    }
  },
  "arthritis": {
    id: "arthritis",
    name: "Arthritis",
    icon: Bone,
    heroImage: "https://images.unsplash.com/photo-1693821193140-7db5779d47ed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRocml0aXMlMjBqb2ludCUyMHBhaW4lMjB0cmVhdG1lbnR8ZW58MXx8fHwxNzU2NDg5Nzg0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    hero: {
      headline: "Arthritis Management in Naperville",
      subheadline: "Comprehensive care for joint pain, stiffness, and mobility issues. Natural approaches to reduce inflammation and improve quality of life.",
      ctaText: "Schedule Your $29 New Patient Special"
    },
    aboutCondition: {
      title: "Understanding Arthritis",
      description: "Arthritis encompasses over 100 different conditions that cause joint pain, stiffness, and inflammation. The most common types are osteoarthritis and rheumatoid arthritis, both of which can significantly impact daily activities.",
      keyPoints: [
        "Early intervention can slow progression and reduce symptoms",
        "Natural treatments can effectively reduce inflammation and pain",
        "Movement and exercise are crucial for maintaining joint health",
        "Lifestyle modifications can significantly improve outcomes"
      ]
    },
    whyItWorks: {
      title: "Why the Camelback Method Works",
      subtitle: "Comprehensive arthritis management without relying solely on medication",
      methods: [
        {
          icon: Shield,
          title: "Joint Protection",
          description: "Gentle therapies that protect joints while reducing inflammation",
          color: "bg-blue-100 text-blue-600"
        },
        {
          icon: Activity,
          title: "Mobility Enhancement",
          description: "Specific exercises and treatments to maintain and improve range of motion",
          color: "bg-green-100 text-green-600"
        },
        {
          icon: Heart,
          title: "Anti-Inflammatory Support",
          description: "Natural approaches to reduce systemic inflammation",
          color: "bg-purple-100 text-purple-600"
        },
        {
          icon: Target,
          title: "Pain Management",
          description: "Non-pharmaceutical strategies for effective pain relief",
          color: "bg-orange-100 text-orange-600"
        }
      ]
    },
    treatment: {
      title: "How We Help",
      subtitle: "Multi-faceted approach to arthritis care and joint health",
      treatments: [
        "Comprehensive joint assessment and mobility testing",
        "Gentle chiropractic care for spinal and peripheral joints",
        "Physical therapy and therapeutic exercise programs",
        "Nutritional counseling for anti-inflammatory diet",
        "Acupuncture for pain relief and inflammation reduction",
        "Heat and cold therapy applications",
        "Joint mobilization and soft tissue techniques",
        "Lifestyle modification counseling and support"
      ]
    },
    relatedResources: {
      title: "Explore Nearby Topics",
      links: [
        {
          title: "Knee Pain",
          description: "Specialized care for arthritic knee conditions",
          type: "service"
        },
        {
          title: "Hip Pain",
          description: "Treatment for hip arthritis and mobility issues",
          type: "service"
        },
        {
          title: "Anti-Inflammatory Diet",
          description: "Nutrition strategies to reduce arthritis symptoms",
          type: "blog"
        },
        {
          title: "Gentle Exercise",
          description: "Safe movement for arthritic joints",
          type: "blog"
        }
      ]
    },
    testimonials: {
      title: "Real Experiences in Naperville",
      stories: [
        {
          quote: "My knee arthritis was so bad I could barely walk. Now I'm back to my daily walks around town!",
          name: "Eleanor P.",
          condition: "Knee Arthritis",
          rating: 5
        },
        {
          quote: "The natural approach here helped me reduce my arthritis medications while feeling better than I have in years.",
          name: "Frank D.",
          condition: "Rheumatoid Arthritis",
          rating: 5
        },
        {
          quote: "I was told surgery was my only option. Thanks to this team, I avoided the operating room completely.",
          name: "Nancy K.",
          condition: "Hip Arthritis",
          rating: 5
        }
      ]
    },
    faqs: {
      title: "Common Questions",
      questions: [
        {
          question: "Can arthritis be treated naturally?",
          answer: "While arthritis cannot be cured, its symptoms can be significantly managed through natural treatments including chiropractic care, nutrition, exercise, and lifestyle modifications."
        },
        {
          question: "Will exercise make my arthritis worse?",
          answer: "Appropriate exercise is essential for arthritis management. We design safe, gentle exercise programs that improve joint mobility and reduce stiffness without causing harm."
        },
        {
          question: "How does nutrition affect arthritis?",
          answer: "Diet plays a crucial role in inflammation levels. We help identify inflammatory foods to avoid and recommend anti-inflammatory foods that can reduce arthritis symptoms."
        },
        {
          question: "Is chiropractic care safe for arthritic joints?",
          answer: "Yes, when performed by trained professionals. We use gentle techniques specifically adapted for arthritic conditions, focusing on improving function while protecting joint integrity."
        },
        {
          question: "How long before I see improvement?",
          answer: "Many patients notice reduced pain and improved mobility within 2-4 weeks. Significant improvements in function and quality of life typically develop over 2-3 months of consistent care."
        }
      ]
    }
  },
  "sports-injuries": {
    id: "sports-injuries",
    name: "Sports Injuries",
    icon: Trophy,
    heroImage: "https://images.unsplash.com/photo-1659081451303-33bcb3c5e24d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcG9ydHMlMjBpbmp1cnklMjBtZWRpY2FsJTIwdHJlYXRtZW50fGVufDF8fHx8MTc1NjQ4OTc4OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    hero: {
      headline: "Sports Injury Treatment in Naperville",
      subheadline: "Get back in the game faster with specialized sports medicine care. From weekend warriors to competitive athletes, we help you recover and perform.",
      ctaText: "Schedule Your $29 New Patient Special"
    },
    aboutCondition: {
      title: "Understanding Sports Injuries",
      description: "Sports injuries can range from acute trauma to overuse conditions. Proper treatment not only helps you recover but can also improve performance and prevent future injuries.",
      keyPoints: [
        "Quick intervention leads to faster recovery and return to sport",
        "Proper rehabilitation prevents chronic problems and re-injury",
        "Sports-specific treatment addresses the demands of your activity",
        "Performance enhancement is often a bonus of proper injury treatment"
      ]
    },
    whyItWorks: {
      title: "Why the Camelback Method Works",
      subtitle: "Sport-specific treatment for optimal recovery and performance",
      methods: [
        {
          icon: Trophy,
          title: "Sports Medicine Expertise",
          description: "Specialized knowledge of sports biomechanics and injury patterns",
          color: "bg-blue-100 text-blue-600"
        },
        {
          icon: Activity,
          title: "Functional Recovery",
          description: "Treatment focused on returning you to your sport stronger than before",
          color: "bg-green-100 text-green-600"
        },
        {
          icon: Target,
          title: "Injury Prevention",
          description: "Addressing underlying issues to prevent future injuries",
          color: "bg-purple-100 text-purple-600"
        },
        {
          icon: Zap,
          title: "Performance Optimization",
          description: "Techniques that not only heal but can improve athletic performance",
          color: "bg-orange-100 text-orange-600"
        }
      ]
    },
    treatment: {
      title: "How We Help",
      subtitle: "Comprehensive sports injury recovery and performance enhancement",
      treatments: [
        "Biomechanical analysis and movement assessment",
        "Sport-specific rehabilitation programs",
        "Chiropractic care for optimal spinal alignment",
        "Soft tissue therapy and myofascial release",
        "Functional movement training and exercise prescription",
        "Injury prevention education and training",
        "Return-to-play protocols and clearance",
        "Performance enhancement and conditioning guidance"
      ]
    },
    relatedResources: {
      title: "Explore Nearby Topics",
      links: [
        {
          title: "Knee Pain",
          description: "Common sports-related knee injuries and treatment",
          type: "service"
        },
        {
          title: "Shoulder Pain",
          description: "Overhead sport injuries and rehabilitation",
          type: "service"
        },
        {
          title: "Injury Prevention",
          description: "Strategies to stay healthy and active",
          type: "blog"
        },
        {
          title: "Performance Training",
          description: "Exercises to enhance athletic performance",
          type: "blog"
        }
      ]
    },
    testimonials: {
      title: "Real Experiences in Naperville",
      stories: [
        {
          quote: "Tore my ACL playing soccer. Not only did they get me back on the field, but I'm playing better than ever!",
          name: "Jake M.",
          condition: "ACL Injury",
          rating: 5
        },
        {
          quote: "My tennis elbow was keeping me off the court for months. Now I'm back to playing tournaments.",
          name: "Susan R.",
          condition: "Tennis Elbow",
          rating: 5
        },
        {
          quote: "As a runner, I was constantly dealing with injuries. Their approach has kept me running pain-free for over a year.",
          name: "Tom L.",
          condition: "Running Injuries",
          rating: 5
        }
      ]
    },
    faqs: {
      title: "Common Questions",
      questions: [
        {
          question: "How quickly can I return to sports after an injury?",
          answer: "Return-to-sport timelines vary greatly depending on the injury type and severity. We follow evidence-based protocols to ensure safe return while minimizing re-injury risk. Most athletes return stronger than before injury."
        },
        {
          question: "Can you help prevent future sports injuries?",
          answer: "Absolutely! Injury prevention is a major focus. We identify movement patterns, muscle imbalances, and other risk factors that could lead to injury, then develop specific strategies to address them."
        },
        {
          question: "Do you work with athletes of all levels?",
          answer: "Yes, we treat everyone from weekend warriors to competitive athletes. Our approach is tailored to your specific sport, skill level, and goals."
        },
        {
          question: "What makes sports injury treatment different from regular injury care?",
          answer: "Sports medicine focuses on the specific demands of your sport. We understand the biomechanics, common injury patterns, and performance requirements unique to different athletic activities."
        },
        {
          question: "Can treatment actually improve my performance?",
          answer: "Often yes! By correcting movement patterns, addressing muscle imbalances, and optimizing function, many athletes find they perform better after proper treatment than they did before their injury."
        }
      ]
    }
  },
  "knee-pain": {
    id: "knee-pain",
    name: "Knee Pain",
    icon: Bone,
    heroImage: "https://images.unsplash.com/photo-1715531786031-7c4e30a45c62?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrbmVlJTIwcGFpbiUyMG1lZGljYWwlMjB0cmVhdG1lbnR8ZW58MXx8fHwxNzU2NDg5NzkyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    hero: {
      headline: "Knee Pain Relief in Naperville",
      subheadline: "Comprehensive treatment for knee injuries, arthritis, and chronic pain. Get back to walking, climbing stairs, and enjoying activities without limitation.",
      ctaText: "Schedule Your $29 New Patient Special"
    },
    aboutCondition: {
      title: "Understanding Knee Pain",
      description: "The knee is the largest joint in the body and bears significant stress during daily activities. Knee pain can result from injuries, arthritis, overuse, or biomechanical issues elsewhere in the body.",
      keyPoints: [
        "Many knee problems stem from hip or ankle dysfunction",
        "Early treatment prevents minor issues from becoming chronic",
        "Proper biomechanics are crucial for long-term knee health",
        "Non-surgical treatments are effective for most knee conditions"
      ]
    },
    whyItWorks: {
      title: "Why the Camelback Method Works",
      subtitle: "Comprehensive approach to knee pain and function",
      methods: [
        {
          icon: Target,
          title: "Root Cause Analysis",
          description: "Identifying the true source of knee pain, often found in hip or foot dysfunction",
          color: "bg-blue-100 text-blue-600"
        },
        {
          icon: Activity,
          title: "Functional Restoration",
          description: "Treatments that restore normal movement patterns and eliminate compensations",
          color: "bg-green-100 text-green-600"
        },
        {
          icon: Shield,
          title: "Joint Protection",
          description: "Techniques that reduce stress on the knee while promoting healing",
          color: "bg-purple-100 text-purple-600"
        },
        {
          icon: Zap,
          title: "Pain Relief",
          description: "Effective methods to reduce pain and inflammation naturally",
          color: "bg-orange-100 text-orange-600"
        }
      ]
    },
    treatment: {
      title: "How We Help",
      subtitle: "Multi-modal knee pain treatment and rehabilitation",
      treatments: [
        "Comprehensive knee and lower extremity examination",
        "Biomechanical analysis of walking and movement patterns",
        "Chiropractic care for optimal hip and ankle function",
        "Physical therapy and strengthening exercises",
        "Soft tissue therapy for surrounding muscles",
        "Joint mobilization and manipulation techniques",
        "Activity modification and movement retraining",
        "Advanced therapies including cold laser and electrical stimulation"
      ]
    },
    relatedResources: {
      title: "Explore Nearby Topics",
      links: [
        {
          title: "Hip Pain",
          description: "How hip problems can cause knee pain",
          type: "service"
        },
        {
          title: "Arthritis",
          description: "Managing knee arthritis naturally",
          type: "service"
        },
        {
          title: "Knee Exercises",
          description: "Safe strengthening for knee health",
          type: "blog"
        },
        {
          title: "Walking Biomechanics",
          description: "Proper movement patterns for knee protection",
          type: "blog"
        }
      ]
    },
    testimonials: {
      title: "Real Experiences in Naperville",
      stories: [
        {
          quote: "I was told I needed knee replacement surgery. After treatment here, my pain is gone and I'm back to hiking!",
          name: "Margaret S.",
          condition: "Severe Knee Arthritis",
          rating: 5
        },
        {
          quote: "My runner's knee kept me sidelined for months. Now I'm training for my first marathon pain-free.",
          name: "Alex P.",
          condition: "Patellofemoral Pain",
          rating: 5
        },
        {
          quote: "The team discovered my knee pain was actually coming from my hip. Fixing that solved everything!",
          name: "Richard B.",
          condition: "Referred Knee Pain",
          rating: 5
        }
      ]
    },
    faqs: {
      title: "Common Questions",
      questions: [
        {
          question: "Can knee pain be treated without surgery?",
          answer: "Most knee conditions can be successfully treated without surgery. Conservative treatments like those we provide are often the first and most effective approach for knee pain."
        },
        {
          question: "Why might my knee pain be caused by my hip or foot?",
          answer: "The body works as a kinetic chain. Problems in the hip or foot can alter walking patterns and place abnormal stress on the knee, leading to pain and dysfunction."
        },
        {
          question: "Is it safe to exercise with knee pain?",
          answer: "The right exercises can actually help knee pain, while the wrong ones can make it worse. We'll design a safe, effective exercise program specific to your condition and needs."
        },
        {
          question: "How long does knee pain treatment take?",
          answer: "Treatment duration varies based on the cause and severity. Acute injuries may resolve in a few weeks, while chronic conditions might take several months. Most patients notice improvement within the first few treatments."
        },
        {
          question: "Can you help with knee arthritis?",
          answer: "Yes, we have significant success treating knee arthritis with natural methods. While we can't reverse arthritis, we can often dramatically reduce pain and improve function."
        }
      ]
    }
  },
  "sleep-issues": {
    id: "sleep-issues",
    name: "Sleep Issues",
    icon: Moon,
    heroImage: "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbGVlcCUyMGRpc29yZGVyJTIwaW5zb21uaWElMjB0cmVhdG1lbnR8ZW58MXx8fHwxNzU2NDg5MjIxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    hero: {
      headline: "Sleep Disorder Treatment in Naperville",
      subheadline: "Natural approaches to improve sleep quality, reduce insomnia, and restore healthy sleep patterns. Wake up refreshed and energized.",
      ctaText: "Schedule Your $29 New Patient Special"
    },
    aboutCondition: {
      title: "Understanding Sleep Issues",
      description: "Quality sleep is essential for physical health, mental wellbeing, and daily functioning. Sleep disorders affect millions and can be caused by physical discomfort, stress, lifestyle factors, or underlying health conditions.",
      keyPoints: [
        "Poor sleep affects immune function, weight management, and mental health",
        "Physical discomfort and spinal misalignment can disrupt sleep",
        "Stress and anxiety are major contributors to sleep problems",
        "Natural approaches can often restore healthy sleep patterns"
      ]
    },
    whyItWorks: {
      title: "Why the Camelback Method Works",
      subtitle: "Holistic approach to sleep restoration and quality",
      methods: [
        {
          icon: Moon,
          title: "Sleep Hygiene",
          description: "Comprehensive education on creating optimal sleep environments and habits",
          color: "bg-blue-100 text-blue-600"
        },
        {
          icon: Heart,
          title: "Stress Reduction",
          description: "Techniques to calm the nervous system and reduce bedtime anxiety",
          color: "bg-green-100 text-green-600"
        },
        {
          icon: Activity,
          title: "Physical Comfort",
          description: "Addressing pain and discomfort that interferes with sleep",
          color: "bg-purple-100 text-purple-600"
        },
        {
          icon: Brain,
          title: "Circadian Support",
          description: "Natural methods to regulate your body's internal clock",
          color: "bg-orange-100 text-orange-600"
        }
      ]
    },
    treatment: {
      title: "How We Help",
      subtitle: "Comprehensive sleep improvement and restoration program",
      treatments: [
        "Sleep quality assessment and pattern analysis",
        "Spinal care to reduce physical discomfort affecting sleep",
        "Stress management and relaxation techniques",
        "Nutritional guidance for sleep-supporting foods",
        "Exercise recommendations for better sleep",
        "Sleep hygiene education and environment optimization",
        "Natural supplement recommendations when appropriate",
        "Lifestyle modification counseling"
      ]
    },
    relatedResources: {
      title: "Explore Nearby Topics",
      links: [
        {
          title: "ADHD",
          description: "Sleep's role in attention and focus",
          type: "service"
        },
        {
          title: "Stress Management",
          description: "Reducing anxiety for better sleep",
          type: "blog"
        },
        {
          title: "Nutrition for Sleep",
          description: "Foods that promote healthy sleep",
          type: "blog"
        },
        {
          title: "Bedtime Routines",
          description: "Creating habits for better sleep",
          type: "blog"
        }
      ]
    },
    testimonials: {
      title: "Real Experiences in Naperville",
      stories: [
        {
          quote: "I hadn't slept through the night in years. Now I fall asleep easily and wake up feeling refreshed.",
          name: "Linda M.",
          condition: "Chronic Insomnia",
          rating: 5
        },
        {
          quote: "My back pain was keeping me awake every night. Fixing that problem gave me my sleep back.",
          name: "Steve K.",
          condition: "Pain-Related Sleep Issues",
          rating: 5
        },
        {
          quote: "The natural approach here helped me get off sleep medications and sleep better than I have in decades.",
          name: "Carol T.",
          condition: "Sleep Medication Dependence",
          rating: 5
        }
      ]
    },
    faqs: {
      title: "Common Questions",
      questions: [
        {
          question: "How can chiropractic care help with sleep problems?",
          answer: "Spinal misalignments can cause physical discomfort that interferes with sleep. Chiropractic care can also help regulate the nervous system, promoting better sleep patterns."
        },
        {
          question: "What natural methods work for insomnia?",
          answer: "We use a combination of approaches including stress reduction techniques, sleep hygiene education, nutritional support, and addressing physical factors that may be disrupting sleep."
        },
        {
          question: "How long before I see improvement in my sleep?",
          answer: "Many patients notice improvements within 1-2 weeks of implementing our recommendations. Significant, lasting changes in sleep quality typically develop over 4-8 weeks."
        },
        {
          question: "Can you help me reduce sleep medications?",
          answer: "We can often help improve sleep naturally, which may allow you to reduce sleep medications. However, any medication changes must be supervised by your prescribing physician."
        },
        {
          question: "Do you treat sleep apnea?",
          answer: "While we don't treat sleep apnea directly, we can address contributing factors like weight management, neck positioning, and overall health that may improve sleep apnea symptoms when used alongside medical treatment."
        }
      ]
    }
  },
  "carpal-tunnel": {
    id: "carpal-tunnel",
    name: "Carpal Tunnel",
    icon: Hand,
    heroImage: "https://images.unsplash.com/photo-1715531786016-d9d3e0c55952?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXJwYWwlMjB0dW5uZWwlMjB3cmlzdCUyMHBhaW4lMjB0cmVhdG1lbnR8ZW58MXx8fHwxNzU2NDg5ODkyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    hero: {
      headline: "Carpal Tunnel Treatment in Naperville",
      subheadline: "Non-surgical treatment for wrist pain, numbness, and tingling. Get back to work and daily activities without surgery.",
      ctaText: "Schedule Your $29 New Patient Special"
    },
    aboutCondition: {
      title: "Understanding Carpal Tunnel Syndrome",
      description: "Carpal tunnel syndrome occurs when the median nerve is compressed as it passes through the carpal tunnel in the wrist. This common condition often affects people who perform repetitive hand and wrist motions.",
      keyPoints: [
        "Early treatment can prevent the need for surgery",
        "Neck and shoulder problems often contribute to carpal tunnel symptoms",
        "Ergonomic modifications are crucial for prevention",
        "Conservative treatment is successful in most cases"
      ]
    },
    whyItWorks: {
      title: "Why the Camelback Method Works",
      subtitle: "Comprehensive approach addressing the whole kinetic chain",
      methods: [
        {
          icon: Hand,
          title: "Nerve Decompression",
          description: "Gentle techniques to relieve pressure on the median nerve",
          color: "bg-blue-100 text-blue-600"
        },
        {
          icon: Target,
          title: "Cervical Focus",
          description: "Addressing neck and shoulder issues that contribute to symptoms",
          color: "bg-green-100 text-green-600"
        },
        {
          icon: Activity,
          title: "Movement Restoration",
          description: "Exercises to improve wrist mobility and nerve gliding",
          color: "bg-purple-100 text-purple-600"
        },
        {
          icon: Shield,
          title: "Prevention Strategies",
          description: "Ergonomic education and workplace modifications",
          color: "bg-orange-100 text-orange-600"
        }
      ]
    },
    treatment: {
      title: "How We Help",
      subtitle: "Non-surgical carpal tunnel treatment and prevention",
      treatments: [
        "Comprehensive nerve conduction and mobility testing",
        "Cervical spine assessment and treatment",
        "Gentle chiropractic adjustments for optimal nerve function",
        "Soft tissue therapy for forearm and wrist muscles",
        "Nerve mobilization and gliding exercises",
        "Ergonomic assessment and workplace modifications",
        "Therapeutic exercises for strength and flexibility",
        "Home care education and activity modification"
      ]
    },
    relatedResources: {
      title: "Explore Nearby Topics",
      links: [
        {
          title: "Neck Pain",
          description: "How cervical problems contribute to carpal tunnel",
          type: "service"
        },
        {
          title: "Workplace Ergonomics",
          description: "Setting up your workspace for wrist health",
          type: "blog"
        },
        {
          title: "Wrist Exercises",
          description: "Strengthening and stretching for prevention",
          type: "blog"
        },
        {
          title: "Computer Posture",
          description: "Proper positioning to prevent repetitive strain",
          type: "blog"
        }
      ]
    },
    testimonials: {
      title: "Real Experiences in Naperville",
      stories: [
        {
          quote: "I was scheduled for carpal tunnel surgery. After treatment here, my symptoms are completely gone!",
          name: "Jennifer R.",
          condition: "Severe Carpal Tunnel",
          rating: 5
        },
        {
          quote: "As a computer programmer, my wrists were constantly painful. Now I work pain-free all day.",
          name: "Brian L.",
          condition: "Repetitive Strain Injury",
          rating: 5
        },
        {
          quote: "The numbness in my hands was getting worse. Treatment here restored normal feeling and function.",
          name: "Maria G.",
          condition: "Median Nerve Compression",
          rating: 5
        }
      ]
    },
    faqs: {
      title: "Common Questions",
      questions: [
        {
          question: "Can carpal tunnel be treated without surgery?",
          answer: "Yes, most cases of carpal tunnel syndrome can be successfully treated with conservative methods, especially when caught early. Surgery is typically only needed in severe, long-standing cases."
        },
        {
          question: "How does neck treatment help carpal tunnel?",
          answer: "The nerves that go to your hand originate in your neck. Problems in the cervical spine can contribute to or mimic carpal tunnel symptoms. Treating the whole pathway often provides better results."
        },
        {
          question: "Will I need to stop working during treatment?",
          answer: "Usually not. We focus on modifying your work activities and improving ergonomics so you can continue working while healing. Complete work cessation is rarely necessary."
        },
        {
          question: "How long does carpal tunnel treatment take?",
          answer: "Most patients notice improvement within 2-4 weeks, with significant resolution typically occurring within 6-12 weeks of consistent treatment and ergonomic modifications."
        },
        {
          question: "Can carpal tunnel come back after treatment?",
          answer: "With proper ergonomic modifications and preventive exercises, recurrence is uncommon. We provide comprehensive education to help you maintain long-term wrist health."
        }
      ]
    }
  },
  "pregnancy": {
    id: "pregnancy",
    name: "Pregnancy Care",
    icon: Baby,
    heroImage: "https://images.unsplash.com/photo-1523437250197-99a61e7877e7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmVnbmFuY3klMjBwcmVuYXRhbCUyMGNhcmUlMjB0cmVhdG1lbnR8ZW58MXx8fHwxNzU2NDg5ODk4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    hero: {
      headline: "Prenatal Care in Naperville",
      subheadline: "Safe, gentle chiropractic care during pregnancy. Support your body through this amazing journey with natural, effective treatments.",
      ctaText: "Schedule Your $29 New Patient Special"
    },
    aboutCondition: {
      title: "Understanding Pregnancy Care",
      description: "Pregnancy brings many physical changes that can cause discomfort and pain. Chiropractic care during pregnancy is safe and effective for managing these changes and supporting optimal health for both mother and baby.",
      keyPoints: [
        "Chiropractic care is safe throughout all stages of pregnancy",
        "Proper pelvic alignment can facilitate easier, faster delivery",
        "Treatment can reduce common pregnancy discomforts",
        "Regular care supports optimal fetal positioning"
      ]
    },
    whyItWorks: {
      title: "Why the Camelback Method Works",
      subtitle: "Specialized prenatal care for mother and baby's health",
      methods: [
        {
          icon: Baby,
          title: "Pregnancy Expertise",
          description: "Specialized training in safe, effective prenatal chiropractic techniques",
          color: "bg-blue-100 text-blue-600"
        },
        {
          icon: Heart,
          title: "Gentle Techniques",
          description: "Modified approaches that are completely safe for mother and baby",
          color: "bg-green-100 text-green-600"
        },
        {
          icon: Activity,
          title: "Pelvic Optimization",
          description: "Techniques to ensure optimal pelvic alignment for delivery",
          color: "bg-purple-100 text-purple-600"
        },
        {
          icon: Shield,
          title: "Comfort Focus",
          description: "Addressing pregnancy-related discomforts naturally and safely",
          color: "bg-orange-100 text-orange-600"
        }
      ]
    },
    treatment: {
      title: "How We Help",
      subtitle: "Comprehensive prenatal care and support",
      treatments: [
        "Safe, gentle chiropractic adjustments modified for pregnancy",
        "Pelvic balancing and alignment techniques",
        "Soft tissue therapy for pregnancy-related tension",
        "Exercise recommendations safe for pregnancy",
        "Postural education and ergonomic guidance",
        "Nutritional counseling for pregnancy health",
        "Preparation for labor and delivery",
        "Postpartum recovery support and care"
      ]
    },
    relatedResources: {
      title: "Explore Nearby Topics",
      links: [
        {
          title: "Back Pain",
          description: "Managing pregnancy-related back pain",
          type: "service"
        },
        {
          title: "Sciatica",
          description: "Treating sciatic nerve pain during pregnancy",
          type: "service"
        },
        {
          title: "Pregnancy Exercise",
          description: "Safe movement during pregnancy",
          type: "blog"
        },
        {
          title: "Postpartum Recovery",
          description: "Healing and wellness after delivery",
          type: "blog"
        }
      ]
    },
    testimonials: {
      title: "Real Experiences in Naperville",
      stories: [
        {
          quote: "Pregnancy care here made such a difference. My labor was easier and recovery was faster than my first pregnancy.",
          name: "Rachel M.",
          condition: "Prenatal Care",
          rating: 5
        },
        {
          quote: "The lower back pain during my pregnancy was unbearable until I started coming here. Such relief!",
          name: "Amanda K.",
          condition: "Pregnancy Back Pain",
          rating: 5
        },
        {
          quote: "Not only did they help with my pregnancy discomfort, but my baby was in perfect position for delivery.",
          name: "Sarah J.",
          condition: "Prenatal Wellness",
          rating: 5
        }
      ]
    },
    faqs: {
      title: "Common Questions",
      questions: [
        {
          question: "Is chiropractic care safe during pregnancy?",
          answer: "Yes, chiropractic care is very safe during pregnancy when performed by a qualified practitioner. We use specialized techniques and equipment designed specifically for pregnant women."
        },
        {
          question: "When should I start prenatal chiropractic care?",
          answer: "You can start chiropractic care at any point during pregnancy. Many women begin in the first trimester for optimal benefits, but it's never too late to start."
        },
        {
          question: "Can chiropractic care help with breech babies?",
          answer: "The Webster Technique is a specific chiropractic adjustment that can help optimize pelvic alignment and potentially encourage optimal fetal positioning."
        },
        {
          question: "Will treatment help with labor and delivery?",
          answer: "Studies suggest that women who receive regular chiropractic care during pregnancy may experience shorter labor times and reduced need for interventions during delivery."
        },
        {
          question: "Can you help with postpartum recovery?",
          answer: "Absolutely! We provide specialized care to help your body recover from pregnancy and childbirth, addressing issues like back pain, pelvic dysfunction, and postural changes from nursing."
        }
      ]
    }
  },
  "tmj": {
    id: "tmj",
    name: "TMJ",
    icon: AlertCircle,
    heroImage: "https://images.unsplash.com/photo-1615997380705-504484cd99c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0bWolMjBqYXclMjBwYWluJTIwdHJlYXRtZW50fGVufDF8fHx8MTc1NjQ4OTk3NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    hero: {
      headline: "TMJ Treatment in Naperville",
      subheadline: "Comprehensive care for jaw pain, clicking, and temporomandibular joint dysfunction. Find relief from jaw pain and restore normal function.",
      ctaText: "Schedule Your $29 New Patient Special"
    },
    aboutCondition: {
      title: "Understanding TMJ Disorders",
      description: "Temporomandibular joint (TMJ) disorders affect the jaw joint and surrounding muscles. Symptoms can include jaw pain, clicking or popping sounds, limited mouth opening, and headaches.",
      keyPoints: [
        "TMJ disorders often relate to neck and upper cervical spine problems",
        "Stress and teeth grinding frequently contribute to TMJ pain",
        "Early treatment prevents chronic jaw dysfunction",
        "Conservative treatment is effective for most TMJ conditions"
      ]
    },
    whyItWorks: {
      title: "Why the Camelback Method Works",
      subtitle: "Comprehensive approach to jaw pain and dysfunction",
      methods: [
        {
          icon: AlertCircle,
          title: "Joint Assessment",
          description: "Thorough evaluation of jaw mechanics and movement patterns",
          color: "bg-blue-100 text-blue-600"
        },
        {
          icon: Target,
          title: "Cervical Connection",
          description: "Addressing neck and upper spine issues that contribute to TMJ problems",
          color: "bg-green-100 text-green-600"
        },
        {
          icon: Activity,
          title: "Muscle Balance",
          description: "Treating jaw, neck, and facial muscles to restore proper function",
          color: "bg-purple-100 text-purple-600"
        },
        {
          icon: Brain,
          title: "Stress Management",
          description: "Techniques to reduce tension and teeth grinding",
          color: "bg-orange-100 text-orange-600"
        }
      ]
    },
    treatment: {
      title: "How We Help",
      subtitle: "Comprehensive TMJ treatment and jaw rehabilitation",
      treatments: [
        "Comprehensive TMJ and cervical spine examination",
        "Gentle chiropractic care for neck and upper spine",
        "Soft tissue therapy for jaw and facial muscles",
        "TMJ mobilization and manual therapy techniques",
        "Postural correction and ergonomic education",
        "Stress reduction and relaxation techniques",
        "Jaw exercises and movement therapy",
        "Nutritional guidance for reducing inflammation"
      ]
    },
    relatedResources: {
      title: "Explore Nearby Topics",
      links: [
        {
          title: "Headaches & Migraines",
          description: "How TMJ disorders can trigger headaches",
          type: "service"
        },
        {
          title: "Neck Pain",
          description: "Cervical spine connection to jaw problems",
          type: "service"
        },
        {
          title: "Stress Management",
          description: "Reducing tension that contributes to TMJ",
          type: "blog"
        },
        {
          title: "Jaw Exercises",
          description: "Strengthening and mobility for TMJ health",
          type: "blog"
        }
      ]
    },
    testimonials: {
      title: "Real Experiences in Naperville",
      stories: [
        {
          quote: "I couldn't open my mouth wide enough to eat an apple. Now I have full function and no pain!",
          name: "Katherine L.",
          condition: "TMJ Dysfunction",
          rating: 5
        },
        {
          quote: "The constant jaw clicking and pain kept me from sleeping. Treatment here gave me my life back.",
          name: "Robert N.",
          condition: "TMJ with Clicking",
          rating: 5
        },
        {
          quote: "I didn't realize my headaches were coming from my jaw. Treating both problems solved everything.",
          name: "Michelle P.",
          condition: "TMJ-Related Headaches",
          rating: 5
        }
      ]
    },
    faqs: {
      title: "Common Questions",
      questions: [
        {
          question: "What causes TMJ disorders?",
          answer: "TMJ disorders can be caused by various factors including jaw injury, teeth grinding, stress, arthritis, or problems with jaw alignment. Often, neck and upper spine issues contribute to TMJ symptoms."
        },
        {
          question: "How is TMJ related to neck problems?",
          answer: "The jaw and neck are closely connected through muscles, nerves, and biomechanics. Problems in the upper cervical spine can affect jaw function and contribute to TMJ symptoms."
        },
        {
          question: "Can TMJ cause headaches?",
          answer: "Yes, TMJ disorders are a common cause of headaches, particularly tension-type headaches. The jaw muscles and temporomandibular joint can refer pain to the head and face."
        },
        {
          question: "Will I need surgery for TMJ?",
          answer: "The vast majority of TMJ cases can be successfully treated with conservative methods. Surgery is typically only considered after conservative treatments have been thoroughly tried."
        },
        {
          question: "How long does TMJ treatment take?",
          answer: "Treatment duration varies based on severity and contributing factors. Many patients notice improvement within 2-4 weeks, with significant resolution typically occurring within 6-12 weeks of treatment."
        }
      ]
    }
  },
  "car-accident-injuries": {
    id: "car-accident-injuries",
    name: "Car Accident Injuries",
    icon: Car,
    heroImage: "https://images.unsplash.com/photo-1673187139211-1e7ec3dd60ec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXIlMjBhY2NpZGVudCUyMGluanVyeSUyMHRyZWF0bWVudCUyMG1lZGljYWx8ZW58MXx8fHwxNzU4NzQwMDU0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    hero: {
      headline: "Car Accident Injury Treatment in Naperville, IL",
      subheadline: "Comprehensive care for motor vehicle accident injuries including whiplash, back pain, and soft tissue trauma. Get back to your life with effective, evidence-based treatment.",
      ctaText: "Schedule Your $29 New Patient Special"
    },
    aboutCondition: {
      title: "Understanding Car Accident Injuries",
      description: "Motor vehicle accidents can cause a wide range of injuries, from obvious fractures to hidden soft tissue damage. Even minor accidents can result in significant pain and dysfunction that may not appear until days or weeks later.",
      keyPoints: [
        "Symptoms may be delayed and not appear immediately after the accident",
        "Whiplash and soft tissue injuries are the most common car accident injuries",
        "Early treatment prevents chronic pain and long-term complications",
        "Proper documentation is crucial for insurance claims and legal proceedings"
      ]
    },
    whyItWorks: {
      title: "Why the Camelback Method Works",
      subtitle: "Comprehensive approach to motor vehicle accident recovery",
      methods: [
        {
          icon: Stethoscope,
          title: "Complete Assessment",
          description: "Thorough evaluation to identify all injuries, including those that may not be immediately apparent",
          color: "bg-blue-100 text-blue-600"
        },
        {
          icon: Activity,
          title: "Multi-Modal Treatment",
          description: "Combination of chiropractic care, physical therapy, and soft tissue treatments for optimal recovery",
          color: "bg-green-100 text-green-600"
        },
        {
          icon: Shield,
          title: "Insurance Navigation",
          description: "Expert documentation and coordination with insurance companies and legal teams",
          color: "bg-purple-100 text-purple-600"
        },
        {
          icon: Target,
          title: "Recovery-Focused",
          description: "Treatment plans designed to restore function and prevent long-term complications",
          color: "bg-orange-100 text-orange-600"
        }
      ]
    },
    treatment: {
      title: "How We Help",
      subtitle: "Comprehensive car accident injury treatment and rehabilitation",
      treatments: [
        "Immediate post-accident evaluation and emergency referrals if needed",
        "Comprehensive spinal and musculoskeletal examination",
        "Advanced imaging coordination (X-rays, MRI) when necessary",
        "Gentle chiropractic adjustments to restore proper alignment",
        "Soft tissue therapy for injured muscles, ligaments, and tendons",
        "Physical therapy and rehabilitation exercises",
        "Pain management without heavy reliance on medications",
        "Detailed documentation for insurance and legal purposes"
      ]
    },
    relatedResources: {
      title: "Explore Related Topics",
      links: [
        {
          title: "Whiplash Treatment",
          description: "Specialized care for neck injuries from car accidents",
          type: "service"
        },
        {
          title: "Back Pain Relief",
          description: "Treatment for lower back injuries from motor vehicle accidents",
          type: "service"
        },
        {
          title: "Headache & Migraine Care",
          description: "Post-concussion and cervicogenic headache treatment",
          type: "service"
        },
        {
          title: "Insurance Claims Guide",
          description: "Understanding your rights and options after a car accident",
          type: "blog"
        }
      ]
    },
    testimonials: {
      title: "Real Recovery Stories in Naperville",
      stories: [
        {
          quote: "After my car accident, I thought the pain would last forever. The team here not only helped me heal but also handled all the insurance paperwork.",
          name: "Jennifer M.",
          condition: "Multi-Vehicle Collision Injuries",
          rating: 5
        },
        {
          quote: "I was rear-ended at a stoplight and developed severe neck and back pain. Their comprehensive treatment got me back to work pain-free.",
          name: "Michael R.",
          condition: "Rear-End Collision",
          rating: 5
        },
        {
          quote: "The hidden injuries from my accident didn't show up until weeks later. They caught everything and helped me recover completely.",
          name: "Lisa K.",
          condition: "Delayed-Onset Injuries",
          rating: 5
        }
      ]
    },
    faqs: {
      title: "Common Questions",
      questions: [
        {
          question: "How soon after a car accident should I seek treatment?",
          answer: "You should seek evaluation as soon as possible, ideally within 24-48 hours of the accident, even if you feel fine. Many injuries have delayed symptoms, and early treatment prevents complications."
        },
        {
          question: "Will my car insurance cover treatment?",
          answer: "Most auto insurance policies include Personal Injury Protection (PIP) or medical payments coverage. We work directly with insurance companies and can help you understand your coverage options."
        },
        {
          question: "What if I don't feel pain right after the accident?",
          answer: "This is very common. Adrenaline, shock, and inflammation can mask pain initially. Symptoms often appear 24-72 hours after an accident, which is why prompt evaluation is important."
        },
        {
          question: "Do I need to see my doctor first before coming here?",
          answer: "No, you can come directly to us for evaluation and treatment. We'll refer you to other specialists if needed and coordinate with your primary care physician."
        },
        {
          question: "How long does recovery from car accident injuries take?",
          answer: "Recovery time varies depending on the severity of injuries and how quickly treatment begins. Minor injuries may resolve in weeks, while more serious injuries can take several months with proper care."
        }
      ]
    }
  },
  "whiplash": {
    id: "whiplash",
    name: "Whiplash",
    icon: Activity,
    heroImage: "https://images.unsplash.com/photo-1662541547523-118842914aa7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aGlwbGFzaCUyMGNhciUyMGFjY2lkZW50JTIwbmVjayUyMGluanVyeXxlbnwxfHx8fDE3NTY0ODk5Nzh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    hero: {
      headline: "Whiplash Treatment in Naperville",
      subheadline: "Comprehensive care for motor vehicle accident injuries. Effective treatment for neck pain, headaches, and soft tissue injuries from car accidents.",
      ctaText: "Schedule Your $29 New Patient Special"
    },
    aboutCondition: {
      title: "Understanding Whiplash Injuries",
      description: "Whiplash occurs when the head and neck are suddenly forced backward and then forward, creating injuries to the cervical spine and soft tissues. This commonly happens in car accidents but can occur in other situations.",
      keyPoints: [
        "Symptoms may not appear immediately after the accident",
        "Early treatment prevents chronic problems and complications",
        "Whiplash can affect multiple body systems beyond just the neck",
        "Proper documentation is important for insurance and legal purposes"
      ]
    },
    whyItWorks: {
      title: "Why the Camelback Method Works",
      subtitle: "Comprehensive approach to whiplash recovery and rehabilitation",
      methods: [
        {
          icon: Stethoscope,
          title: "Thorough Assessment",
          description: "Comprehensive evaluation to identify all areas affected by the injury",
          color: "bg-blue-100 text-blue-600"
        },
        {
          icon: Activity,
          title: "Gentle Rehabilitation",
          description: "Progressive treatment that promotes healing while preventing stiffness",
          color: "bg-green-100 text-green-600"
        },
        {
          icon: Shield,
          title: "Multi-System Care",
          description: "Addressing not just the neck, but all systems affected by the trauma",
          color: "bg-purple-100 text-purple-600"
        },
        {
          icon: Target,
          title: "Documentation Support",
          description: "Proper documentation for insurance and legal proceedings",
          color: "bg-orange-100 text-orange-600"
        }
      ]
    },
    treatment: {
      title: "How We Help",
      subtitle: "Comprehensive whiplash treatment and recovery program",
      treatments: [
        "Immediate post-accident assessment and care",
        "Comprehensive spinal and neurological examination",
        "Gentle chiropractic adjustments to restore alignment",
        "Soft tissue therapy for injured muscles and ligaments",
        "Physical therapy and rehabilitation exercises",
        "Pain management and inflammation reduction",
        "Proper documentation for insurance and legal needs",
        "Gradual return to normal activities and work"
      ]
    },
    relatedResources: {
      title: "Explore Nearby Topics",
      links: [
        {
          title: "Neck Pain",
          description: "Ongoing neck pain management after whiplash",
          type: "service"
        },
        {
          title: "Headaches & Migraines",
          description: "Post-concussion and cervicogenic headaches",
          type: "service"
        },
        {
          title: "Car Accident Recovery",
          description: "Complete guide to recovery after motor vehicle accidents",
          type: "blog"
        },
        {
          title: "Insurance Documentation",
          description: "What you need to know about injury claims",
          type: "blog"
        }
      ]
    },
    testimonials: {
      title: "Real Experiences in Naperville",
      stories: [
        {
          quote: "After my car accident, I thought the pain would never go away. The team here got me back to normal life.",
          name: "Jessica T.",
          condition: "Whiplash from Rear-End Collision",
          rating: 5
        },
        {
          quote: "I was rear-ended and developed terrible headaches. Treatment here addressed both my neck and head pain.",
          name: "Andrew M.",
          condition: "Whiplash with Post-Concussion Headaches",
          rating: 5
        },
        {
          quote: "The documentation and care they provided was essential for my insurance claim and my recovery.",
          name: "Linda S.",
          condition: "Motor Vehicle Accident Injuries",
          rating: 5
        }
      ]
    },
    faqs: {
      title: "Common Questions",
      questions: [
        {
          question: "How soon after an accident should I seek treatment?",
          answer: "It's best to seek evaluation as soon as possible after an accident, even if you don't feel symptoms immediately. Early treatment can prevent complications and document injuries for insurance purposes."
        },
        {
          question: "Why don't I feel pain right after the accident?",
          answer: "Adrenaline and shock can mask pain initially. Inflammation and muscle spasms often develop 24-48 hours after the injury, which is when symptoms typically become apparent."
        },
        {
          question: "Will my insurance cover whiplash treatment?",
          answer: "Most auto insurance policies include personal injury protection (PIP) or medical payments coverage that covers whiplash treatment. We work with insurance companies and provide necessary documentation."
        },
        {
          question: "How long does whiplash take to heal?",
          answer: "Recovery time varies greatly depending on the severity of injury and individual factors. Mild cases may resolve in a few weeks, while more severe injuries may take several months of treatment."
        },
        {
          question: "Can whiplash cause long-term problems?",
          answer: "If left untreated, whiplash can lead to chronic neck pain, headaches, and other ongoing issues. Proper early treatment significantly reduces the risk of long-term complications."
        }
      ]
    }
  },
  "plantar-fasciitis": {
    id: "plantar-fasciitis",
    name: "Plantar Fasciitis",
    icon: Footprints,
    heroImage: "https://images.unsplash.com/photo-1571731956672-f2b94d7dd0cb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwbGFudGFyJTIwZmFzY2lpdGlzJTIwZm9vdCUyMHBhaW4lMjB0cmVhdG1lbnR8ZW58MXx8fHwxNzU2NDg5MjIxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    hero: {
      headline: "Plantar Fasciitis Treatment in Naperville",
      subheadline: "Effective relief for heel pain and foot discomfort. Get back to walking, running, and standing without pain.",
      ctaText: "Schedule Your $29 New Patient Special"
    },
    aboutCondition: {
      title: "Understanding Plantar Fasciitis",
      description: "Plantar fasciitis is inflammation of the thick band of tissue (plantar fascia) that runs across the bottom of your foot and connects your heel bone to your toes. It's one of the most common causes of heel pain.",
      keyPoints: [
        "Morning pain and stiffness are characteristic symptoms",
        "Biomechanical issues often contribute to the development",
        "Early treatment prevents chronic heel pain problems",
        "Proper footwear and orthotics can be very helpful"
      ]
    },
    whyItWorks: {
      title: "Why the Camelback Method Works",
      subtitle: "Comprehensive approach to heel pain and foot biomechanics",
      methods: [
        {
          icon: Footprints,
          title: "Biomechanical Analysis",
          description: "Comprehensive assessment of foot mechanics and walking patterns",
          color: "bg-blue-100 text-blue-600"
        },
        {
          icon: Activity,
          title: "Whole-Body Approach",
          description: "Addressing hip, knee, and ankle issues that contribute to foot problems",
          color: "bg-green-100 text-green-600"
        },
        {
          icon: Target,
          title: "Targeted Treatment",
          description: "Specific therapies to reduce inflammation and promote healing",
          color: "bg-purple-100 text-purple-600"
        },
        {
          icon: Shield,
          title: "Prevention Focus",
          description: "Strategies to prevent recurrence and maintain foot health",
          color: "bg-orange-100 text-orange-600"
        }
      ]
    },
    treatment: {
      title: "How We Help",
      subtitle: "Comprehensive plantar fasciitis treatment and foot care",
      treatments: [
        "Comprehensive foot and lower extremity examination",
        "Gait analysis and biomechanical assessment",
        "Chiropractic care for optimal lower extremity alignment",
        "Soft tissue therapy for foot and calf muscles",
        "Specific plantar fascia stretching and strengthening exercises",
        "Footwear and orthotic recommendations",
        "Activity modification and gradual return to activities",
        "Prevention education and long-term care strategies"
      ]
    },
    relatedResources: {
      title: "Explore Nearby Topics",
      links: [
        {
          title: "Foot Pain",
          description: "Other common foot conditions and treatments",
          type: "service"
        },
        {
          title: "Knee Pain",
          description: "How foot problems can affect the knee",
          type: "service"
        },
        {
          title: "Proper Footwear",
          description: "Choosing shoes for foot health",
          type: "blog"
        },
        {
          title: "Foot Exercises",
          description: "Strengthening and stretching for healthy feet",
          type: "blog"
        }
      ]
    },
    testimonials: {
      title: "Real Experiences in Naperville",
      stories: [
        {
          quote: "I couldn't walk to the mailbox without heel pain. Now I'm back to my daily 3-mile walks!",
          name: "Dorothy H.",
          condition: "Chronic Plantar Fasciitis",
          rating: 5
        },
        {
          quote: "As a teacher on my feet all day, the heel pain was unbearable. Treatment here saved my career.",
          name: "Patricia K.",
          condition: "Occupational Heel Pain",
          rating: 5
        },
        {
          quote: "My running was completely sidelined by heel pain. Now I'm training for my next marathon!",
          name: "Kevin R.",
          condition: "Runner's Plantar Fasciitis",
          rating: 5
        }
      ]
    },
    faqs: {
      title: "Common Questions",
      questions: [
        {
          question: "What causes plantar fasciitis?",
          answer: "Plantar fasciitis is often caused by biomechanical factors like flat feet, high arches, tight calf muscles, or improper footwear. Activities that stress the heel and attached tissue can also contribute."
        },
        {
          question: "Why is the pain worse in the morning?",
          answer: "During sleep, the plantar fascia contracts and shortens. Taking those first steps in the morning stretches the tissue, causing pain. This is a classic sign of plantar fasciitis."
        },
        {
          question: "Can plantar fasciitis be cured?",
          answer: "Yes, most cases of plantar fasciitis can be successfully treated with conservative care. Early treatment and addressing underlying biomechanical issues provides the best outcomes."
        },
        {
          question: "Should I stop exercising with plantar fasciitis?",
          answer: "Not necessarily. We'll help you modify activities and provide alternatives that don't aggravate your condition while maintaining fitness. Complete rest is rarely necessary."
        },
        {
          question: "How long does plantar fasciitis treatment take?",
          answer: "Treatment duration varies, but most patients notice improvement within 2-4 weeks. Complete resolution typically takes 6-12 weeks with proper treatment and biomechanical corrections."
        }
      ]
    }
  },
  "concussions": {
    id: "concussions",
    name: "Concussions",
    icon: Brain,
    heroImage: "https://images.unsplash.com/photo-1758691463110-697a814b2033?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25jdXNzaW9uJTIwYnJhaW4lMjBpbmp1cnklMjB0cmVhdG1lbnR8ZW58MXx8fHwxNzU4NzQwMzgwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    hero: {
      headline: "Concussion Treatment in Naperville, IL",
      subheadline: "Comprehensive care for mild traumatic brain injuries. Evidence-based treatment to support recovery and prevent long-term complications.",
      ctaText: "Schedule Your $29 New Patient Special"
    },
    aboutCondition: {
      title: "Understanding Concussions",
      description: "A concussion is a mild traumatic brain injury that affects brain function. Symptoms can include headaches, confusion, dizziness, and memory problems. Proper treatment is essential for complete recovery and preventing long-term complications.",
      keyPoints: [
        "Early intervention improves recovery outcomes significantly",
        "Symptoms may not appear immediately after the injury",
        "Rest and gradual return to activity are crucial for healing",
        "Multi-disciplinary care addresses all aspects of recovery"
      ]
    },
    whyItWorks: {
      title: "Why the Camelback Method Works",
      subtitle: "Comprehensive concussion care addressing all aspects of recovery",
      methods: [
        {
          icon: Brain,
          title: "Neurological Assessment",
          description: "Thorough evaluation of cognitive function, balance, and neurological symptoms",
          color: "bg-blue-100 text-blue-600"
        },
        {
          icon: Target,
          title: "Graduated Recovery",
          description: "Structured return-to-activity protocols based on current research and guidelines",
          color: "bg-green-100 text-green-600"
        },
        {
          icon: Shield,
          title: "Symptom Management",
          description: "Natural approaches to manage headaches, dizziness, and cognitive symptoms",
          color: "bg-purple-100 text-purple-600"
        },
        {
          icon: Users,
          title: "Family Education",
          description: "Support and education for family members throughout the recovery process",
          color: "bg-orange-100 text-orange-600"
        }
      ]
    },
    treatment: {
      title: "How We Help",
      subtitle: "Comprehensive concussion management and recovery support",
      treatments: [
        "Immediate post-concussion assessment and baseline testing",
        "Cervical spine evaluation and treatment for associated neck injuries",
        "Visual and vestibular rehabilitation for balance and coordination issues",
        "Cognitive rest protocols and gradual activity progression",
        "Headache management using natural, drug-free approaches",
        "Sleep optimization strategies for better recovery",
        "Return-to-work and return-to-sport clearance protocols",
        "Long-term monitoring and support for persistent symptoms"
      ]
    },
    relatedResources: {
      title: "Explore Related Topics",
      links: [
        {
          title: "Headache & Migraine Treatment",
          description: "Managing post-concussion headaches naturally",
          type: "service"
        },
        {
          title: "Neck Pain Relief",
          description: "Treating cervical injuries that often accompany concussions",
          type: "service"
        },
        {
          title: "Sleep Issues",
          description: "Optimizing sleep for better concussion recovery",
          type: "service"
        },
        {
          title: "Recovery Nutrition",
          description: "Foods that support brain healing after injury",
          type: "blog"
        }
      ]
    },
    testimonials: {
      title: "Real Recovery Stories in Naperville",
      stories: [
        {
          quote: "After my concussion, I thought I'd never feel normal again. The comprehensive care here helped me recover completely and return to work.",
          name: "David K.",
          condition: "Post-Concussion Syndrome",
          rating: 5
        },
        {
          quote: "My daughter's sports-related concussion was handled with such care and expertise. She's back on the field stronger than ever.",
          name: "Michelle R.",
          condition: "Sports Concussion",
          rating: 5
        },
        {
          quote: "The natural approach to managing my post-concussion headaches was exactly what I needed. No more relying on pain medications.",
          name: "Sarah M.",
          condition: "Concussion Recovery",
          rating: 5
        }
      ]
    },
    faqs: {
      title: "Common Questions",
      questions: [
        {
          question: "How long does concussion recovery typically take?",
          answer: "Recovery time varies greatly between individuals. Most people recover within 7-10 days, but some may take weeks or months. Our structured approach helps optimize recovery time and outcomes."
        },
        {
          question: "When should I seek treatment after a head injury?",
          answer: "You should seek evaluation immediately after any head injury, even if symptoms seem mild. Early assessment and proper management significantly improve recovery outcomes."
        },
        {
          question: "Can concussion symptoms appear days after the injury?",
          answer: "Yes, concussion symptoms can be delayed and may not appear for hours or even days after the initial injury. This is why proper monitoring and evaluation are crucial."
        },
        {
          question: "Is complete rest necessary after a concussion?",
          answer: "Current research supports a brief period of rest followed by gradual return to activity. Complete prolonged rest may actually slow recovery. We provide structured guidelines for optimal healing."
        },
        {
          question: "How do you determine when it's safe to return to sports or work?",
          answer: "We use evidence-based protocols including symptom assessment, cognitive testing, and functional evaluations to ensure safe return to activities. Clearance is individualized based on complete recovery."
        }
      ]
    }
  },
  "elbow-pain": {
    id: "elbow-pain",
    name: "Elbow Pain",
    icon: Zap,
    heroImage: "https://images.unsplash.com/photo-1753493992043-6388dd2d4a8f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGJvdyUyMHBhaW4lMjB0ZW5uaXMlMjB0cmVhdG1lbnR8ZW58MXx8fHwxNzU4NzQwMzgzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    hero: {
      headline: "Elbow Pain Treatment in Naperville, IL",
      subheadline: "Effective treatment for tennis elbow, golfer's elbow, and other elbow conditions. Get back to your activities without surgery or constant pain.",
      ctaText: "Schedule Your $29 New Patient Special"
    },
    aboutCondition: {
      title: "Understanding Elbow Pain",
      description: "Elbow pain commonly results from overuse injuries like tennis elbow (lateral epicondylitis) or golfer's elbow (medial epicondylitis). These conditions can significantly impact daily activities and sports performance.",
      keyPoints: [
        "Tennis elbow affects the outside of the elbow and is common in desk workers",
        "Golfer's elbow affects the inside of the elbow and impacts gripping activities",
        "Early treatment prevents chronic pain and functional limitations",
        "Conservative treatment is successful in most cases without surgery"
      ]
    },
    whyItWorks: {
      title: "Why the Camelback Method Works",
      subtitle: "Comprehensive approach targeting the root causes of elbow pain",
      methods: [
        {
          icon: Target,
          title: "Precise Diagnosis",
          description: "Thorough evaluation to identify the exact cause and contributing factors",
          color: "bg-blue-100 text-blue-600"
        },
        {
          icon: Activity,
          title: "Functional Treatment",
          description: "Movement-based therapies that restore normal elbow function",
          color: "bg-green-100 text-green-600"
        },
        {
          icon: Zap,
          title: "Pain Relief",
          description: "Natural methods to reduce inflammation and eliminate pain",
          color: "bg-purple-100 text-purple-600"
        },
        {
          icon: Shield,
          title: "Prevention Focus",
          description: "Ergonomic education and strengthening to prevent recurrence",
          color: "bg-orange-100 text-orange-600"
        }
      ]
    },
    treatment: {
      title: "How We Help",
      subtitle: "Multi-modal elbow pain treatment and rehabilitation",
      treatments: [
        "Comprehensive elbow and upper extremity examination",
        "Soft tissue therapy for forearm muscles and tendons",
        "Chiropractic care for optimal arm and shoulder alignment",
        "Specific exercises for strengthening and flexibility",
        "Ergonomic assessment and workplace modifications",
        "Activity modification and technique correction",
        "Advanced therapies including ultrasound and electrical stimulation",
        "Home care education and self-treatment techniques"
      ]
    },
    relatedResources: {
      title: "Explore Related Topics",
      links: [
        {
          title: "Carpal Tunnel Treatment",
          description: "How wrist problems can contribute to elbow pain",
          type: "service"
        },
        {
          title: "Shoulder Pain Relief",
          description: "Addressing shoulder issues that affect elbow function",
          type: "service"
        },
        {
          title: "Workplace Ergonomics",
          description: "Setting up your workspace to prevent elbow strain",
          type: "blog"
        },
        {
          title: "Tennis Elbow Exercises",
          description: "Specific exercises for recovery and prevention",
          type: "blog"
        }
      ]
    },
    testimonials: {
      title: "Real Recovery Stories in Naperville",
      stories: [
        {
          quote: "My tennis elbow was so bad I couldn't shake hands. After treatment here, I'm back to playing tennis pain-free!",
          name: "Robert L.",
          condition: "Tennis Elbow",
          rating: 5
        },
        {
          quote: "Years of computer work gave me terrible elbow pain. The ergonomic changes and treatment completely solved the problem.",
          name: "Jennifer K.",
          condition: "Repetitive Strain Injury",
          rating: 5
        },
        {
          quote: "I was told I needed surgery for my golfer's elbow. Conservative treatment here got me back to golfing without surgery.",
          name: "Mike T.",
          condition: "Golfer's Elbow",
          rating: 5
        }
      ]
    },
    faqs: {
      title: "Common Questions",
      questions: [
        {
          question: "What's the difference between tennis elbow and golfer's elbow?",
          answer: "Tennis elbow affects the outside (lateral) part of the elbow, while golfer's elbow affects the inside (medial) part. Both are overuse injuries but affect different muscle groups and tendons."
        },
        {
          question: "Do I need to stop all activities with elbow pain?",
          answer: "Not necessarily. We help you modify activities and provide alternatives that allow healing while maintaining function. Complete activity cessation is rarely needed."
        },
        {
          question: "How long does elbow pain treatment typically take?",
          answer: "Most patients notice improvement within 2-4 weeks of treatment. Complete resolution usually occurs within 6-12 weeks, depending on the severity and how long the condition has been present."
        },
        {
          question: "Can elbow pain be prevented?",
          answer: "Yes! Proper ergonomics, regular stretching, strengthening exercises, and technique modification in sports can significantly reduce the risk of developing elbow pain."
        },
        {
          question: "When should I consider surgery for elbow pain?",
          answer: "Surgery is typically only considered after 6-12 months of conservative treatment has failed. The vast majority of elbow pain conditions respond well to non-surgical treatment."
        }
      ]
    }
  },
  "foot-pain": {
    id: "foot-pain",
    name: "Foot Pain",
    icon: Footprints,
    heroImage: "https://images.unsplash.com/photo-1716996642157-a536abc8ec5b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb290JTIwcGFpbiUyMHBvZGlhdHJ5JTIwdHJlYXRtZW50fGVufDF8fHx8MTc1ODc0MDM4Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    hero: {
      headline: "Foot Pain Treatment in Naperville, IL",
      subheadline: "Comprehensive care for all types of foot pain. From heel pain to arch problems, get back on your feet with effective, natural treatment.",
      ctaText: "Schedule Your $29 New Patient Special"
    },
    aboutCondition: {
      title: "Understanding Foot Pain",
      description: "Foot pain can significantly impact your daily activities and quality of life. Common conditions include plantar fasciitis, arch pain, metatarsalgia, and heel pain. Proper diagnosis and treatment can restore normal function.",
      keyPoints: [
        "Foot problems often stem from biomechanical issues in the legs and hips",
        "Poor footwear choices contribute to many foot pain conditions",
        "Early treatment prevents chronic problems and complications",
        "Conservative treatment is effective for most foot pain conditions"
      ]
    },
    whyItWorks: {
      title: "Why the Camelback Method Works",
      subtitle: "Comprehensive foot care addressing the whole kinetic chain",
      methods: [
        {
          icon: Footprints,
          title: "Biomechanical Analysis",
          description: "Comprehensive gait and movement assessment to identify root causes",
          color: "bg-blue-100 text-blue-600"
        },
        {
          icon: Target,
          title: "Whole-Body Approach",
          description: "Addressing hip, knee, and ankle problems that contribute to foot pain",
          color: "bg-green-100 text-green-600"
        },
        {
          icon: Activity,
          title: "Functional Treatment",
          description: "Movement-based therapies that restore normal foot function",
          color: "bg-purple-100 text-purple-600"
        },
        {
          icon: Shield,
          title: "Prevention Strategies",
          description: "Footwear education and strengthening to prevent future problems",
          color: "bg-orange-100 text-orange-600"
        }
      ]
    },
    treatment: {
      title: "How We Help",
      subtitle: "Comprehensive foot pain treatment and rehabilitation",
      treatments: [
        "Complete foot and lower extremity examination",
        "Gait analysis and biomechanical assessment",
        "Chiropractic care for optimal lower extremity alignment",
        "Soft tissue therapy for foot and calf muscles",
        "Specific foot strengthening and stretching exercises",
        "Custom orthotic recommendations and fitting",
        "Footwear analysis and recommendations",
        "Activity modification and return-to-activity protocols"
      ]
    },
    relatedResources: {
      title: "Explore Related Topics",
      links: [
        {
          title: "Plantar Fasciitis",
          description: "Specialized treatment for heel and arch pain",
          type: "service"
        },
        {
          title: "Knee Pain",
          description: "How foot problems can cause knee pain",
          type: "service"
        },
        {
          title: "Proper Footwear",
          description: "Choosing shoes for optimal foot health",
          type: "blog"
        },
        {
          title: "Foot Strengthening",
          description: "Exercises to build strong, healthy feet",
          type: "blog"
        }
      ]
    },
    testimonials: {
      title: "Real Recovery Stories in Naperville",
      stories: [
        {
          quote: "I couldn't walk to the end of my driveway without foot pain. Now I'm back to my daily walks and feeling great!",
          name: "Patricia H.",
          condition: "Chronic Foot Pain",
          rating: 5
        },
        {
          quote: "Standing all day at work was torture until I found this place. The custom orthotics and treatment changed my life.",
          name: "Carlos M.",
          condition: "Occupational Foot Pain",
          rating: 5
        },
        {
          quote: "My running was completely sidelined by foot pain. Now I'm training for my next half marathon!",
          name: "Angela R.",
          condition: "Runner's Foot Pain",
          rating: 5
        }
      ]
    },
    faqs: {
      title: "Common Questions",
      questions: [
        {
          question: "What are the most common causes of foot pain?",
          answer: "Common causes include plantar fasciitis, flat feet, high arches, poor footwear, overuse injuries, and biomechanical problems. We perform thorough assessments to identify the specific cause."
        },
        {
          question: "Do I need custom orthotics for foot pain?",
          answer: "Not everyone needs custom orthotics, but they can be very helpful for certain foot conditions. We assess your specific needs and recommend orthotics only when they'll provide significant benefit."
        },
        {
          question: "How do hip and knee problems affect my feet?",
          answer: "The body works as a connected chain. Problems in the hips or knees can alter your walking pattern and put abnormal stress on your feet, leading to pain and dysfunction."
        },
        {
          question: "What type of shoes should I wear for foot pain?",
          answer: "Proper footwear depends on your specific foot type and condition. We provide detailed recommendations based on your individual needs, activities, and foot structure."
        },
        {
          question: "How long does foot pain treatment typically take?",
          answer: "Treatment duration varies based on the condition and severity. Many patients notice improvement within 2-4 weeks, with significant resolution typically occurring within 6-12 weeks of consistent care."
        }
      ]
    }
  },
  "hip-pain": {
    id: "hip-pain",
    name: "Hip Pain",
    icon: Activity,
    heroImage: "https://images.unsplash.com/photo-1715531786031-7c4e30a45c62?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoaXAlMjBwYWluJTIwdHJlYXRtZW50JTIwbWVkaWNhbHxlbnwxfHx8fDE3NTg3NDAzODl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    hero: {
      headline: "Hip Pain Treatment in Naperville, IL",
      subheadline: "Effective treatment for hip arthritis, bursitis, and mobility issues. Restore function and reduce pain with our comprehensive approach.",
      ctaText: "Schedule Your $29 New Patient Special"
    },
    aboutCondition: {
      title: "Understanding Hip Pain",
      description: "Hip pain can result from various conditions including arthritis, bursitis, muscle strains, or joint dysfunction. It often affects walking, sitting, and daily activities, significantly impacting quality of life.",
      keyPoints: [
        "Hip pain often refers to the back, knee, or groin areas",
        "Poor posture and muscle imbalances contribute to hip dysfunction",
        "Early intervention can prevent arthritis progression",
        "Conservative treatment is effective for most hip conditions"
      ]
    },
    whyItWorks: {
      title: "Why the Camelback Method Works",
      subtitle: "Comprehensive hip care addressing all contributing factors",
      methods: [
        {
          icon: Target,
          title: "Root Cause Analysis",
          description: "Identifying underlying issues in the spine, pelvis, and lower extremities",
          color: "bg-blue-100 text-blue-600"
        },
        {
          icon: Activity,
          title: "Movement Restoration",
          description: "Exercises and manual therapy to restore normal hip mechanics",
          color: "bg-green-100 text-green-600"
        },
        {
          icon: Shield,
          title: "Joint Protection",
          description: "Techniques to reduce stress on the hip joint while promoting healing",
          color: "bg-purple-100 text-purple-600"
        },
        {
          icon: Zap,
          title: "Pain Management",
          description: "Natural approaches to reduce inflammation and eliminate pain",
          color: "bg-orange-100 text-orange-600"
        }
      ]
    },
    treatment: {
      title: "How We Help",
      subtitle: "Comprehensive hip pain treatment and mobility restoration",
      treatments: [
        "Complete hip and pelvic examination",
        "Biomechanical assessment of walking and movement patterns",
        "Chiropractic care for optimal spinal and pelvic alignment",
        "Soft tissue therapy for hip and surrounding muscles",
        "Specific hip strengthening and stretching exercises",
        "Joint mobilization and manual therapy techniques",
        "Postural correction and movement retraining",
        "Activity modification and ergonomic recommendations"
      ]
    },
    relatedResources: {
      title: "Explore Related Topics",
      links: [
        {
          title: "Back Pain Treatment",
          description: "How spinal problems contribute to hip pain",
          type: "service"
        },
        {
          title: "Knee Pain Relief",
          description: "Addressing knee problems caused by hip dysfunction",
          type: "service"
        },
        {
          title: "Arthritis Management",
          description: "Natural approaches to hip arthritis",
          type: "service"
        },
        {
          title: "Hip Strengthening",
          description: "Exercises to build strong, stable hips",
          type: "blog"
        }
      ]
    },
    testimonials: {
      title: "Real Recovery Stories in Naperville",
      stories: [
        {
          quote: "I was told I needed hip replacement surgery. After treatment here, my pain is gone and I'm walking normally again!",
          name: "George K.",
          condition: "Hip Arthritis",
          rating: 5
        },
        {
          quote: "My hip bursitis was making it impossible to sleep on my side. Now I sleep comfortably through the night.",
          name: "Nancy R.",
          condition: "Hip Bursitis",
          rating: 5
        },
        {
          quote: "As a runner, hip pain was ending my passion. The comprehensive treatment got me back to running pain-free.",
          name: "Mark T.",
          condition: "Hip Impingement",
          rating: 5
        }
      ]
    },
    faqs: {
      title: "Common Questions",
      questions: [
        {
          question: "What are the most common causes of hip pain?",
          answer: "Common causes include arthritis, bursitis, muscle strains, hip impingement, and referred pain from the back. We perform comprehensive assessments to identify the specific cause."
        },
        {
          question: "Can hip pain cause knee or back problems?",
          answer: "Yes, hip dysfunction often leads to compensatory problems in the knees and back. Treating the hip often resolves these secondary issues as well."
        },
        {
          question: "How do I know if I need hip replacement surgery?",
          answer: "Surgery is typically considered only after conservative treatment has been thoroughly tried. Many people can avoid surgery with proper treatment and exercise."
        },
        {
          question: "What exercises are best for hip pain?",
          answer: "The best exercises depend on your specific condition. We design individualized exercise programs based on your diagnosis, functional limitations, and goals."
        },
        {
          question: "How long does hip pain treatment take?",
          answer: "Treatment duration varies based on the condition and severity. Many patients notice improvement within 2-4 weeks, with significant progress typically seen within 6-12 weeks."
        }
      ]
    }
  },
  "low-back-pain": {
    id: "low-back-pain",
    name: "Low Back Pain",
    icon: Activity,
    heroImage: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYWNrJTIwcGFpbiUyMHRyZWF0bWVudCUyMG1lZGljYWx8ZW58MXx8fHwxNzU2NDg5MjIxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    hero: {
      headline: "Low Back Pain Relief in Naperville, IL",
      subheadline: "Specialized treatment for lower back pain, disc problems, and lumbar spine issues. Get lasting relief without surgery or heavy medications.",
      ctaText: "Schedule Your $29 New Patient Special"
    },
    aboutCondition: {
      title: "Understanding Low Back Pain",
      description: "Low back pain is one of the most common reasons people seek medical care. It can range from acute muscle strains to chronic disc problems, significantly affecting work, sleep, and daily activities.",
      keyPoints: [
        "Most low back pain episodes resolve with proper treatment",
        "Disc problems often improve without surgery when treated correctly",
        "Poor posture and weak core muscles contribute to chronic problems",
        "Early treatment prevents acute problems from becoming chronic"
      ]
    },
    whyItWorks: {
      title: "Why the Camelback Method Works",
      subtitle: "Comprehensive approach to low back pain relief and prevention",
      methods: [
        {
          icon: Stethoscope,
          title: "Precise Diagnosis",
          description: "Thorough assessment to identify the exact source of your pain",
          color: "bg-blue-100 text-blue-600"
        },
        {
          icon: Target,
          title: "Targeted Treatment",
          description: "Specific therapies based on your diagnosis and functional needs",
          color: "bg-green-100 text-green-600"
        },
        {
          icon: Activity,
          title: "Active Recovery",
          description: "Movement-based treatments that strengthen and stabilize the spine",
          color: "bg-purple-100 text-purple-600"
        },
        {
          icon: Shield,
          title: "Prevention Focus",
          description: "Education and strategies to prevent future episodes",
          color: "bg-orange-100 text-orange-600"
        }
      ]
    },
    treatment: {
      title: "How We Help",
      subtitle: "Comprehensive low back pain treatment and spinal care",
      treatments: [
        "Detailed lumbar spine and neurological examination",
        "Advanced imaging coordination when necessary",
        "Gentle chiropractic adjustments to restore spinal alignment",
        "Spinal decompression therapy for disc-related problems",
        "Physical therapy and core strengthening exercises",
        "Soft tissue therapy for muscle spasms and tension",
        "Postural education and ergonomic modifications",
        "Activity modification and gradual return to function"
      ]
    },
    relatedResources: {
      title: "Explore Related Topics",
      links: [
        {
          title: "Sciatica Treatment",
          description: "Specialized care for radiating leg pain",
          type: "service"
        },
        {
          title: "Hip Pain Relief",
          description: "How hip problems contribute to back pain",
          type: "service"
        },
        {
          title: "Workplace Ergonomics",
          description: "Setting up your workspace for spinal health",
          type: "blog"
        },
        {
          title: "Core Strengthening",
          description: "Exercises to support your lower back",
          type: "blog"
        }
      ]
    },
    testimonials: {
      title: "Real Recovery Stories in Naperville",
      stories: [
        {
          quote: "My herniated disc had me bedridden for weeks. The spinal decompression therapy here got me back to normal without surgery.",
          name: "Thomas M.",
          condition: "Herniated Disc",
          rating: 5
        },
        {
          quote: "Chronic low back pain was ruining my quality of life. The comprehensive approach here finally gave me lasting relief.",
          name: "Maria L.",
          condition: "Chronic Low Back Pain",
          rating: 5
        },
        {
          quote: "I thought I'd have to live with back pain forever. Now I'm pain-free and stronger than I've been in years.",
          name: "Kevin R.",
          condition: "Mechanical Low Back Pain",
          rating: 5
        }
      ]
    },
    faqs: {
      title: "Common Questions",
      questions: [
        {
          question: "When should I seek treatment for low back pain?",
          answer: "Seek immediate care for severe pain, numbness, or weakness in the legs. For persistent pain lasting more than a few days, early treatment prevents chronic problems."
        },
        {
          question: "Is bed rest good for low back pain?",
          answer: "Current research shows that prolonged bed rest can actually slow recovery. Gentle movement and activity as tolerated typically promotes faster healing."
        },
        {
          question: "Can low back pain be prevented?",
          answer: "Yes! Regular exercise, proper lifting techniques, good posture, and core strengthening significantly reduce the risk of low back pain episodes."
        },
        {
          question: "Do I need an MRI for my back pain?",
          answer: "MRIs are not always necessary. Most back pain can be diagnosed and treated effectively based on clinical examination. We order imaging only when it will change treatment decisions."
        },
        {
          question: "How long does low back pain treatment take?",
          answer: "Most acute episodes improve within 2-6 weeks with proper treatment. Chronic conditions may take several months but show progressive improvement throughout treatment."
        }
      ]
    }
  },
  "mobility-problems": {
    id: "mobility-problems",
    name: "Mobility Problems",
    icon: Users,
    heroImage: "https://images.unsplash.com/photo-1753364980764-0f558e91c22d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGl0eSUyMHJlaGFiaWxpdGF0aW9uJTIwcGh5c2ljYWwlMjB0aGVyYXB5fGVufDF8fHx8MTc1ODc0MDQwOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    hero: {
      headline: "Mobility Improvement in Naperville, IL",
      subheadline: "Comprehensive rehabilitation for movement limitations. Regain your independence and improve quality of life with personalized mobility solutions.",
      ctaText: "Schedule Your $29 New Patient Special"
    },
    aboutCondition: {
      title: "Understanding Mobility Problems",
      description: "Mobility limitations can result from injury, surgery, aging, or chronic conditions. These issues affect independence and quality of life, but with proper rehabilitation, significant improvements are possible.",
      keyPoints: [
        "Early intervention provides the best outcomes for mobility recovery",
        "Strength, balance, and flexibility all contribute to mobility",
        "Home modifications and assistive devices can enhance independence",
        "Progressive rehabilitation programs maximize functional improvements"
      ]
    },
    whyItWorks: {
      title: "Why the Camelback Method Works",
      subtitle: "Comprehensive approach to mobility restoration and independence",
      methods: [
        {
          icon: Users,
          title: "Individualized Assessment",
          description: "Comprehensive evaluation of strength, balance, and functional capacity",
          color: "bg-blue-100 text-blue-600"
        },
        {
          icon: Activity,
          title: "Progressive Training",
          description: "Structured programs that gradually build strength and endurance",
          color: "bg-green-100 text-green-600"
        },
        {
          icon: Target,
          title: "Functional Focus",
          description: "Training specific to your daily activities and personal goals",
          color: "bg-purple-100 text-purple-600"
        },
        {
          icon: Shield,
          title: "Safety First",
          description: "Fall prevention and safety education for confident movement",
          color: "bg-orange-100 text-orange-600"
        }
      ]
    },
    treatment: {
      title: "How We Help",
      subtitle: "Comprehensive mobility rehabilitation and independence training",
      treatments: [
        "Complete functional mobility assessment",
        "Strength training programs tailored to your abilities",
        "Balance and coordination improvement exercises",
        "Gait training and walking assistance",
        "Joint mobility and flexibility enhancement",
        "Assistive device training and recommendations",
        "Home safety evaluations and modifications",
        "Family education and caregiver training"
      ]
    },
    relatedResources: {
      title: "Explore Related Topics",
      links: [
        {
          title: "Active Seniors Care",
          description: "Maintaining mobility and independence as you age",
          type: "service"
        },
        {
          title: "Balance Training",
          description: "Improving stability and preventing falls",
          type: "blog"
        },
        {
          title: "Home Safety",
          description: "Making your home safer for better mobility",
          type: "blog"
        },
        {
          title: "Strength Training",
          description: "Building muscle for better movement",
          type: "blog"
        }
      ]
    },
    testimonials: {
      title: "Real Independence Stories in Naperville",
      stories: [
        {
          quote: "After my stroke, I thought I'd never walk independently again. The mobility program here got me back on my feet and confident.",
          name: "Eleanor K.",
          condition: "Post-Stroke Mobility",
          rating: 5
        },
        {
          quote: "Hip replacement surgery left me afraid to move. The gentle progression here helped me regain my confidence and strength.",
          name: "William R.",
          condition: "Post-Surgical Mobility",
          rating: 5
        },
        {
          quote: "The balance training program has been life-changing. I feel steady on my feet and no longer fear falling.",
          name: "Dorothy M.",
          condition: "Balance Disorders",
          rating: 5
        }
      ]
    },
    faqs: {
      title: "Common Questions",
      questions: [
        {
          question: "What conditions can benefit from mobility rehabilitation?",
          answer: "Many conditions including stroke recovery, post-surgical rehabilitation, arthritis, balance disorders, muscle weakness, and age-related mobility decline can benefit from our programs."
        },
        {
          question: "How do you ensure safety during mobility training?",
          answer: "We use proper safety equipment, progress gradually, provide one-on-one supervision when needed, and teach fall prevention techniques throughout the program."
        },
        {
          question: "Can mobility problems be improved at any age?",
          answer: "Yes! While younger individuals may see faster progress, people of all ages can improve their mobility, strength, and independence with proper rehabilitation."
        },
        {
          question: "Do you work with assistive devices like walkers or canes?",
          answer: "Absolutely. We provide training on proper use of assistive devices and can recommend appropriate equipment to enhance your mobility and safety."
        },
        {
          question: "How long does mobility rehabilitation take?",
          answer: "Progress varies greatly depending on the individual and condition. Some see improvements within weeks, while others may need several months of consistent work for optimal results."
        }
      ]
    }
  },
  "neuropathy": {
    id: "neuropathy",
    name: "Neuropathy",
    icon: Zap,
    heroImage: "https://images.unsplash.com/photo-1656644132532-20e388113617?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZXVyb3BhdGh5JTIwbmVydmUlMjBwYWluJTIwdHJlYXRtZW50fGVufDF8fHx8MTc1ODc0MDM5Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    hero: {
      headline: "Neuropathy Treatment in Naperville, IL",
      subheadline: "Comprehensive care for peripheral neuropathy and nerve pain. Natural approaches to reduce symptoms and improve quality of life.",
      ctaText: "Schedule Your $29 New Patient Special"
    },
    aboutCondition: {
      title: "Understanding Neuropathy",
      description: "Peripheral neuropathy involves damage to nerves outside the brain and spinal cord, often causing pain, numbness, tingling, and weakness in the hands and feet. It can significantly impact daily activities and quality of life.",
      keyPoints: [
        "Diabetes is the most common cause of peripheral neuropathy",
        "Early intervention can slow progression and reduce symptoms",
        "Multiple factors contribute including nutrition, circulation, and nerve compression",
        "Natural treatments can be highly effective for symptom management"
      ]
    },
    whyItWorks: {
      title: "Why the Camelback Method Works",
      subtitle: "Multi-faceted approach addressing all aspects of neuropathy",
      methods: [
        {
          icon: Zap,
          title: "Nerve Stimulation",
          description: "Advanced therapies to improve nerve function and reduce pain",
          color: "bg-blue-100 text-blue-600"
        },
        {
          icon: Heart,
          title: "Circulation Enhancement",
          description: "Treatments to improve blood flow and nerve nutrition",
          color: "bg-green-100 text-green-600"
        },
        {
          icon: Target,
          title: "Nutritional Support",
          description: "Targeted nutrition to support nerve health and regeneration",
          color: "bg-purple-100 text-purple-600"
        },
        {
          icon: Shield,
          title: "Pain Management",
          description: "Natural approaches to reduce neuropathic pain and discomfort",
          color: "bg-orange-100 text-orange-600"
        }
      ]
    },
    treatment: {
      title: "How We Help",
      subtitle: "Comprehensive neuropathy treatment and nerve health optimization",
      treatments: [
        "Comprehensive neurological assessment and testing",
        "Advanced nerve stimulation therapies",
        "Nutritional evaluation and supplementation protocols",
        "Circulation enhancement treatments",
        "Gentle chiropractic care to address nerve compression",
        "Exercise programs for neuropathy management",
        "Pain management using natural methods",
        "Lifestyle modification and diabetic management support"
      ]
    },
    relatedResources: {
      title: "Explore Related Topics",
      links: [
        {
          title: "Carpal Tunnel Treatment",
          description: "Addressing nerve compression in the wrists",
          type: "service"
        },
        {
          title: "Sciatica Relief",
          description: "Treatment for sciatic nerve problems",
          type: "service"
        },
        {
          title: "Diabetic Care",
          description: "Managing diabetes to prevent neuropathy progression",
          type: "blog"
        },
        {
          title: "Nerve Health Nutrition",
          description: "Foods and supplements that support nerve function",
          type: "blog"
        }
      ]
    },
    testimonials: {
      title: "Real Recovery Stories in Naperville",
      stories: [
        {
          quote: "My diabetic neuropathy was making it impossible to sleep. The nerve stimulation therapy here has given me my nights back.",
          name: "Frank L.",
          condition: "Diabetic Neuropathy",
          rating: 5
        },
        {
          quote: "The burning pain in my feet was unbearable. Natural treatment here reduced my symptoms dramatically without medications.",
          name: "Patricia K.",
          condition: "Peripheral Neuropathy",
          rating: 5
        },
        {
          quote: "I was told nothing could be done for my neuropathy. This team proved that wrong - I have feeling back in my hands!",
          name: "Robert M.",
          condition: "Peripheral Neuropathy",
          rating: 5
        }
      ]
    },
    faqs: {
      title: "Common Questions",
      questions: [
        {
          question: "What causes peripheral neuropathy?",
          answer: "Common causes include diabetes, vitamin deficiencies, medications, infections, autoimmune diseases, and sometimes the cause is unknown (idiopathic neuropathy)."
        },
        {
          question: "Can neuropathy be reversed?",
          answer: "While nerve damage is often permanent, symptoms can frequently be reduced significantly and progression can be slowed or stopped with proper treatment."
        },
        {
          question: "How effective are natural treatments for neuropathy?",
          answer: "Natural treatments including nerve stimulation, nutrition therapy, and circulation enhancement can be very effective for reducing symptoms and improving quality of life."
        },
        {
          question: "Is neuropathy always related to diabetes?",
          answer: "No, while diabetes is a common cause, neuropathy can result from many conditions including vitamin deficiencies, autoimmune diseases, infections, and other medical conditions."
        },
        {
          question: "How long does neuropathy treatment take to show results?",
          answer: "Many patients notice some improvement within 4-6 weeks of treatment. Significant improvements typically develop over 3-6 months of consistent care."
        }
      ]
    }
  },
  "scoliosis": {
    id: "scoliosis",
    name: "Scoliosis",
    icon: Activity,
    heroImage: "https://images.unsplash.com/photo-1656644132532-20e388113617?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY29saW9zaXMlMjBzcGluZSUyMGN1cnZhdHVyZSUyMHRyZWF0bWVudHxlbnwxfHx8fDE3NTg3NDAzOTV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    hero: {
      headline: "Scoliosis Treatment in Naperville, IL",
      subheadline: "Comprehensive care for spinal curvature in children and adults. Non-surgical approaches to manage scoliosis and prevent progression.",
      ctaText: "Schedule Your $29 New Patient Special"
    },
    aboutCondition: {
      title: "Understanding Scoliosis",
      description: "Scoliosis is a sideways curvature of the spine that can develop during childhood or adulthood. While mild cases may only need monitoring, moderate cases can benefit significantly from conservative treatment.",
      keyPoints: [
        "Early detection and treatment provide the best outcomes",
        "Exercise and manual therapy can help prevent progression",
        "Adult scoliosis often causes pain and functional limitations",
        "Conservative treatment can improve posture and reduce symptoms"
      ]
    },
    whyItWorks: {
      title: "Why the Camelback Method Works",
      subtitle: "Comprehensive scoliosis management for all ages",
      methods: [
        {
          icon: Activity,
          title: "Postural Correction",
          description: "Specific exercises and techniques to improve spinal alignment",
          color: "bg-blue-100 text-blue-600"
        },
        {
          icon: Target,
          title: "Curve Stabilization",
          description: "Treatments designed to prevent progression and improve function",
          color: "bg-green-100 text-green-600"
        },
        {
          icon: Shield,
          title: "Pain Management",
          description: "Natural approaches to reduce scoliosis-related pain and discomfort",
          color: "bg-purple-100 text-purple-600"
        },
        {
          icon: Users,
          title: "Family Education",
          description: "Support and education for families dealing with scoliosis",
          color: "bg-orange-100 text-orange-600"
        }
      ]
    },
    treatment: {
      title: "How We Help",
      subtitle: "Comprehensive scoliosis care and spinal health management",
      treatments: [
        "Complete spinal examination and postural analysis",
        "X-ray coordination and curve measurement when needed",
        "Scoliosis-specific exercise programs",
        "Gentle chiropractic care for spinal mobility",
        "Postural correction and ergonomic education",
        "Breathing exercises and respiratory function improvement",
        "Activity modifications and sports guidance",
        "Long-term monitoring and progress tracking"
      ]
    },
    relatedResources: {
      title: "Explore Related Topics",
      links: [
        {
          title: "Pediatric Care",
          description: "Specialized treatment for children with scoliosis",
          type: "service"
        },
        {
          title: "Back Pain Relief",
          description: "Managing pain associated with scoliosis",
          type: "service"
        },
        {
          title: "Posture Improvement",
          description: "Exercises and techniques for better posture",
          type: "blog"
        },
        {
          title: "Scoliosis Exercises",
          description: "Specific exercises for spinal curvature management",
          type: "blog"
        }
      ]
    },
    testimonials: {
      title: "Real Success Stories in Naperville",
      stories: [
        {
          quote: "My daughter's scoliosis curve hasn't progressed since starting treatment here. Her posture has improved dramatically.",
          name: "Lisa M.",
          condition: "Adolescent Scoliosis",
          rating: 5
        },
        {
          quote: "Adult scoliosis was causing terrible back pain. The exercise program here has given me my life back.",
          name: "Janet K.",
          condition: "Adult Scoliosis",
          rating: 5
        },
        {
          quote: "I was so worried about my son's diagnosis. The team here educated us and gave us hope with real results.",
          name: "Michael R.",
          condition: "Pediatric Scoliosis",
          rating: 5
        }
      ]
    },
    faqs: {
      title: "Common Questions",
      questions: [
        {
          question: "At what age should scoliosis be treated?",
          answer: "Scoliosis can be treated at any age. Early intervention during growth periods (ages 10-16) is most effective, but adults can also benefit significantly from treatment."
        },
        {
          question: "Can exercise really help scoliosis?",
          answer: "Yes, specific scoliosis exercises (SEAS method) have been shown to improve spinal curves, reduce progression risk, and decrease pain in both children and adults."
        },
        {
          question: "Will my child need surgery for scoliosis?",
          answer: "Most scoliosis cases do not require surgery. Conservative treatment is very effective for curves under 40-45 degrees, and many larger curves can be managed without surgery."
        },
        {
          question: "Can adults develop scoliosis?",
          answer: "Yes, adult scoliosis can develop due to degenerative changes, or existing childhood curves can progress. Adult scoliosis often causes pain and can be effectively treated."
        },
        {
          question: "How often should scoliosis be monitored?",
          answer: "Growing children should be monitored every 4-6 months, while adults may need annual monitoring. We provide ongoing assessment to track progress and adjust treatment."
        }
      ]
    }
  },
  "shoulder-pain": {
    id: "shoulder-pain",
    name: "Shoulder Pain",
    icon: Activity,
    heroImage: "https://images.unsplash.com/photo-1615997380705-504484cd99c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzaG91bGRlciUyMHBhaW4lMjB0cmVhdG1lbnQlMjBwaHlzaWNhbCUyMHRoZXJhcHl8ZW58MXx8fHwxNzU4NzQwMzk4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    hero: {
      headline: "Shoulder Pain Treatment in Naperville, IL",
      subheadline: "Effective treatment for rotator cuff injuries, frozen shoulder, and shoulder impingement. Get back to full function without surgery.",
      ctaText: "Schedule Your $29 New Patient Special"
    },
    aboutCondition: {
      title: "Understanding Shoulder Pain",
      description: "Shoulder pain can result from rotator cuff injuries, frozen shoulder, impingement, or instability. The shoulder's complex anatomy requires specialized treatment approaches for optimal recovery.",
      keyPoints: [
        "Rotator cuff tears often heal without surgery when treated properly",
        "Frozen shoulder responds well to specific mobilization techniques",
        "Poor posture contributes to many shoulder problems",
        "Early treatment prevents chronic pain and functional limitations"
      ]
    },
    whyItWorks: {
      title: "Why the Camelback Method Works",
      subtitle: "Comprehensive shoulder care addressing all contributing factors",
      methods: [
        {
          icon: Target,
          title: "Precise Diagnosis",
          description: "Thorough assessment to identify the exact cause of shoulder pain",
          color: "bg-blue-100 text-blue-600"
        },
        {
          icon: Activity,
          title: "Movement Restoration",
          description: "Progressive exercises to restore full shoulder function",
          color: "bg-green-100 text-green-600"
        },
        {
          icon: Shield,
          title: "Joint Protection",
          description: "Techniques to reduce stress on the shoulder while promoting healing",
          color: "bg-purple-100 text-purple-600"
        },
        {
          icon: Zap,
          title: "Pain Relief",
          description: "Natural methods to reduce inflammation and eliminate pain",
          color: "bg-orange-100 text-orange-600"
        }
      ]
    },
    treatment: {
      title: "How We Help",
      subtitle: "Comprehensive shoulder pain treatment and rehabilitation",
      treatments: [
        "Complete shoulder and cervical spine examination",
        "Range of motion assessment and functional testing",
        "Gentle chiropractic care for optimal shoulder mechanics",
        "Soft tissue therapy for rotator cuff and surrounding muscles",
        "Progressive strengthening and stretching exercises",
        "Joint mobilization and manual therapy techniques",
        "Postural correction and ergonomic education",
        "Sport-specific rehabilitation when appropriate"
      ]
    },
    relatedResources: {
      title: "Explore Related Topics",
      links: [
        {
          title: "Neck Pain Treatment",
          description: "How cervical problems contribute to shoulder pain",
          type: "service"
        },
        {
          title: "Sports Injuries",
          description: "Specialized care for athletic shoulder injuries",
          type: "service"
        },
        {
          title: "Posture Improvement",
          description: "Correcting posture to prevent shoulder problems",
          type: "blog"
        },
        {
          title: "Shoulder Exercises",
          description: "Strengthening and mobility exercises for shoulder health",
          type: "blog"
        }
      ]
    },
    testimonials: {
      title: "Real Recovery Stories in Naperville",
      stories: [
        {
          quote: "My rotator cuff tear was supposed to need surgery. Conservative treatment here healed it completely and I'm back to tennis!",
          name: "Susan R.",
          condition: "Rotator Cuff Tear",
          rating: 5
        },
        {
          quote: "Frozen shoulder made it impossible to reach overhead. The mobilization therapy here restored my full range of motion.",
          name: "Paul K.",
          condition: "Frozen Shoulder",
          rating: 5
        },
        {
          quote: "Years of desk work caused terrible shoulder pain. The posture correction and treatment here eliminated my pain completely.",
          name: "Jennifer L.",
          condition: "Shoulder Impingement",
          rating: 5
        }
      ]
    },
    faqs: {
      title: "Common Questions",
      questions: [
        {
          question: "What are the most common causes of shoulder pain?",
          answer: "Common causes include rotator cuff injuries, frozen shoulder, impingement syndrome, arthritis, and referred pain from the neck. We perform comprehensive assessments to identify the specific cause."
        },
        {
          question: "Do rotator cuff tears always require surgery?",
          answer: "No, many rotator cuff tears can heal with conservative treatment. Surgery is typically only needed for complete tears or when conservative treatment fails."
        },
        {
          question: "How long does frozen shoulder take to resolve?",
          answer: "Frozen shoulder typically progresses through three phases over 1-3 years naturally. With proper treatment, we can significantly reduce this timeline and improve outcomes."
        },
        {
          question: "Can poor posture cause shoulder pain?",
          answer: "Yes, forward head posture and rounded shoulders put stress on the shoulder joint and can lead to impingement and pain. Postural correction is often a key part of treatment."
        },
        {
          question: "When should I be concerned about shoulder pain?",
          answer: "Seek evaluation if you have persistent pain lasting more than a few days, significant loss of motion, weakness, or pain that interferes with sleep or daily activities."
        }
      ]
    }
  },
  "vertigo": {
    id: "vertigo",
    name: "Vertigo",
    icon: Brain,
    heroImage: "https://images.unsplash.com/photo-1661312718295-01c735c8ba4b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2ZXJ0aWdvJTIwZGl6emluZXNzJTIwYmFsYW5jZSUyMHRyZWF0bWVudHxlbnwxfHx8fDE3NTg3NDA0MDF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    hero: {
      headline: "Vertigo Treatment in Naperville, IL",
      subheadline: "Effective treatment for dizziness, balance problems, and vestibular disorders. Get back to steady living with specialized care.",
      ctaText: "Schedule Your $29 New Patient Special"
    },
    aboutCondition: {
      title: "Understanding Vertigo",
      description: "Vertigo is a sensation of spinning or dizziness often caused by problems in the inner ear or vestibular system. It can significantly impact daily activities and increase fall risk, but effective treatments are available.",
      keyPoints: [
        "BPPV (Benign Positional Vertigo) is the most common type and highly treatable",
        "Cervical spine problems can contribute to dizziness and balance issues",
        "Vestibular rehabilitation exercises can dramatically improve symptoms",
        "Early treatment reduces fall risk and improves quality of life"
      ]
    },
    whyItWorks: {
      title: "Why the Camelback Method Works",
      subtitle: "Comprehensive approach to vertigo and balance disorders",
      methods: [
        {
          icon: Brain,
          title: "Vestibular Assessment",
          description: "Specialized testing to identify the cause of your vertigo",
          color: "bg-blue-100 text-blue-600"
        },
        {
          icon: Target,
          title: "Targeted Treatment",
          description: "Specific techniques based on your type of vertigo or balance disorder",
          color: "bg-green-100 text-green-600"
        },
        {
          icon: Activity,
          title: "Balance Training",
          description: "Exercises to improve stability and reduce fall risk",
          color: "bg-purple-100 text-purple-600"
        },
        {
          icon: Shield,
          title: "Cervical Care",
          description: "Addressing neck problems that contribute to dizziness",
          color: "bg-orange-100 text-orange-600"
        }
      ]
    },
    treatment: {
      title: "How We Help",
      subtitle: "Comprehensive vertigo treatment and balance rehabilitation",
      treatments: [
        "Comprehensive vestibular and balance assessment",
        "Epley maneuver and canalith repositioning procedures",
        "Cervical spine evaluation and treatment",
        "Vestibular rehabilitation exercises",
        "Balance training and fall prevention",
        "Gait training and mobility improvement",
        "Home exercise programs for ongoing management",
        "Lifestyle modifications and trigger avoidance"
      ]
    },
    relatedResources: {
      title: "Explore Related Topics",
      links: [
        {
          title: "Neck Pain Treatment",
          description: "How cervical problems contribute to dizziness",
          type: "service"
        },
        {
          title: "Mobility Problems",
          description: "Improving balance and preventing falls",
          type: "service"
        },
        {
          title: "Concussion Care",
          description: "Post-concussion vestibular problems",
          type: "service"
        },
        {
          title: "Balance Exercises",
          description: "Simple exercises to improve stability",
          type: "blog"
        }
      ]
    },
    testimonials: {
      title: "Real Recovery Stories in Naperville",
      stories: [
        {
          quote: "My BPPV was making me afraid to move my head. One treatment session here and the spinning completely stopped!",
          name: "Margaret K.",
          condition: "BPPV",
          rating: 5
        },
        {
          quote: "Chronic dizziness was ruining my life. The vestibular rehabilitation here gave me my confidence back.",
          name: "Robert M.",
          condition: "Vestibular Dysfunction",
          rating: 5
        },
        {
          quote: "I was constantly afraid of falling. The balance training here made me feel steady and secure again.",
          name: "Dorothy R.",
          condition: "Balance Disorders",
          rating: 5
        }
      ]
    },
    faqs: {
      title: "Common Questions",
      questions: [
        {
          question: "What's the difference between dizziness and vertigo?",
          answer: "Vertigo is a specific type of dizziness where you feel like you or your surroundings are spinning. General dizziness can have many causes and may feel like lightheadedness or unsteadiness."
        },
        {
          question: "How effective is the Epley maneuver for BPPV?",
          answer: "The Epley maneuver is highly effective for BPPV, with success rates of 80-90% when performed correctly. Many patients experience immediate relief after treatment."
        },
        {
          question: "Can neck problems cause vertigo?",
          answer: "Yes, cervical vertigo can result from neck injuries or dysfunction. Problems in the upper cervical spine can affect balance and cause dizziness."
        },
        {
          question: "Is vertigo dangerous?",
          answer: "While vertigo itself is usually not dangerous, it can increase fall risk and significantly impact quality of life. Proper treatment can reduce these risks effectively."
        },
        {
          question: "How long does vertigo treatment take?",
          answer: "BPPV often resolves in 1-3 treatments. Other types of vertigo may require several weeks of vestibular rehabilitation, but most patients see improvement within the first few sessions."
        }
      ]
    }
  },
  "work-injuries": {
    id: "work-injuries",
    name: "Work Injuries",
    icon: Briefcase,
    heroImage: "https://images.unsplash.com/photo-1659081442867-81ef07275490?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b3JrcGxhY2UlMjBpbmp1cnklMjB0cmVhdG1lbnQlMjBvY2N1cGF0aW9uYWx8ZW58MXx8fHwxNzU4NzQwNDA1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    hero: {
      headline: "Work Injury Treatment in Naperville, IL",
      subheadline: "Comprehensive care for workplace injuries and occupational health. Fast recovery and safe return to work with expert rehabilitation.",
      ctaText: "Schedule Your $29 New Patient Special"
    },
    aboutCondition: {
      title: "Understanding Work Injuries",
      description: "Work-related injuries can range from acute accidents to repetitive strain injuries. Proper treatment not only promotes healing but also prevents chronic problems and ensures safe return to work.",
      keyPoints: [
        "Early treatment leads to faster recovery and return to work",
        "Repetitive strain injuries are increasingly common in office workers",
        "Proper ergonomics and workplace modifications prevent re-injury",
        "Workers' compensation typically covers appropriate medical treatment"
      ]
    },
    whyItWorks: {
      title: "Why the Camelback Method Works",
      subtitle: "Comprehensive workplace injury care and prevention",
      methods: [
        {
          icon: Stethoscope,
          title: "Injury Assessment",
          description: "Thorough evaluation to identify all aspects of workplace injuries",
          color: "bg-blue-100 text-blue-600"
        },
        {
          icon: Activity,
          title: "Functional Recovery",
          description: "Work-specific rehabilitation to ensure safe return to job duties",
          color: "bg-green-100 text-green-600"
        },
        {
          icon: Shield,
          title: "Injury Prevention",
          description: "Workplace analysis and modifications to prevent future injuries",
          color: "bg-purple-100 text-purple-600"
        },
        {
          icon: Briefcase,
          title: "Insurance Navigation",
          description: "Expert documentation and coordination with workers' compensation",
          color: "bg-orange-100 text-orange-600"
        }
      ]
    },
    treatment: {
      title: "How We Help",
      subtitle: "Comprehensive work injury treatment and occupational rehabilitation",
      treatments: [
        "Immediate workplace injury assessment and care",
        "Comprehensive musculoskeletal examination",
        "Work-specific functional capacity evaluations",
        "Targeted rehabilitation for job-specific demands",
        "Ergonomic assessments and workplace modifications",
        "Return-to-work planning and job conditioning",
        "Injury prevention education and training",
        "Workers' compensation documentation and coordination"
      ]
    },
    relatedResources: {
      title: "Explore Related Topics",
      links: [
        {
          title: "Carpal Tunnel Treatment",
          description: "Common repetitive strain injury from computer work",
          type: "service"
        },
        {
          title: "Back Pain Relief",
          description: "Treatment for lifting and workplace back injuries",
          type: "service"
        },
        {
          title: "Workplace Ergonomics",
          description: "Setting up your workspace to prevent injuries",
          type: "blog"
        },
        {
          title: "Injury Prevention",
          description: "Strategies to stay safe at work",
          type: "blog"
        }
      ]
    },
    testimonials: {
      title: "Real Recovery Stories in Naperville",
      stories: [
        {
          quote: "My workplace back injury had me out for weeks. The targeted rehabilitation here got me back to work stronger than before.",
          name: "James K.",
          condition: "Workplace Back Injury",
          rating: 5
        },
        {
          quote: "Repetitive strain from data entry was causing terrible wrist pain. The ergonomic changes and treatment solved everything.",
          name: "Amanda R.",
          condition: "Repetitive Strain Injury",
          rating: 5
        },
        {
          quote: "The workers' comp process was confusing, but this team handled everything and got me the care I needed.",
          name: "Michael T.",
          condition: "Workplace Accident",
          rating: 5
        }
      ]
    },
    faqs: {
      title: "Common Questions",
      questions: [
        {
          question: "Does workers' compensation cover my treatment?",
          answer: "Workers' compensation typically covers medical treatment for work-related injuries. We work directly with workers' comp insurance and can help navigate the process."
        },
        {
          question: "How soon should I seek treatment after a work injury?",
          answer: "Seek treatment as soon as possible after a work injury. Early intervention leads to better outcomes and proper documentation for workers' compensation claims."
        },
        {
          question: "What if my injury developed gradually from repetitive work?",
          answer: "Repetitive strain injuries are covered by workers' compensation in most cases. We help document these injuries and provide appropriate treatment and workplace modifications."
        },
        {
          question: "Can you help me return to work safely?",
          answer: "Yes, we provide work conditioning programs, functional capacity evaluations, and return-to-work planning to ensure you can safely resume your job duties."
        },
        {
          question: "What if my employer questions my injury?",
          answer: "We provide thorough documentation and objective assessments to support your workers' compensation claim and ensure you receive appropriate care."
        }
      ]
    }
  }
};

// Helper function to get condition slug from name
export function getConditionSlug(conditionName: string): string {
  return conditionName
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, '')
    .replace(/\s+/g, '-')
    .replace(/^-+|-+$/g, '');
}

// Helper function to get service data by slug
export function getServiceBySlug(slug: string): ServiceData | null {
  return serviceDataMap[slug] || null;
}