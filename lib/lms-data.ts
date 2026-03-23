export interface Step {
  id: string;
  title: string;
  content: string;
}

export interface Module {
  id: string;
  title: string;
  description: string;
  steps: Step[];
}

export interface Section {
  id: string;
  title: string;
  description: string;
  color: string;
  modules: Module[];
}

export const lmsData: Section[] = [
  {
    id: 'live-stream',
    title: 'Live Stream',
    description: 'Learn how to set up and manage live streaming',
    color: '#00D9FF',
    modules: [
      {
        id: 'youtube-setup',
        title: 'Setup YouTube',
        description: 'Complete guide to YouTube Studio setup for live streaming',
        steps: [
          {
            id: 'step-1',
            title: 'Open YouTube Studio',
            content: 'Click on Schedule Stream in YouTube Studio dashboard'
          },
          {
            id: 'step-2',
            title: 'Create New Stream',
            content: 'Click on "Create New" to start a new scheduled stream'
          },
          {
            id: 'step-3',
            title: 'Add Sermon Title',
            content: 'Copy & paste "Sermon Title" from Google Doc into the title field'
          },
          {
            id: 'step-4',
            title: 'Add Description',
            content: 'Copy & paste "Description" from Google Doc. Press enter to create space. Do not delete other text.'
          },
          {
            id: 'step-5',
            title: 'Set Category',
            content: 'Check "Nonprofits & Activism" in the Category dropdown'
          },
          {
            id: 'step-6',
            title: 'Upload Thumbnail',
            content: 'Upload custom thumbnail from Broadcast → Today\'s Folder → Select Sermon Image'
          },
          {
            id: 'step-7',
            title: 'Configure Stream Settings',
            content: 'Set Playlist (Pastor At Boshoff Sermons if applicable), check "No, it\'s not made for kids", disable comments and live chat'
          },
          {
            id: 'step-8',
            title: 'Set Stream Time & Key',
            content: 'Select time (08:25, 10:25, or 17:55), set privacy (Public for 08:30/18:00, Unlisted for 10:30), copy MAINSTREAM stream key to Web Presenter'
          }
        ]
      },
      {
        id: 'obs-config',
        title: 'OBS Configuration',
        description: 'Set up OBS for professional streaming',
        steps: [
          {
            id: 'step-1',
            title: 'Install OBS',
            content: 'Download and install OBS Studio from obsproject.com'
          },
          {
            id: 'step-2',
            title: 'Add Sources',
            content: 'Add video/audio sources for your stream'
          },
          {
            id: 'step-3',
            title: 'Configure Settings',
            content: 'Set resolution, bitrate, and output settings'
          }
        ]
      },
      {
        id: 'live-best-practices',
        title: 'Going Live Best Practices',
        description: 'Best practices for successful live streams',
        steps: [
          {
            id: 'step-1',
            title: 'Test Before Going Live',
            content: 'Always do a test stream before the actual broadcast'
          },
          {
            id: 'step-2',
            title: 'Monitor Chat',
            content: 'Keep an eye on viewer comments and engagement'
          },
          {
            id: 'step-3',
            title: 'Have Backup Plan',
            content: 'Always have a backup internet connection and equipment'
          }
        ]
      }
    ]
  },
  {
    id: 'link',
    title: 'Link',
    description: 'Master link creation and management',
    color: '#00FF88',
    modules: [
      {
        id: 'create-links',
        title: 'Creating Shareable Links',
        description: 'Learn how to create and share links',
        steps: [
          {
            id: 'step-1',
            title: 'Generate Link',
            content: 'Create a new shareable link for your content'
          },
          {
            id: 'step-2',
            title: 'Customize URL',
            content: 'Make the URL memorable and descriptive'
          },
          {
            id: 'step-3',
            title: 'Test Link',
            content: 'Verify the link works before sharing'
          }
        ]
      },
      {
        id: 'link-management',
        title: 'Link Management Best Practices',
        description: 'Manage links effectively',
        steps: [
          {
            id: 'step-1',
            title: 'Organize Links',
            content: 'Keep links organized by category or date'
          },
          {
            id: 'step-2',
            title: 'Track Performance',
            content: 'Monitor click-through rates and engagement'
          }
        ]
      },
      {
        id: 'link-tracking',
        title: 'Tracking Link Performance',
        description: 'Track and analyze link metrics',
        steps: [
          {
            id: 'step-1',
            title: 'View Analytics',
            content: 'Check click statistics and user data'
          },
          {
            id: 'step-2',
            title: 'Optimize Links',
            content: 'Adjust links based on performance data'
          }
        ]
      }
    ]
  },
  {
    id: 'technical',
    title: 'Technical',
    description: 'Technical training and system setup',
    color: '#FFB800',
    modules: [
      {
        id: 'system-setup',
        title: 'System Setup',
        description: 'Set up your technical environment',
        steps: [
          {
            id: 'step-1',
            title: 'Check System Requirements',
            content: 'Verify your computer meets minimum requirements'
          },
          {
            id: 'step-2',
            title: 'Install Software',
            content: 'Install required software and tools'
          },
          {
            id: 'step-3',
            title: 'Configure Settings',
            content: 'Configure system settings for optimal performance'
          }
        ]
      },
      {
        id: 'troubleshooting',
        title: 'Troubleshooting Common Issues',
        description: 'Solve common technical problems',
        steps: [
          {
            id: 'step-1',
            title: 'Audio Issues',
            content: 'Troubleshoot microphone and audio problems'
          },
          {
            id: 'step-2',
            title: 'Video Issues',
            content: 'Fix camera and video quality problems'
          },
          {
            id: 'step-3',
            title: 'Connection Issues',
            content: 'Resolve internet and network problems'
          }
        ]
      },
      {
        id: 'advanced-features',
        title: 'Advanced Features',
        description: 'Learn advanced technical features',
        steps: [
          {
            id: 'step-1',
            title: 'Custom Overlays',
            content: 'Create custom overlays for your streams'
          },
          {
            id: 'step-2',
            title: 'Multi-Platform Streaming',
            content: 'Stream to multiple platforms simultaneously'
          },
          {
            id: 'step-3',
            title: 'Advanced Analytics',
            content: 'Access detailed streaming analytics'
          }
        ]
      }
    ]
  }
];
