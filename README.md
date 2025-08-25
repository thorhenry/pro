# Champions League Football Website

A modern, responsive football league website built with HTML and JavaScript, featuring embedded CSS styles and comprehensive search functionality.

## Features

### 🏠 **Home Page**
- Welcome section with league branding
- Statistics dashboard showing teams, matches, completed and upcoming fixtures
- Recent fixtures preview

### 📅 **Fixtures Page**
- Complete list of all scheduled matches
- Match details including teams, date, time, venue, and status
- Visual indicators for match status (Scheduled/Completed)

### 📊 **Table Page**
- League standings with all team statistics
- Sortable by points (automatically sorted)
- Complete team performance metrics (Wins, Draws, Losses, Goals, etc.)

### 🏆 **Knockouts Page**
- All knockout stage matches organized by rounds:
  - Round of 16
  - Quarter Finals
  - Semi Finals
  - Final
- Match results and status for each stage

### ⚽ **Clubs Page**
- Individual club cards with detailed information
- Team statistics and performance metrics
- Country information and league position

### 🔍 **Global Search**
- Search across all content:
  - Teams (by name, country, logo)
  - Fixtures (by teams, venue)
  - Knockout matches (by teams)
- Real-time search results
- Click to navigate to relevant pages

## Technical Implementation

### CSS in JavaScript
- All styles are embedded within the JavaScript file
- Modern CSS with gradients, animations, and responsive design
- Glassmorphism effects and smooth transitions

### Page Navigation
- Single Page Application (SPA) architecture
- All pages handled as JavaScript cases:
  - `case 'home'`
  - `case 'fixtures'`
  - `case 'table'`
  - `case 'knockouts'`
  - `case 'clubs'`

### Responsive Design
- Mobile-first approach
- Hamburger menu for mobile devices
- Responsive grid layouts
- Optimized for all screen sizes

## How to Use

1. **Open `index.html`** in any modern web browser
2. **Navigate** using the top navigation menu
3. **Search** using the search bar at the top of the page
4. **Explore** different sections:
   - Click on navigation links to switch pages
   - Use the search to find specific teams or matches
   - Click on search results to navigate to relevant pages

## Sample Data

The website includes comprehensive data for:
- 20 custom teams with detailed information:
  - Phenom, Volts, Kenno, Mignon, Ghoht, Newton
  - Aka The Kraven, ThDrksid001, Its_Lyta23, Dav-Lil7
  - Emjay, Ghazi, Elton, Dandizzo, Offer Art
  - ThorVisual, Dyno, Yotah, Wato, Tonny
- Each team includes: stadium, manager, capacity, founding year, titles, colors, and short name
- Multiple fixtures with dates and venues
- Complete knockout stage structure (Round of 16, Quarter Finals, Semi Finals, Final)
- League table with full statistics and random performance data

## Browser Compatibility

- Chrome (recommended)
- Firefox
- Safari
- Edge
- Mobile browsers

## File Structure

```
Champions/
├── index.html          # Main HTML file
├── js/
│   └── script.js       # JavaScript with embedded CSS and all functionality
└── README.md          # This file
```

## Customization

To add more teams, fixtures, or modify the data:
1. Edit the `leagueData` object in `script.js`
2. Add new teams to the `teams` array
3. Add new fixtures to the `fixtures` array
4. Update knockout stages in the `knockouts` object

The website will automatically update to reflect any changes to the data structure.
