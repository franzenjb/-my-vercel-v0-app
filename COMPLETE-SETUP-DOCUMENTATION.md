# Complete Development Stack Documentation

## 🎯 WORKING STACK OVERVIEW

### Successfully Implemented
- **Next.js 15** with App Router
- **Vercel** hosting with auto-deployment
- **GitHub** version control and CI/CD
- **Shadcn/ui** component library
- **v0.dev** AI component generation
- **Claude Code CLI** (v1.0.51)

### Live URLs
- **Production Site:** https://my-vercel-v0-app.vercel.app/
- **GitHub Repository:** https://github.com/franzenjb/-my-vercel-v0-app
- **Vercel Dashboard:** https://vercel.com/jbf-2539s-projects

## 🔧 LOCAL DEVELOPMENT SETUP

### Project Location
```
/Users/jefffranzen/Desktop/REPOSITORIES/New Coding Setup/my-vercel-v0-app/
```

### Key Configuration Files
- **Next.js Config:** `next.config.ts` (ESLint disabled for builds)
- **Component Config:** `components.json`
- **Environment:** `.env.local` (contains database credentials)
- **TypeScript:** `tsconfig.json`
- **Package Management:** `package.json`

### File Structure
```
my-vercel-v0-app/
├── src/
│   ├── app/
│   │   ├── page.tsx           # Main homepage
│   │   ├── layout.tsx         # App layout
│   │   └── globals.css        # Global styles
│   ├── components/
│   │   └── ui/                # Shadcn/ui components
│   │       ├── button.tsx
│   │       ├── card.tsx
│   │       ├── badge.tsx
│   │       └── input.tsx
│   └── lib/
│       ├── utils.ts           # Utility functions
│       ├── db.ts              # Database config
│       └── schema.ts          # Database schema
├── public/                    # Static assets
├── .env.local                 # Environment variables
└── components.json            # Shadcn configuration
```

## 🚀 DEPLOYMENT WORKFLOW

### Automatic Deployment Process
1. **Edit code** locally (in Cursor or any editor)
2. **Git commit:** `git add . && git commit -m "Description"`
3. **Git push:** `git push`
4. **Auto-deploys** to Vercel in ~30 seconds
5. **Live at:** https://my-vercel-v0-app.vercel.app/

### Development Commands
```bash
# Start local development
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Install new dependencies
npm install [package-name]
```

## 🎨 V0.DEV COMPONENT WORKFLOW

### Adding New Components
1. **Go to:** https://v0.dev
2. **Generate component** with natural language prompt
3. **Copy the command:** `npx shadcn@latest add "https://v0.dev/chat/..."`
4. **Run in terminal** from project root
5. **Commit and push** changes

### Example Workflow
```bash
# Navigate to project
cd "/Users/jefffranzen/Desktop/REPOSITORIES/New Coding Setup/my-vercel-v0-app"

# Add v0 component
npx shadcn@latest add "https://v0.dev/chat/b/YOUR_COMPONENT_URL"

# Deploy changes
git add .
git commit -m "Add new component from v0.dev"
git push
```

## 🔐 ENVIRONMENT VARIABLES & SECRETS

### Current Environment Variables (.env.local)
```
POSTGRES_URL="postgres://de46c099a18d80d0a4e1b83f9b12069d9a9cb9f3def58cf2330c36a22d84154d:sk_W5GH5iuB5rRaAGMmQ1aWa@db.prisma.io:5432/?sslmode=require"
PRISMA_DATABASE_URL="prisma+postgres://accelerate.prisma-data.net/?api_key=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqd3RfaWQiOjEsInNlY3VyZV9rZXkiOiJza19XNUdINWl1QjVyUmFBR01tUTFhV2EiLCJhcGlfa2V5IjoiMDFKWlpTV1RZMlQ5M0dHOTgxRTcyR0tSRUUiLCJ0ZW5hbnRfaWQiOiJkZTQ2YzA5OWExOGQ4MGQwYTRlMWI4M2Y5YjEyMDY5ZDlhOWNiOWYzZGVmNThjZjIzMzBjMzZhMjJkODQxNTRkIiwiaW50ZXJuYWxfc2VjcmV0IjoiZmNmOTA2MWEtODNhZS00ZGI2LWE5YzQtYTk3N2MwNWU1NzZmIn0.JZYOD2diPWig_sW1HzlL0zJJbSvMucfJAmI2REahaDU"
DATABASE_URL="postgres://de46c099a18d80d0a4e1b83f9b12069d9a9cb9f3def58cf2330c36a22d84154d:sk_W5GH5iuB5rRaAGMmQ1aWa@db.prisma.io:5432/?sslmode=require"
```

### Vercel Environment Variables
These are also configured in Vercel dashboard:
- Go to: Vercel Dashboard → Project → Settings → Environment Variables
- All database credentials are synced between local and production

## 🛠️ CLAUDE CODE CLI SETUP

### Installation Status
- **Version:** 1.0.51 (updated)
- **Install location:** `~/.npm-global/bin/`
- **PATH configured:** In `~/.zshrc`

### Claude Code Commands
```bash
# Check version
claude --version

# Start new session
claude

# Get help
claude --help
```

### Shell Configuration (~/.zshrc)
```bash
# Conda environment (existing)
# >>> conda initialize >>>
# ... conda setup code ...
# <<< conda initialize <<<

# NPM global packages (added)
export PATH="$HOME/.npm-global/bin:$PATH"
```

## 📊 ACCOUNTS & SERVICES

### Vercel Account
- **Account:** jbf-2539
- **Plan:** Paid account
- **Projects:** https://vercel.com/jbf-2539s-projects
- **Auto-deployment:** Enabled from GitHub

### GitHub Account
- **Username:** franzenjb
- **Repository:** https://github.com/franzenjb/-my-vercel-v0-app
- **Branch:** main (auto-deploys to Vercel)

### v0.dev Account
- **Platform:** https://v0.dev
- **Integration:** Shadcn CLI commands
- **Usage:** AI component generation

## 🐍 PYTHON PROJECT MIGRATION STRATEGY

### Current PythonAnywhere Projects
Based on your command: `cd /home/jfranzen/weather-daily-report && git pull && python3 run.py | cd ~/emergency_Beta && git pull && python3.10 emergency_detector.py | cd /home/jfranzen/NOSBeta && git pull | cd /home/jfranzen git clone https://github.com/franzenjb/National_Operations_Summary.git`

**Identified Projects:**
1. **weather-daily-report** - Weather reporting system
2. **emergency_Beta** - Emergency detection system  
3. **NOSBeta** - Beta operations project
4. **National_Operations_Summary** - Operations summary tool
5. **Plus 2 web apps** (not specified)

### Migration Recommendations
**Keep on PythonAnywhere:**
- Data processing scripts (weather, emergency detection)
- Background automation and scheduled tasks
- Internal tools that work fine as-is

**Migrate to Vercel/Next.js:**
- Public-facing web applications
- Dashboards and user interfaces
- Any apps that need modern UI/UX

**Hybrid Approach:**
```
PythonAnywhere (backend data) → API → Next.js (frontend) → Vercel
```

## 🔄 DAILY WORKFLOW

### For Content Updates
1. **Open Cursor IDE**
2. **Edit** `src/app/page.tsx` or other files
3. **Save** changes
4. **Terminal commands:**
   ```bash
   git add .
   git commit -m "Update content"
   git push
   ```
5. **Auto-deploys** in 30 seconds

### For New Features
1. **Go to v0.dev**
2. **Generate component** with prompt
3. **Copy and run** shadcn command
4. **Test locally:** `npm run dev`
5. **Commit and push** to deploy

### For Database Work (When Needed)
- **Local:** Edit files in `src/lib/`
- **Schema:** Update `src/lib/schema.ts`
- **Migration:** `npx drizzle-kit generate && npx drizzle-kit push`

## 🚨 TROUBLESHOOTING

### Common Issues & Solutions

**Build Failures:**
- Check Vercel deployment logs
- Usually import path issues (`/` vs `@/`)
- ESLint disabled in `next.config.ts`

**Component Import Errors:**
- Ensure components are in `src/components/ui/`
- Use `@/components/ui/component-name` imports
- Check `components.json` configuration

**Environment Variables:**
- Local: `.env.local` file
- Production: Vercel dashboard settings
- Must match exactly between environments

**Claude Code CLI Issues:**
- Check version: `claude --version`
- Reinstall: `npm i -g @anthropic-ai/claude-code`
- Path issues: Verify `~/.zshrc` configuration

## 📝 IMPORTANT LESSONS LEARNED

### File Structure Requirements
- Components MUST be in `src/components/ui/`
- Use `@/` prefix for all internal imports
- Never put components in project root

### Import Path Standards
```typescript
// CORRECT
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

// INCORRECT  
import { Button } from "/components/ui/button"
import { cn } from "/lib/utils"
```

### Deployment Best Practices
- Always test locally first: `npm run dev`
- Check build success: `npm run build`
- Monitor Vercel deployment logs
- ESLint can be disabled for faster deployments

## 🔮 NEXT STEPS & EXPANSION

### Immediate Actions
1. **Practice the workflow** - Add/edit content
2. **Test v0.dev integration** - Generate new components
3. **Backup this setup** - Document working configuration

### Future Enhancements
1. **Migrate one Python web app** to this stack
2. **Add more pages** (About, Contact, Projects)
3. **Integrate live data** from Python APIs
4. **Add database functionality** when needed
5. **Explore AI features** with Vercel AI SDK

### Scaling Strategy
- Start with frontend modernization
- Keep Python backends as API sources
- Gradually replace old interfaces
- Maintain working systems during transition

---

## 🔐 SECURITY NOTES

**DO NOT COMMIT TO GIT:**
- `.env.local` file (already gitignored)
- API keys or secrets
- Database credentials

**SAFE TO COMMIT:**
- Source code
- Configuration files
- Documentation
- Public assets

**BACKUP LOCATIONS:**
- Local: This repository
- GitHub: Version controlled
- Vercel: Deployed version
- Documentation: This file

---

*Last Updated: July 12, 2025*  
*Status: Fully Functional Production Environment*