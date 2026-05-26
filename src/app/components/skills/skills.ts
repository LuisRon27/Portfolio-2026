import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScrollAnimationDirective } from '../../shared/directives/scroll-animation.directive';

interface Skill {
  name: string;
  icon?: string;
}

interface SkillCategory {
  id: string;
  name: string;
  icon: string;
  color: string;
  skills: Skill[];
}

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule, ScrollAnimationDirective],
  templateUrl: './skills.html',
  styleUrls: ['./skills.css']
})
export class Skills {
  // Categorías de habilidades - todas visibles
  skillCategories: SkillCategory[] = [
    {
      id: 'frontend',
      name: 'Front-End',
      icon: 'uil uil-brackets-curly',
      color: '#6c5ce7',
      skills: [
        { name: 'Angular', icon: 'assets/img/Stack/Angular.webp' },
        { name: 'TypeScript', icon: 'assets/img/Stack/ts.webp' },
        { name: 'JavaScript', icon: 'assets/img/Stack/js.webp' },
        { name: 'HTML5', icon: 'assets/img/Stack/html.webp' },
        { name: 'CSS3', icon: 'assets/img/Stack/css.webp' },
        { name: 'Bootstrap', icon: 'assets/img/Stack/Bootstrap.webp' },
        { name: 'Angular Material', icon: 'assets/img/Stack/angular-material.webp' }
      ]
    },
    {
      id: 'backend',
      name: 'Back-End',
      icon: 'uil uil-server',
      color: '#00b894',
      skills: [
        { name: 'ASP.NET Core', icon: 'assets/img/Stack/dotnet.webp' },
        { name: 'C#', icon: 'assets/img/Stack/csharp.webp' },
        { name: 'Entity Framework', icon: 'assets/img/Stack/entity-framework.webp' },
        { name: 'LINQ', icon: 'assets/img/Stack/linq.webp' },
        { name: 'REST APIs', icon: 'assets/img/Stack/rest-apis.webp' },
        { name: 'PHP', icon: 'assets/img/Stack/php.webp' },
        { name: 'JWT', icon: 'assets/img/Stack/jwt.webp' },
        { name: 'Clean Architecture', icon: 'assets/img/Stack/clean-architecture.webp' }
      ]
    },
    {
      id: 'database',
      name: 'Bases de Datos',
      icon: 'uil uil-database',
      color: '#0984e3',
      skills: [
        { name: 'SQL Server', icon: 'assets/img/Stack/sql.webp' },
        { name: 'MySQL', icon: 'assets/img/Stack/mysql.webp' }
      ]
    },
    {
      id: 'ai',
      name: 'IA & Automatización',
      icon: 'uil uil-brain',
      color: '#e17055',
      skills: [
        { name: 'OpenAI API', icon: 'assets/img/Stack/openai.webp' },
        { name: 'AI Agents', icon: 'assets/img/Stack/ai-agents.webp' },
        { name: 'RAG', icon: 'assets/img/Stack/Rag.webp' },
        { name: 'N8N', icon: 'assets/img/Stack/n8n.webp' },
        { name: 'OpenCode', icon: 'assets/img/Stack/opencode.webp' }
      ]
    },
    {
      id: 'tools',
      name: 'Herramientas',
      icon: 'uil uil-wrench',
      color: '#f39c12',
      skills: [
        { name: 'Git', icon: 'assets/img/Stack/Git.webp' },
        { name: 'GitHub', icon: 'assets/img/Stack/Github.webp' },
        { name: 'Postman', icon: 'assets/img/Stack/postman.webp' },
        { name: 'Figma', icon: 'assets/img/Stack/figma.webp' },
        { name: 'IIS', icon: 'assets/img/Stack/iis.webp' },
        { name: 'Xampp', icon: 'assets/img/Stack/xampp.webp' },
        { name: 'Scrum', icon: 'assets/img/Stack/scrum.webp' },
        { name: 'Trello', icon: 'assets/img/Stack/Trello.webp' }
      ]
    },
    {
      id: 'desktop',
      name: 'Desktop',
      icon: 'uil uil-desktop',
      color: '#9b59b6',
      skills: [
        { name: 'VB.NET', icon: 'assets/img/Stack/vbnet.webp' },
        { name: 'Windows Forms', icon: 'assets/img/Stack/netframework.webp' },
        { name: 'Crystal Reports', icon: 'assets/img/Stack/crystal-reports.webp' }
      ]
    }
  ];
}