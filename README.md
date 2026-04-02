# AHI Impact Award Platform

A world-class digital platform for **Action Health Incorporated (AHI)** that empowers youth to track, measure, and celebrate community impact through a structured gamification system.

## 🎯 Product Vision

The platform rivals platforms like LinkedIn, Intaward, and institutional dashboards in:
- **Visual hierarchy and polish**
- **Responsive design** (mobile-first)
- **Navigation clarity**
- **Data visualization**
- **User feedback systems**
- **Accessibility compliance**
- **Performance**

---

## ✨ Core Features

### 1. **Landing Page** ✅
- Professional hero section with animations
- Animated impact statistics
- Rotating educational facts
- Featured impact stories
- Feature showcase with 6 key benefits
- Strong CTAs with proper hierarchy

### 2. **Dark Mode Support** ✅
- Toggle switch in header
- Persistent preference (LocalStorage)
- Thoughtfully designed dark UI (not inverted)
- Professional dark color palette (#0A192F)

### 3. **Participant Portal** ✅ (Advanced)
- **Dashboard**: Current level, progress, stats
- **Projects Tab**: Multi-step project submission form
  - Step 1: Project Details (title, category, description)
  - Step 2: Impact Metrics (people impacted, duration, location)
  - Step 3: Evidence & Resources (photos/videos, verification)
  - Step 4: Review & Submit
- **Journal Tab**: Timeline-based project history
- **Certificates Tab**: Mock certificate preview & download
- Tab-based navigation with smooth transitions
- Progress bars showing movement to next level
- Status badges (approved, pending, rejected)

### 4. **Award Levels System** ✅
- **Spark** 🔥 (1 project)
- **Ripple** 🌊 (3 projects)
- **Beacon** 🌟 (5 projects)
- **Legacy** 🌍 (10 projects)
- Locked/unlocked states
- Visual journey representation

### 5. **Facilitator Portal** ✅
- Project submission queue
- Approve/Reject controls
- Analytics dashboard (Recharts)
- Participation trends
- Project categories breakdown
- Engagement metrics

### 6. **Impact Stories** ✅
- Card-based feed layout
- Filter by category
- Search functionality
- Featured story spotlight

### 7. **Additional Pages** ✅
- About Page
- How It Works (6-step process)
- Events & Recognition
- Resources (Guides, FAQs, Toolkits)
- Get Involved (Volunteer, Partner, Donate)
- Contact Page (Form with LocalStorage)
- Leaderboard (Top contributors)

---

## 🏗️ Architecture

### Context API (Global State)
```
AuthContext      → User authentication & roles
ThemeContext     → Dark/light mode toggle
UIContext        → Notifications & UI state
ImpactContext    → Impact data & calculations
```

### Custom Hooks
```
useAuth()          → Access auth context
useTheme()         → Access theme context
useUI()            → Use notifications
useImpact()        → Use impact data
useLocalStorage()  → Persist data
useNotifications() → Notification utilities
```

### Component Library
| Component | Purpose |
|-----------|---------|
| **Card** | Main card container with glassmorphism |
| **Badge** | Status & category indicators |
| **Button** | Reusable button with variants |
| **Progress** | Animated progress bars |
| **Toast** | Notification system |
| **MultiStepForm** | Multi-step form wizard |
| **EmptyState** | No-data scenarios |
| **ImpactVerification** | Project verification UI |
| **SkillsTracker** | Skills development tracker |

---

## 🎨 Design System

### Colors
- **Primary**: `#0A66C2` (Trust, Authority)
- **Secondary**: `#1E90FF` (Energy, Youth)
- **Accent**: `#FF8C00` (Achievements)
- **Dark Background**: `#0A192F`
- **Dark Card**: `#112240`

### Typography
- **Headings**: Impact (strong, institutional)
- **Body**: Inter / Poppins (clean, readable)

### Spacing & Layout
- 12-column grid
- Consistent gap system (Tailwind)
- Mobile-first responsive design

### Glassmorphism
- Selective use on cards & overlays
- 10px blur backdrop
- Subtle borders for depth

---

## 🚀 Advanced Features (Ready for Implementation)

### Already Built
- ✅ Dark Mode with persistence
- ✅ Multi-step form system
- ✅ Toast notifications
- ✅ Impact context for data management
- ✅ Skill tracking component
- ✅ Impact verification component

### Ready to Integrate
- 🔧 **AI Assistant Mock** (Suggestion system)
- 🔧 **Verification System** (Evidence scoring)
- 🔧 **Before/After Comparison** (Visual slider)
- 🔧 **Community Impact Map** (Mock geolocation data)
- 🔧 **Pitch Mode** (Presentation view)
- 🔧 **Challenge Campaigns** (Seasonal engagement)
- 🔧 **Impact Resume Generator** (Export feature)

---

## 📊 Data Models

### User
```javascript
{
  id,
  name,
  email,
  role,           // 'participant' | 'facilitator'
  level,          // 'Newcomer' | 'Spark' | 'Ripple' | 'Beacon' | 'Legacy'
  xp,
  badges: [],
  skills: [],
  projects: []
}
```

### Project
```javascript
{
  id,
  title,
  description,
  category,       // 'Environment' | 'Education' | 'Health' | 'Community'
  participantId,
  status,         // 'pending' | 'approved' | 'rejected'
  impactScore,
  verificationStatus,  // 'pending' | 'verified' | 'flagged'
  evidence: [],
  peopleImpacted,
  duration,
  location,
  createdAt,
  submittedAt
}
```

---

## 🛠️ Tech Stack

- **React** 18 (Hooks, Functional Components)
- **TailwindCSS** (Utility-first styling)
- **Framer Motion** (Animations)
- **React Router** v6 (Navigation)
- **Recharts** (Data visualization)
- **Lucide React** (Icons, no emojis)
- **Context API** (State management)
- **LocalStorage** (Demo persistence)

---

## 🎯 Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

---

## 📱 Responsive Design

- **Mobile**: Full-width, single column
- **Tablet**: 2-column grid
- **Desktop**: 3+ column grid
- **Navigation**: Hamburger menu on mobile, full nav on desktop
- **Touch targets**: Min 48px for accessibility

---

## ♿ Accessibility

- ✅ High contrast ratios
- ✅ Keyboard navigation
- ✅ ARIA labels
- ✅ Large tap targets
- ✅ Clear form labels
- ✅ Semantic HTML

---

## 📈 Performance

- Lazy loading for routes (ready for implementation)
- Optimized animations (no lag)
- Code splitting (ready for implementation)
- Compressed assets
- Production build: ~750KB (gzipped: ~216KB)

---

## 🔐 Security & Privacy

- Mock authentication (demo only)
- LocalStorage for temporary data (not production)
- No sensitive data storage
- HTTPS ready

---

## 🚀 Deployment Ready

The platform is production-ready for:
- Vercel
- Netlify
- AWS S3 + CloudFront
- Any static hosting

---

## 📝 License

Built for Action Health Incorporated (AHI)

---

## 🎓 Next Steps

1. **Backend Integration**: Connect to real API for authentication & data persistence
2. **AI Features**: Implement actual AI suggestions for projects
3. **Analytics**: Advanced dashboard with real data
4. **Mobile App**: React Native version
5. **Internationalization**: Multi-language support
6. **Email System**: Notifications & reminders

---

**Last Updated**: April 2, 2026
**Status**: Enterprise-Grade Demo Platform
