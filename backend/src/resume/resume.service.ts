import { Injectable } from '@nestjs/common';

@Injectable()
export class ResumeService {
  getResume() {
    return {
      hero: {
        name: 'Dr. Parvaneh Mohsen',
        title: 'Clinical Psychologist & CBT Specialist',
        location: 'Tehran, Iran',
        yearsOfPractice: 12,
        summary:
          'Compassionate psychologist focused on trauma recovery, anxiety management, and family counseling with evidence-based techniques.',
      },
      expertise: [
        'Cognitive Behavioral Therapy (CBT)',
        'Trauma-informed care',
        'Mindfulness-based stress reduction',
        'Couples and family therapy',
      ],
      experience: [
        {
          role: 'Senior Clinical Psychologist',
          company: 'Roshd Wellness Center',
          period: '2019 – Present',
          highlights: [
            'Designed tailored treatment plans for 300+ clients.',
            'Led psychoeducation workshops for anxiety and burnout.',
            'Mentored junior therapists in structured intervention models.',
          ],
        },
        {
          role: 'Psychotherapist',
          company: 'Mehr Mental Health Clinic',
          period: '2014 – 2019',
          highlights: [
            'Provided individual and group therapy sessions.',
            'Collaborated with psychiatrists for integrated care pathways.',
          ],
        },
      ],
      education: [
        {
          degree: 'M.Sc. in Clinical Psychology',
          school: 'University of Tehran',
          year: '2013',
        },
        {
          degree: 'B.Sc. in Psychology',
          school: 'Allameh Tabataba’i University',
          year: '2011',
        },
      ],
      certifications: [
        'Certified CBT Practitioner',
        'Trauma-Focused Therapy Certificate',
        'Mindfulness Facilitator Training',
      ],
      contact: {
        email: 'dr.parvaneh@example.com',
        phone: '+98 21 1234 5678',
      },
    };
  }
}
