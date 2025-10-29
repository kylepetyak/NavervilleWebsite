// Simple PDF generator using HTML to PDF conversion

export interface PDFContent {
  title: string;
  subtitle?: string;
  sections: {
    title: string;
    content: string[];
    checklist?: string[];
  }[];
  footer?: string;
}

// PDF Content Data
export const pdfTemplates = {
  'morning-routine-kids': {
    title: 'ADHD-Friendly Morning Routine for Kids',
    subtitle: 'A step-by-step guide from Camelback Medical Centers - Naperville',
    sections: [
      {
        title: 'Getting Started',
        content: [
          'This visual routine guide is designed specifically for children with ADHD.',
          'Use consistent timing, visual cues, and positive reinforcement.',
          'Remember: Start small and build gradually for lasting success.'
        ]
      },
      {
        title: 'Evening Preparation (Night Before)',
        checklist: [
          'Lay out tomorrow\'s clothes',
          'Pack backpack with completed homework',
          'Prepare lunch and snacks',
          'Set out shoes and jacket',
          'Check weather for appropriate clothes'
        ]
      },
      {
        title: 'Morning Routine Steps',
        checklist: [
          'Wake up at consistent time (same time daily)',
          'Use bathroom and wash hands',
          'Get dressed in pre-selected clothes',
          'Eat protein-rich breakfast',
          'Brush teeth and hair',
          'Get backpack and lunch',
          'Quick review of day\'s schedule',
          'Leave house on time'
        ]
      },
      {
        title: 'Helpful Tips for Success',
        content: [
          '• Use timers for each step (10-15 minutes per activity)',
          '• Create a visual chart with pictures for non-readers',
          '• Celebrate completions with positive praise',
          '• Build in 5-minute buffer time',
          '• Keep routine flexible for special circumstances'
        ]
      },
      {
        title: 'Breakfast Ideas for Focus',
        content: [
          '• Greek yogurt with berries and granola',
          '• Scrambled eggs with whole grain toast',
          '• Protein smoothie with banana',
          '• Oatmeal with nuts and fruit',
          '• Avoid sugary cereals and pastries'
        ]
      }
    ],
    footer: 'For personalized ADHD support, visit Camelback Medical Centers in Naperville. Call (630) 416-1151'
  },
  'work-block-template-adults': {
    title: 'ADHD Work Block Template for Adults',
    subtitle: 'Productivity strategies from Camelback Medical Centers - Naperville',
    sections: [
      {
        title: 'Understanding Work Blocks',
        content: [
          'Work blocks are focused time periods designed for ADHD brains.',
          'Start with 15-20 minute blocks and gradually increase.',
          'Include planned breaks between each work session.'
        ]
      },
      {
        title: 'Setting Up Your Work Block',
        checklist: [
          'Choose one specific task or project',
          'Remove distractions (phone, notifications)',
          'Set a timer for your chosen duration',
          'Have water and any needed materials ready',
          'Choose focus music or white noise if helpful'
        ]
      },
      {
        title: 'Work Block Schedule Template',
        content: [
          'Block 1: 20 minutes focused work + 5 minute break',
          'Block 2: 20 minutes focused work + 5 minute break',
          'Block 3: 20 minutes focused work + 15 minute break',
          'Block 4: 25 minutes focused work + 10 minute break',
          '',
          'After 4 blocks: Take 30-60 minute longer break'
        ]
      },
      {
        title: 'Effective Break Activities',
        content: [
          '• Walk around the block or office',
          '• Do 2-3 minutes of stretching',
          '• Practice deep breathing exercises',
          '• Drink water and have a healthy snack',
          '• Avoid social media and email during breaks'
        ]
      },
      {
        title: 'Tips for Workplace Success',
        content: [
          '• Communicate your work style with supervisors',
          '• Use noise-cancelling headphones if allowed',
          '• Keep fidget tools at your desk',
          '• Schedule demanding tasks during peak energy hours',
          '• Use calendar blocking to protect focused work time'
        ]
      }
    ],
    footer: 'For professional ADHD coaching and support, visit Camelback Medical Centers in Naperville. Call (630) 416-1151'
  }
};

// Generate HTML content for PDF
const generateHTMLContent = (content: PDFContent): string => {
  const sectionsHTML = content.sections.map(section => {
    const contentHTML = section.content.map(p => `<p class="content-paragraph">${p}</p>`).join('');
    const checklistHTML = section.checklist ? 
      `<ul class="checklist">
        ${section.checklist.map(item => `<li class="checklist-item">☐ ${item}</li>`).join('')}
      </ul>` : '';
    
    return `
      <div class="section">
        <h2 class="section-title">${section.title}</h2>
        ${contentHTML}
        ${checklistHTML}
      </div>
    `;
  }).join('');

  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <title>${content.title}</title>
      <style>
        @page {
          margin: 1in;
          size: A4;
        }
        
        body {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          line-height: 1.6;
          color: #333;
          max-width: 100%;
          margin: 0;
          padding: 20px;
        }
        
        .header {
          text-align: center;
          margin-bottom: 30px;
          border-bottom: 3px solid #2962ff;
          padding-bottom: 20px;
        }
        
        .title {
          color: #2962ff;
          font-size: 24px;
          font-weight: bold;
          margin-bottom: 10px;
        }
        
        .subtitle {
          color: #666;
          font-size: 16px;
          font-style: italic;
          margin-bottom: 0;
        }
        
        .section {
          margin-bottom: 25px;
          page-break-inside: avoid;
        }
        
        .section-title {
          color: #2962ff;
          font-size: 18px;
          font-weight: bold;
          margin-bottom: 15px;
          border-left: 4px solid #2962ff;
          padding-left: 15px;
        }
        
        .content-paragraph {
          margin-bottom: 12px;
          line-height: 1.7;
        }
        
        .checklist {
          list-style: none;
          padding-left: 0;
          margin: 15px 0;
        }
        
        .checklist-item {
          margin-bottom: 8px;
          padding-left: 20px;
          position: relative;
          font-weight: 500;
        }
        
        .checklist-item:before {
          content: '☐';
          position: absolute;
          left: 0;
          color: #2962ff;
          font-weight: bold;
        }
        
        .footer {
          margin-top: 40px;
          padding-top: 20px;
          border-top: 2px solid #e0e0e0;
          text-align: center;
          font-size: 12px;
          color: #666;
          font-style: italic;
        }
        
        /* Print-specific styles */
        @media print {
          body {
            font-size: 12px;
          }
          
          .section {
            page-break-inside: avoid;
          }
          
          .title {
            font-size: 20px;
          }
          
          .section-title {
            font-size: 16px;
          }
        }
      </style>
    </head>
    <body>
      <div class="header">
        <h1 class="title">${content.title}</h1>
        ${content.subtitle ? `<p class="subtitle">${content.subtitle}</p>` : ''}
      </div>
      
      ${sectionsHTML}
      
      ${content.footer ? `<div class="footer">${content.footer}</div>` : ''}
    </body>
    </html>
  `;
};

// Generate plain text content for download
const generateTextContent = (content: PDFContent): string => {
  let text = `${content.title}\n`;
  text += '='.repeat(content.title.length) + '\n\n';
  
  if (content.subtitle) {
    text += `${content.subtitle}\n\n`;
  }

  content.sections.forEach(section => {
    text += `${section.title}\n`;
    text += '-'.repeat(section.title.length) + '\n\n';
    
    section.content.forEach(paragraph => {
      text += `${paragraph}\n\n`;
    });

    if (section.checklist) {
      section.checklist.forEach(item => {
        text += `☐ ${item}\n`;
      });
      text += '\n';
    }
    
    text += '\n';
  });

  if (content.footer) {
    text += `${content.footer}\n`;
  }

  return text;
};

// Download function that creates a text file (can be printed to PDF)
export const downloadPDF = (templateKey: keyof typeof pdfTemplates, filename?: string): void => {
  const template = pdfTemplates[templateKey];
  if (!template) {
    console.error('PDF template not found:', templateKey);
    return;
  }

  // For better user experience, let's create an HTML version that opens in a new tab
  // which can then be saved as PDF using the browser's built-in functionality
  const htmlContent = generateHTMLContent(template);
  
  // Create blob and download link
  const blob = new Blob([htmlContent], { type: 'text/html' });
  const url = URL.createObjectURL(blob);
  
  // Create a temporary link and trigger download
  const link = document.createElement('a');
  link.href = url;
  link.download = filename?.replace('.pdf', '.html') || `${templateKey}.html`;
  document.body.appendChild(link);
  
  // Also open in new tab for immediate viewing and manual PDF saving
  const newWindow = window.open();
  if (newWindow) {
    newWindow.document.write(htmlContent);
    newWindow.document.close();
    newWindow.document.title = template.title;
    
    // Add a helpful message
    setTimeout(() => {
      if (newWindow && !newWindow.closed) {
        newWindow.focus();
        alert('To save as PDF: Press Ctrl+P (or Cmd+P on Mac), then choose "Save as PDF" as the destination.');
      }
    }, 1000);
  }
  
  // Clean up
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
};

