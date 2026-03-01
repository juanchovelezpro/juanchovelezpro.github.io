import portraitImage from '../../images/picture.jpg';

export type ExperienceItem = {
  company: string;
  role: string;
  start: string;
  end: string;
  summary: string;
  achievements: string[];
  tools: string[];
};

export type SkillGroup = {
  title: string;
  items: string[];
};

export type ContactLink = {
  label: string;
  href: string;
  emphasis?: 'primary' | 'secondary';
};

export type PortfolioContent = {
  name: string;
  title: string;
  tagline: string;
  summary: string;
  certifications: string[];
  heroFocus: {
    title: string;
    points: string[];
  };
  experience: ExperienceItem[];
  skillGroups: SkillGroup[];
  impactHighlights: string[];
  contact: ContactLink[];
  availability: string;
  navItems: Array<{ label: string; href: string }>;
  portrait: {
    src: string;
    alt: string;
  };
};

export const portfolioContent: PortfolioContent = {
  name: 'Juan Camilo Velez Olaya',
  title: 'Senior DevOps Engineer',
  tagline:
    'I build platform and observability systems that make cloud delivery reliable, telemetry actionable, and production behavior easier to understand.',
  summary:
    'Senior DevOps Engineer focused on AWS, Kubernetes, CI/CD, Terraform, and GitOps, with strong experience building reliable cloud-native platforms. I improve delivery speed, reduce infrastructure cost, and strengthen observability through automation, telemetry design, and infrastructure as code.',
  certifications: [
    'AWS Certified Cloud Practitioner',
    'AWS Certified Solutions Architect - Associate',
    'AWS Certified SysOps Engineer',
    'AWS Certified DevOps Engineer - Professional'
  ],
  heroFocus: {
    title: 'Observability impact',
    points: [
      'Currently part of the observability team at Coupa, managing New Relic to keep telemetry actionable and cost-efficient.',
      'Designed Amazon Managed Prometheus as a centralized metrics layer across multiple clusters, improving shared visibility and consistency.',
      'Designed dashboards, alerts, and targeted telemetry strategies across metrics, logs, and traces to improve signal quality and reduce noise.'
    ]
  },
  experience: [
    {
      company: 'Coupa',
      role: 'Senior DevOps Engineer',
      start: 'Jul 2025',
      end: 'Present',
      summary:
        'Part of the observability team, improving how telemetry is collected, shaped, and used so engineering teams get actionable visibility without unnecessary ingestion cost.',
      achievements: [
        'Manage the New Relic platform and build dashboards and alerting that improve production visibility across critical services.',
        'Create and maintain Chef recipes that standardize observability-related configuration and operational workflows.',
        'Monitor metrics cardinality, logs, and traces to control ingestion costs and keep only high-value telemetry flowing into the platform.'
      ],
      tools: ['New Relic', 'Chef', 'Observability', 'Dashboards', 'Alerting', 'Cost Optimization']
    },
    {
      company: 'Encora Inc.',
      role: 'DevOps Engineer II',
      start: 'Oct 2023',
      end: 'Jul 2025',
      summary:
        'Supported BioTelemetry, a Philips company, by leading higher-impact platform work across AWS and Kubernetes, with a strong focus on cost optimization, reliability, security, and scalable delivery tooling.',
      achievements: [
        'Reduced AWS spend and improved cluster efficiency by deploying Karpenter across EKS clusters and optimizing node provisioning.',
        'Resolved Kubernetes networking scale issues by migrating from WeaveNet to Amazon VPC CNI with prefix delegation, custom networking, and multi-ENI support.',
        'Expanded platform maturity with modern observability, contextual alerting, reusable deployment workflows, stronger supply-chain security checks, and a RabbitMQ to Amazon MQ migration.'
      ],
      tools: ['AWS', 'Kubernetes', 'GitOps', 'Terraform', 'CI/CD', 'Observability']
    },
    {
      company: 'Encora Inc.',
      role: 'DevOps Engineer',
      start: 'Nov 2022',
      end: 'Sep 2023',
      summary:
        'Focused on standardizing deployment workflows and scaling platform operations during a major AWS migration for .NET microservices running on EKS.',
      achievements: [
        'Standardized deployments across .NET projects with improved multi-stage Azure Pipeline YAML templates and a self-service Kubernetes deployment pipeline.',
        'Led lift-and-shift migration work to AWS, coordinating services and infrastructure needed to support production workloads.',
        'Built custom autoscaling Azure Pipeline agents and executed Kubernetes upgrades in EKS while minimizing production downtime.'
      ],
      tools: ['AWS', 'Azure DevOps', 'Kubernetes', 'EKS', 'CI/CD', '.NET']
    },
    {
      company: 'Encora Inc.',
      role: 'Software Engineer I',
      start: 'Jan 2022',
      end: 'Oct 2022',
      summary:
        'Transitioned into platform-focused engineering by building reusable deployment foundations, GitOps workflows, and observability capabilities for a large microservices ecosystem.',
      achievements: [
        'Provisioned AWS EKS clusters and created reusable Helm and multi-stage pipeline templates that supported deployments for 200+ services.',
        'Implemented GitOps practices with Flux CD and automated EF Core database migrations inside deployment pipelines.',
        'Improved security and operability through custom secrets injection, KEDA-backed Selenium Grid scaling, and a centralized Grafana, Loki, Mimir, and Tempo stack.'
      ],
      tools: ['AWS', 'EKS', 'Helm', 'Flux CD', 'KEDA', 'Observability']
    },
    {
      company: 'Avantica',
      role: 'Software Engineer Intern',
      start: 'Jul 2021',
      end: 'Dec 2021',
      summary:
        'Started on the BioTelemetry account contributing to quality engineering and early DevOps delivery workflows, building the foundation for the later move into platform engineering.',
      achievements: [
        'Built API and UI automation tests with C#, SpecFlow, and Selenium, and improved test logic to reduce complexity.',
        'Contributed to a shared automation framework used across projects for integration testing.',
        'Supported .NET microservice deployments to AWS EKS using Helm through Azure DevOps multi-stage pipelines.'
      ],
      tools: ['C#', 'SpecFlow', 'Selenium', 'AWS', 'EKS', 'Azure DevOps']
    }
  ],
  skillGroups: [
    {
      title: 'Cloud',
      items: ['AWS', 'Virtual networks', 'IAM', 'Compute', 'Storage']
    },
    {
      title: 'Containers & Orchestration',
      items: ['Docker', 'Kubernetes', 'Helm', 'Flux CD', 'Container registries']
    },
    {
      title: 'CI/CD',
      items: ['GitHub Actions', 'Azure DevOps Pipelines', 'Build pipelines', 'Release automation']
    },
    {
      title: 'Infrastructure as Code',
      items: ['Terraform', 'Reusable modules', 'Environment bootstrapping']
    },
    {
      title: 'Monitoring & Reliability',
      items: ['Prometheus', 'Grafana Stack', 'New Relic', 'Alerting', 'Operational runbooks']
    },
    {
      title: 'Scripting & Systems',
      items: ['Bash', 'Python', 'Linux', 'Git']
    }
  ],
  impactHighlights: [
    'Automate delivery workflows so releases become repeatable and low-friction.',
    'Standardize infrastructure provisioning to reduce drift across environments.',
    'Improve visibility with monitoring, logs, and alerting built for fast response.',
    'Create platform patterns that let development teams ship faster with confidence.'
  ],
  contact: [
    {
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/juan-camilo-velez-olaya/',
      emphasis: 'primary'
    },
    {
      label: 'GitHub',
      href: 'https://github.com/juanchovelezpro',
      emphasis: 'secondary'
    }
  ],
  availability:
    'Not actively open to remote roles at the moment, but always available for a conversation about DevOps, observability, and platform engineering.',
  navItems: [
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Stack', href: '#stack' },
    { label: 'Impact', href: '#impact' },
    { label: 'Contact', href: '#contact' }
  ],
  portrait: {
    src: portraitImage,
    alt: 'Portrait of Juan Camilo Velez Olaya'
  }
};
