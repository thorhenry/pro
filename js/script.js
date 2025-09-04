// Embedded CSS Styles
const styles = `
    /* Page Loader */
    .page-loader {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(135deg, #1e3c72 0%, #2a5298 100%);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 9999;
        transition: opacity 0.5s ease-out;
    }
    
    .page-loader.hidden {
        opacity: 0;
        pointer-events: none;
    }
    
    .loader-content {
        text-align: center;
        color: white;
    }
    
    .loader-spinner {
        width: 80px;
        height: 80px;
        border: 4px solid rgba(255, 255, 255, 0.3);
        border-top: 4px solid #ffb600;
        border-radius: 50%;
        animation: spin 1s linear infinite;
        margin: 0 auto 20px;
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    
    .loader-logo {
        width: 40px;
        height: 40px;
        position: absolute;
        z-index: 2;
    }
    
    @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }
    
    .loader-text {
        font-size: 18px;
        font-weight: 600;
        letter-spacing: 1px;
        text-transform: uppercase;
    }
    
    /* Font face declarations */
    @font-face {
        font-family: 'EFootballStencil';
        src: url('fonts/efootball-stencil-regular.woff2') format('woff2'),
             url('fonts/efootball-stencil-regular.woff') format('woff'),
             url('fonts/efootball-stencil-regular.eot') format('embedded-opentype');
        font-weight: normal;
        font-style: normal;
        font-display: swap;
    }
    
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        background: linear-gradient(135deg, #1e3c72 0%, #2a5298 100%);
        color: #333;
        min-height: 100vh;
    }

    /* Navigation Styles */
    #navbar {
        background: rgba(0, 0, 0, 0.9);
        backdrop-filter: blur(10px);
        position: fixed;
        top: 0;
        width: 100%;
        z-index: 1000;
        box-shadow: 0 2px 20px rgba(0, 0, 0, 0.3);
    }

    .nav-container {
        max-width: 1200px;
        margin: 0 auto;
        padding: 0 20px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 70px;
    }

    .nav-logo {
        display: flex;
        align-items: center;
        font-size: 1.5rem;
        font-weight: bold;
        font-family: 'EFootballStencil', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        letter-spacing: 1px;
    }
    
    .nav-logo-text {
        display: flex;
        align-items: center;
        gap: 5px;
    }
    
    .nav-logo-pro {
        color: #ffffff;
        text-transform: uppercase;
    }
    
    .nav-logo-league {
        color: #ffb600;
        text-transform: uppercase;
    }

    .nav-logo i {
        margin-right: 10px;
        font-size: 2rem;
    }

    .nav-logo-img {
        width: 50px;
        height: 50px;
        margin-right: 10px;
    }

    .nav-menu {
        display: flex;
        list-style: none;
        gap: 30px;
    }

    .nav-link {
        color: white;
        text-decoration: none;
        font-weight: 500;
        transition: color 0.3s ease;
        padding: 10px 15px;
        border-radius: 5px;
    }

    .nav-link:hover {
        color: #ffb600;
        background: rgba(255, 182, 0, 0.1);
    }

    .nav-link.active {
        color: #ffb600;
        background: rgba(255, 182, 0, 0.2);
    }

    .mobile-nav {
        display: none;
        position: fixed;
        bottom: 0;
        left: 0;
        width: 100%;
        background: rgba(0, 0, 0, 0.9);
        backdrop-filter: blur(20px);
        border-top: 1px solid rgba(255, 255, 255, 0.2);
        z-index: 1000;
        padding: 10px 0;
    }

    .mobile-nav-items {
        display: flex;
        justify-content: space-around;
        align-items: center;
        list-style: none;
    }

    .mobile-nav-item {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-decoration: none;
        color: rgba(255, 255, 255, 0.7);
        transition: all 0.3s ease;
        padding: 8px 12px;
        border-radius: 10px;
    }

    .mobile-nav-item.active {
        color: #ffb600;
        background: rgba(255, 182, 0, 0.1);
    }

    .mobile-nav-item i {
        font-size: 1.2rem;
        margin-bottom: 4px;
    }

    .mobile-nav-item span {
        font-size: 0.8rem;
        font-weight: 500;
    }

    /* Search Styles */
    .search-container {
        margin-top: 90px;
        padding: 20px;
        display: flex;
        justify-content: center;
        position: relative;
    }

    .search-box {
        display: flex;
        max-width: 500px;
        width: 100%;
        background: white;
        border-radius: 50px;
        overflow: hidden;
        box-shadow: 0 5px 20px rgba(0, 0, 0, 0.2);
    }

    #mainsearch {
        flex: 1;
        padding: 15px 20px;
        border: none;
        outline: none;
        font-size: 16px;
    }

    #searchBtn {
        background: #ffd700;
        border: none;
        padding: 15px 20px;
        cursor: pointer;
        transition: background 0.3s ease;
    }

    #searchBtn:hover {
        background: #ffed4e;
    }

    .search-results {
        position: absolute;
        top: 100%;
        left: 50%;
        transform: translateX(-50%);
        width: 500px;
        max-height: 400px;
        overflow-y: auto;
        background: rgba(0, 0, 0, 0.9);
        border-radius: 10px;
        display: none;
        z-index: 1000;
        color: #ffffff;
        box-shadow: 0 5px 20px rgba(0, 0, 0, 0.5);
        backdrop-filter: blur(10px);
        border: 1px solid rgba(255, 255, 255, 0.2);
    }

    .search-result-item {
        padding: 15px 20px;
        border-bottom: 1px solid rgba(255, 255, 255, 0.2);
        cursor: pointer;
        transition: background 0.3s ease;
    }

    .search-result-item:hover {
        background: rgba(255, 255, 255, 0.1);
    }

    .search-result-item::after {
        content: "Click for details";
        position: absolute;
        top: 8px;
        right: 15px;
        background: #1e3c72;
        color: white;
        padding: 3px 6px;
        border-radius: 10px;
        font-size: 0.65rem;
        font-weight: bold;
    }

    .search-result-item {
        position: relative;
    }

    .search-result-item.team-result {
        padding: 20px;
        border-left: 4px solid #ffb600;
    }

    .search-result-item.team-result:hover {
        background: rgba(255, 255, 255, 0.15);
        border-left-color: #ffb600;
    }

    .search-result-item.team-result::after {
        content: "Click for details";
        position: absolute;
        top: 10px;
        right: 15px;
        background: #ffb600;
        color: #1e3c72;
        padding: 4px 8px;
        border-radius: 12px;
        font-size: 0.7rem;
        font-weight: bold;
    }

    .search-result-item.team-result {
        position: relative;
    }

    .search-result-item:last-child {
        border-bottom: none;
    }

    /* Detailed Page Styles */
    .detailed-header {
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        color: white;
        padding: 40px 30px;
        border-radius: 15px;
        margin-bottom: 30px;
        text-align: center;
    }

    .team-banner {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 30px;
        flex-wrap: wrap;
    }

    .team-logo-large {
        width: 120px;
        height: 120px;
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 3rem;
        font-weight: bold;
        color: white;
        text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
        object-fit: cover;
        border: 3px solid rgba(255, 255, 255, 0.3);
        transition: all 0.3s ease;
        box-shadow: 0 4px 16px rgba(0, 0, 0, 0.4);
    }
    
    .team-logo-large:hover {
        transform: scale(1.05);
        border-color: #ffb600;
        box-shadow: 0 6px 20px rgba(255, 182, 0, 0.5);
    }

    .team-info {
        text-align: left;
    }

    .team-name {
        font-size: 2.5rem;
        margin-bottom: 10px;
        text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
    }

    /* Smaller team names for fixture details */
    .fixture-teams-large .team-name,
    .knockout-teams-large .team-name {
        font-size: 0.9rem;
        margin-bottom: 3px;
        text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        max-width: 150px;
        text-align: center;
        font-weight: 500;
    }

    /* Smaller team logos for fixture details */
    .fixture-teams-large .team-logo-large,
    .knockout-teams-large .team-logo-large {
        width: 50px;
        height: 50px;
        font-size: 1.2rem;
        text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
        border: 2px solid rgba(255, 255, 255, 0.3);
        object-fit: cover;
    }

    /* Smaller team names and logos for team details page */
    .team-banner .team-name {
        font-size: 1.5rem;
        margin-bottom: 8px;
        text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
    }

    .team-banner .team-logo-large {
        width: 80px;
        height: 80px;
        font-size: 2rem;
        text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
    }

    .team-subtitle {
        font-size: 1.2rem;
        margin-bottom: 20px;
        opacity: 0.9;
    }

    .team-stats-overview {
        display: flex;
        gap: 15px;
        flex-wrap: wrap;
    }

    .stat-badge {
        background: rgba(255, 255, 255, 0.2);
        padding: 8px 15px;
        border-radius: 20px;
        font-size: 0.9rem;
        font-weight: 500;
    }

    .detailed-content {
        display: grid;
        gap: 30px;
    }

    .info-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        gap: 20px;
    }

    @media (max-width: 768px) {
        .info-grid {
            grid-template-columns: 1fr;
            gap: 15px;
        }
        
        .info-card {
            padding: 20px;
        }
        
        .detailed-header {
            padding: 30px 20px;
        }
        
        .team-banner {
            flex-direction: column;
            text-align: center;
            gap: 20px;
        }
        
        .team-info {
            text-align: center;
        }
        
        .team-stats-overview {
            justify-content: center;
        }

        .team-banner .team-name {
            font-size: 1.2rem;
            margin-bottom: 6px;
        }

        .team-banner .team-logo-large {
            width: 60px;
            height: 60px;
            font-size: 1.5rem;
        }
    }

    .info-card {
        background: rgba(255, 255, 255, 0.1);
        border-radius: 15px;
        padding: 25px;
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
        backdrop-filter: blur(10px);
        border: 1px solid rgba(255, 255, 255, 0.2);
    }

    .info-card h3 {
        color: #ffb600;
        font-size: 1.3rem;
        margin-bottom: 20px;
        border-bottom: 2px solid #ffb600;
        padding-bottom: 10px;
    }

    .info-item {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 10px 0;
        border-bottom: 1px solid #eee;
    }

    .info-item:last-child {
        border-bottom: none;
    }

    .label {
        font-weight: 600;
        color: rgba(255, 255, 255, 0.8);
    }

    .value {
        font-weight: 500;
        color: #ffffff;
    }

    .fixtures-section, .knockouts-section, .form-section, .performance-section {
        background: rgba(255, 255, 255, 0.1);
        border-radius: 15px;
        padding: 25px;
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
        backdrop-filter: blur(10px);
        border: 1px solid rgba(255, 255, 255, 0.2);
    }

    .fixtures-section h3, .knockouts-section h3, .form-section h3, .performance-section h3 {
        color: #ffb600;
        font-size: 1.3rem;
        margin-bottom: 20px;
        border-bottom: 2px solid #ffb600;
        padding-bottom: 10px;
    }

    /* Form Section Styles */
    .form-display {
        display: grid;
        gap: 20px;
    }

    .form-indicators {
        display: flex;
        gap: 10px;
        justify-content: center;
        flex-wrap: wrap;
    }

    .form-indicator {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: bold;
        font-size: 0.9rem;
        color: white;
    }

    .form-indicator.w {
        background: #28a745;
    }

    .form-indicator.d {
        background: #ffc107;
        color: #333;
    }

    .form-indicator.l {
        background: #dc3545;
    }

    .form-stats {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        gap: 15px;
    }

    .form-stat {
        background: rgba(255, 255, 255, 0.1);
        padding: 15px;
        border-radius: 10px;
        border-left: 4px solid #ffb600;
        backdrop-filter: blur(5px);
    }

    .form-stat .label {
        font-weight: 600;
        color: rgba(255, 255, 255, 0.8);
        display: block;
        margin-bottom: 5px;
    }

    .form-stat .value {
        font-weight: bold;
        color: #ffffff;
        font-size: 1.1rem;
    }

    /* Performance Section Styles */
    .performance-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        gap: 20px;
    }

    .performance-card {
        background: rgba(255, 255, 255, 0.1);
        border-radius: 10px;
        padding: 20px;
        border-left: 4px solid #ffb600;
        backdrop-filter: blur(5px);
    }

    .performance-card h4 {
        color: #ffb600;
        font-size: 1.1rem;
        margin-bottom: 15px;
        border-bottom: 1px solid rgba(255, 255, 255, 0.3);
        padding-bottom: 8px;
    }

    .performance-stats {
        display: grid;
        gap: 10px;
    }

    .perf-stat {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 8px 0;
        border-bottom: 1px solid #eee;
    }

    .perf-stat:last-child {
        border-bottom: none;
    }

    .perf-stat .label {
        font-weight: 500;
        color: rgba(255, 255, 255, 0.8);
    }

    .perf-stat .value {
        font-weight: bold;
        color: #ffffff;
    }

    .fixtures-list, .knockouts-list {
        display: grid;
        gap: 15px;
    }

    .fixture-item, .knockout-item {
        background: rgba(255, 255, 255, 0.1);
        border-radius: 10px;
        padding: 15px;
        border-left: 4px solid #ffb600;
        backdrop-filter: blur(5px);
    }

    .fixture-teams, .knockout-teams {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 10px;
        font-weight: 600;
    }

    .team-highlight {
        color: #1e3c72;
        font-weight: bold;
    }

    .fixture-details, .knockout-details {
        display: flex;
        justify-content: space-between;
        color: rgba(255, 255, 255, 0.8);
        font-size: 0.9rem;
        flex-wrap: wrap;
        gap: 10px;
    }

    @media (max-width: 768px) {
        .fixture-details, .knockout-details {
            flex-direction: column;
            align-items: flex-start;
            gap: 5px;
        }
    }

    .status {
        padding: 4px 8px;
        border-radius: 5px;
        font-size: 0.8rem;
        font-weight: 500;
    }

    .status.completed {
        background: #28a745;
        color: white;
    }

    .status.scheduled {
        background: #ffc107;
        color: #333;
    }

    .status.tbd {
        background: #6c757d;
        color: white;
    }

    .fixture-banner, .knockout-banner {
        text-align: center;
    }

    .fixture-teams-large, .knockout-teams-large {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 30px;
        margin-top: 20px;
        flex-wrap: wrap;
    }

    @media (max-width: 768px) {
        .fixture-teams-large, .knockout-teams-large {
            flex-direction: column;
            gap: 20px;
        }
        
        .team-side {
            text-align: center;
        }
        
        .fixture-vs, .knockout-vs {
            order: -1;
            margin-bottom: 10px;
        }

        .fixture-teams-large .team-name,
        .knockout-teams-large .team-name {
            font-size: 0.8rem;
            max-width: 120px;
        }

        .fixture-teams-large .team-logo-large,
        .knockout-teams-large .team-logo-large {
            width: 40px;
            height: 40px;
            font-size: 1rem;
        }

        .match-result {
            font-size: 0.7rem;
            padding: 3px 8px;
        }
    }

    .team-side {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 15px;
    }

    .fixture-vs, .knockout-vs {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 10px;
    }

    .vs-large {
        font-size: 2rem;
        font-weight: bold;
        text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
    }

    .fixture-date, .fixture-time {
        font-size: 1.1rem;
        opacity: 0.9;
    }

    .fixture-group {
        font-size: 0.9rem;
        color: #ffb600;
        margin-top: 5px;
        font-weight: bold;
    }

    .fixture-matchday {
        font-size: 0.9rem;
        color: rgba(255, 255, 255, 0.8);
        margin-top: 5px;
    }

    .round-title-large {
        font-size: 1.5rem;
        font-weight: bold;
        margin-bottom: 20px;
        text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
    }

    .match-status {
        font-size: 1rem;
        font-weight: 500;
    }

    /* Main Content Styles */
    #mainContent {
        max-width: 1200px;
        margin: 0 auto;
        padding: 0 20px;
        min-height: calc(100vh - 200px);
    }

    .page-container {
        background: transparent;
        border-radius: 15px;
        padding: 30px;
    }

    .page-title {
        color: #ffffff;
        font-size: 2.5rem;
        margin-bottom: 30px;
        text-align: center;
        border-bottom: 3px solid #ffb600;
        padding-bottom: 15px;
        text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
        font-family: 'EFootballStencil', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    }

    /* Home Page Styles */
    .hero-section {
        text-align: center;
        margin-bottom: 40px;
    }

    .hero-title {
        font-size: 3rem;
        color: #ffffff;
        margin-bottom: 20px;
        text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
        font-family: 'EFootballStencil', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    }

    .hero-subtitle {
        font-size: 1.2rem;
        color: #ffffff;
        margin-bottom: 30px;
        text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
    }

    .hero-actions {
        display: flex;
        gap: 15px;
        justify-content: center;
        flex-wrap: wrap;
        margin-top: 30px;
    }

    .hero-btn {
        padding: 12px 24px;
        border: none;
        border-radius: 25px;
        font-size: 1rem;
        font-weight: 600;
        cursor: pointer;
        transition: all 0.3s ease;
        display: flex;
        align-items: center;
        gap: 8px;
    }

    .hero-btn.primary {
        background: #ffb600;
        color: #1e3c72;
    }

    .hero-btn.primary:hover {
        background: #ffc233;
        transform: translateY(-2px);
        box-shadow: 0 5px 15px rgba(255, 182, 0, 0.3);
    }

    .hero-btn.secondary {
        background: rgba(255, 255, 255, 0.1);
        color: white;
        border: 2px solid rgba(255, 255, 255, 0.3);
    }

    .hero-btn.secondary:hover {
        background: rgba(255, 255, 255, 0.2);
        border-color: rgba(255, 255, 255, 0.5);
        transform: translateY(-2px);
    }

    .stats-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        gap: 20px;
        margin-bottom: 40px;
    }

    .stat-card {
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        color: white;
        padding: 25px;
        border-radius: 15px;
        text-align: center;
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
        transition: all 0.3s ease;
        position: relative;
        overflow: hidden;
    }

    .stat-card:hover {
        transform: translateY(-5px);
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
    }

    .stat-card::before {
        content: '';
        position: absolute;
        top: 0;
        left: -100%;
        width: 100%;
        height: 100%;
        background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
        transition: left 0.5s;
    }

    .stat-card:hover::before {
        left: 100%;
    }

    .stat-number {
        font-size: 2.5rem;
        font-weight: bold;
        margin-bottom: 10px;
    }

    .stat-label {
        font-size: 1.1rem;
        opacity: 0.9;
    }

    .stat-icon {
        position: absolute;
        top: 15px;
        right: 15px;
        font-size: 1.5rem;
        opacity: 0.7;
    }

    .home-sections-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
        gap: 30px;
        margin-bottom: 40px;
    }

    .home-section {
        background: rgba(255, 255, 255, 0.1);
        border-radius: 15px;
        padding: 25px;
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
        backdrop-filter: blur(10px);
        border: 1px solid rgba(255, 255, 255, 0.2);
    }

    .section-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 20px;
        padding-bottom: 10px;
        border-bottom: 2px solid rgba(255, 215, 0, 0.3);
    }

    .section-header h2 {
        color: #ffb600;
        font-size: 1.3rem;
        margin: 0;
        display: flex;
        align-items: center;
        gap: 10px;
    }

    .view-all-btn {
        background: rgba(255, 182, 0, 0.2);
        color: #ffb600;
        border: 1px solid rgba(255, 182, 0, 0.5);
        padding: 8px 16px;
        border-radius: 20px;
        font-size: 0.9rem;
        cursor: pointer;
        transition: all 0.3s ease;
    }

    .view-all-btn:hover {
        background: rgba(255, 182, 0, 0.3);
        transform: translateY(-1px);
    }

    .leaders-grid {
        display: grid;
        gap: 15px;
    }

    .leader-card {
        background: rgba(255, 255, 255, 0.05);
        border-radius: 10px;
        padding: 15px;
        border-left: 4px solid #ffb600;
        transition: all 0.3s ease;
    }

    .leader-card:hover {
        background: rgba(255, 255, 255, 0.1);
        transform: translateX(5px);
    }

    .leader-header {
        display: flex;
        align-items: center;
        gap: 15px;
        margin-bottom: 10px;
    }

    .leader-info h3 {
        color: white;
        margin: 0 0 5px 0;
        font-size: 1.1rem;
    }

    .group-badge {
        background: rgba(255, 182, 0, 0.2);
        color: #ffb600;
        padding: 3px 8px;
        border-radius: 10px;
        font-size: 0.8rem;
        font-weight: bold;
    }
    
    /* Qualification Ticker Styles */
    .qualification-ticker-section {
        background: rgba(255, 255, 255, 0.05);
        border-radius: 15px;
        padding: 30px;
        margin: 30px 0;
        border: 1px solid rgba(255, 255, 255, 0.1);
        backdrop-filter: blur(10px);
        overflow: hidden;
    }
    
    .qualification-status {
        background: rgba(40, 167, 69, 0.2);
        color: #28a745;
        padding: 8px 16px;
        border-radius: 20px;
        font-size: 0.9rem;
        font-weight: bold;
        border: 1px solid rgba(40, 167, 69, 0.3);
    }
    
    .ticker-container {
        width: 100%;
        overflow: hidden;
        position: relative;
        margin-top: 25px;
        background: rgba(255, 255, 255, 0.1);
        border-radius: 8px;
        padding: 15px 0;
    }
    
    .ticker-track {
        display: flex;
        align-items: center;
        animation: ticker-scroll 60s linear infinite;
        width: max-content;
        white-space: nowrap;
    }
    
    @keyframes ticker-scroll {
        0% {
            transform: translateX(0);
        }
        100% {
            transform: translateX(-50%);
        }
    }
    
    .ticker-track:hover {
        animation-play-state: paused;
    }
    
    .group-separator {
        color: #ffb600;
        font-size: 1.2rem;
        font-weight: bold;
        margin: 0 15px;
    }
    
    .group-label {
        color: #ffb600;
        font-size: 1rem;
        font-weight: bold;
        margin-right: 10px;
        text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
    }
    
    .team-qualifier {
        color: white;
        font-size: 0.95rem;
        margin: 0 8px;
        padding: 4px 8px;
        border-radius: 6px;
        transition: all 0.3s ease;
    }
    
    .team-qualifier.winner {
        background: rgba(255, 182, 0, 0.2);
        border: 1px solid rgba(255, 182, 0, 0.4);
    }
    
    .team-qualifier.runner-up {
        background: rgba(192, 192, 192, 0.2);
        border: 1px solid rgba(192, 192, 192, 0.4);
    }
    
    .team-qualifier.third {
        background: rgba(205, 127, 50, 0.2);
        border: 1px solid rgba(205, 127, 50, 0.4);
    }
    
    .team-qualifier.fourth {
        background: rgba(128, 128, 128, 0.2);
        border: 1px solid rgba(128, 128, 128, 0.4);
    }
    
    .team-qualifier.fifth {
        background: rgba(139, 69, 19, 0.2);
        border: 1px solid rgba(139, 69, 19, 0.4);
    }
    
    .team-qualifier.sixth {
        background: rgba(105, 105, 105, 0.2);
        border: 1px solid rgba(105, 105, 105, 0.4);
    }
    
    .team-qualifier.eliminated {
        background: rgba(220, 53, 69, 0.2);
        border: 1px solid rgba(220, 53, 69, 0.4);
    }
    
    .team-qualifier.third {
        background: rgba(255, 193, 7, 0.2);
        border: 1px solid rgba(255, 193, 7, 0.4);
    }
    
    .team-qualifier.fourth {
        background: rgba(108, 117, 125, 0.2);
        border: 1px solid rgba(108, 117, 125, 0.4);
    }
    
    .team-qualifier:hover {
        background: rgba(255, 255, 255, 0.15);
        transform: scale(1.05);
    }
    
    .position-badge {
        background: rgba(255, 255, 255, 0.2);
        color: white;
        padding: 2px 6px;
        border-radius: 4px;
        font-size: 0.75rem;
        font-weight: bold;
        margin-left: 5px;
    }
    
    .eliminated-badge {
        background: rgba(220, 53, 69, 0.8);
        color: white;
        padding: 2px 6px;
        border-radius: 4px;
        font-size: 0.65rem;
        font-weight: bold;
        margin-left: 8px;
        text-transform: uppercase;
        letter-spacing: 0.5px;
    }

    .leader-stats {
        display: flex;
        gap: 20px;
    }

    .leader-stats .stat {
        text-align: center;
    }

    .leader-stats .stat-value {
        display: block;
        font-size: 1.1rem;
        font-weight: bold;
        color: white;
    }

    .leader-stats .stat-label {
        display: block;
        font-size: 0.8rem;
        color: rgba(255, 255, 255, 0.7);
        margin-top: 2px;
    }

    .quick-nav-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
        gap: 15px;
    }

    .quick-nav-card {
        background: rgba(255, 255, 255, 0.05);
        border-radius: 10px;
        padding: 20px;
        text-align: center;
        transition: all 0.3s ease;
        border: 1px solid rgba(255, 255, 255, 0.1);
    }

    .quick-nav-card:hover {
        background: rgba(255, 255, 255, 0.1);
        transform: translateY(-3px);
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
    }

    .quick-nav-card i {
        font-size: 2rem;
        color: #ffb600;
        margin-bottom: 10px;
    }

    .quick-nav-card h3 {
        color: white;
        margin: 0 0 8px 0;
        font-size: 1.1rem;
    }

    .quick-nav-card p {
        color: rgba(255, 255, 255, 0.7);
        margin: 0;
        font-size: 0.9rem;
    }

    .no-data-message {
        text-align: center;
        padding: 40px 20px;
        color: rgba(255, 255, 255, 0.7);
    }

    .no-data-message i {
        font-size: 2rem;
        color: #ffb600;
        margin-bottom: 10px;
        display: block;
    }

    .no-data-message p {
        margin: 0;
        font-size: 1rem;
    }

    .match-divider {
        height: 1px;
        background: linear-gradient(90deg, transparent, rgba(255, 182, 0, 0.3), transparent);
        margin: 15px 0;
        border-radius: 1px;
    }

    /* Fixtures Styles */
    .fixtures-container {
        display: grid;
        gap: 20px;
    }

    .fixture-item {
        background: rgba(255, 255, 255, 0.05);
        border-radius: 8px;
        padding: 15px;
        border-left: 3px solid #ffb600;
        color: white;
        position: relative;
        margin-bottom: 10px;
        backdrop-filter: blur(10px);
        transition: all 0.3s ease;
    }

    /* Completed Match Styling */
    .fixture-item.completed {
        border-left: 4px solid #4CAF50;
        background: rgba(76, 175, 80, 0.1);
    }

    .fixture-item.completed .vs {
        color: #4CAF50;
        font-weight: bold;
        font-size: 1.1rem;
    }

    .fixture-item.completed .status-badge {
        background: #4CAF50;
        color: white;
    }

    /* Pending Match Styling */
    .fixture-item.pending {
        border-left: 4px solid #FF9800;
        background: rgba(255, 152, 0, 0.1);
    }

    .fixture-item.pending .vs {
        color: #FF9800;
        font-weight: bold;
    }

    .fixture-item.pending .status-badge {
        background: #FF9800;
        color: white;
    }

    /* Scheduled Match Styling */
    .fixture-item.scheduled {
        border-left: 4px solid #2196F3;
        background: rgba(33, 150, 243, 0.1);
    }

    .fixture-item.scheduled .vs {
        color: #2196F3;
        font-weight: bold;
    }

    .fixture-item.scheduled .status-badge {
        background: #2196F3;
        color: white;
    }

    /* Status Badge Styling */
    .status-badge {
        display: inline-flex;
        align-items: center;
        gap: 5px;
        padding: 4px 8px;
        border-radius: 12px;
        font-size: 0.8rem;
        font-weight: 600;
        text-transform: capitalize;
    }

    .status-badge i {
        font-size: 0.7rem;
    }

    /* Team Result Badge Styling */
    .result-badge {
        position: absolute;
        top: 10px;
        right: 10px;
        padding: 4px 12px;
        border-radius: 15px;
        font-size: 0.75rem;
        font-weight: bold;
        text-transform: uppercase;
        letter-spacing: 0.5px;
    }

    .result-badge.win {
        background: #4CAF50;
        color: white;
        box-shadow: 0 2px 8px rgba(76, 175, 80, 0.3);
    }

    .result-badge.loss {
        background: #F44336;
        color: white;
        box-shadow: 0 2px 8px rgba(244, 67, 54, 0.3);
    }

    .result-badge.draw {
        background: #FF9800;
        color: white;
        box-shadow: 0 2px 8px rgba(255, 152, 0, 0.3);
    }

    /* Team-specific fixture styling */
    .fixture-item.win {
        border-left: 4px solid #4CAF50;
        background: rgba(76, 175, 80, 0.15);
    }

    .fixture-item.loss {
        border-left: 4px solid #F44336;
        background: rgba(244, 67, 54, 0.15);
    }

    .fixture-item.draw {
        border-left: 4px solid #FF9800;
        background: rgba(255, 152, 0, 0.15);
    }

    /* Sorting Dropdowns */
    .sorting-dropdowns {
        background: rgba(255, 255, 255, 0.1);
        border-radius: 10px;
        padding: 15px;
        margin-bottom: 20px;
        backdrop-filter: blur(10px);
        border: 1px solid rgba(255, 255, 255, 0.2);
        display: flex;
        flex-wrap: wrap;
        gap: 15px;
        align-items: center;
    }

    .sort-category {
        display: flex;
        flex-direction: column;
        gap: 3px;
        min-width: 120px;
    }

    .sort-category h3 {
        color: #ffb600;
        font-size: 0.85rem;
        margin: 0;
        font-weight: 600;
    }

    .sort-dropdown {
        background: rgba(0, 0, 0, 0.7);
        border: 1px solid rgba(255, 255, 255, 0.3);
        border-radius: 5px;
        padding: 6px 10px;
        color: white;
        font-size: 0.8rem;
        cursor: pointer;
        transition: all 0.3s ease;
    }

    .sort-dropdown:hover {
        border-color: #ffb600;
        background: rgba(0, 0, 0, 0.8);
    }

    .sort-dropdown:focus {
        outline: none;
        border-color: #ffb600;
        box-shadow: 0 0 10px rgba(255, 182, 0, 0.3);
    }

    .sort-dropdown option {
        background: rgba(0, 0, 0, 0.9);
        color: white;
    }

    .filtered-fixtures {
        margin-bottom: 40px;
    }

    .no-matches-message {
        text-align: center;
        padding: 40px 20px;
        background: rgba(255, 255, 255, 0.05);
        border-radius: 10px;
        border: 1px solid rgba(255, 255, 255, 0.1);
        backdrop-filter: blur(10px);
    }

    .no-matches-message i {
        font-size: 3rem;
        color: #ffb600;
        margin-bottom: 15px;
        display: block;
    }

    .no-matches-message h3 {
        color: #ffb600;
        font-size: 1.2rem;
        margin: 0 0 10px 0;
    }

    .no-matches-message p {
        color: rgba(255, 255, 255, 0.8);
        font-size: 0.9rem;
        margin: 0;
    }

    .section-title {
        color: #ffb600;
        font-size: 1.5rem;
        margin: 30px 0 20px 0;
        padding-bottom: 10px;
        border-bottom: 2px solid rgba(255, 182, 0, 0.3);
    }

    /* Responsive Design for Sorting Dropdowns */
    @media (max-width: 768px) {
        .sorting-dropdowns {
            flex-direction: column;
            align-items: stretch;
            gap: 10px;
            padding: 12px;
        }
        
        .sort-category {
            min-width: auto;
        }
        
        .sort-dropdown {
            padding: 5px 8px;
            font-size: 0.75rem;
        }
        
        .sort-category h3 {
            font-size: 0.8rem;
        }
    }

    .group-section {
        margin-bottom: 40px;
        padding: 20px;
        background: rgba(255, 255, 255, 0.05);
        border-radius: 15px;
        border: 1px solid rgba(255, 255, 255, 0.1);
    }

    .group-title {
        color: #ffb600;
        font-size: 1.8rem;
        margin-bottom: 20px;
        text-align: center;
        text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
    }

    .matchday-badge {
        background: linear-gradient(135deg, #ffb600, #ffc233);
        color: #1e3c72;
        padding: 5px 12px;
        border-radius: 20px;
        font-size: 0.8rem;
        font-weight: bold;
        position: absolute;
        top: -10px;
        left: 20px;
        box-shadow: 0 2px 8px rgba(255, 182, 0, 0.3);
    }

    .group-table-section {
        margin-bottom: 40px;
    }

    .qualified {
        background: rgba(40, 167, 69, 0.2);
        border-left: 4px solid #28a745;
    }

    .qualified:hover {
        background: rgba(40, 167, 69, 0.3);
    }

    .fixture-teams {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 15px;
    }

    .team {
        display: flex;
        align-items: center;
        gap: 10px;
    }

    .team-logo {
        width: 40px;
        height: 40px;
        background: rgba(255, 255, 255, 0.1);
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: bold;
        color: #ffffff;
        text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
        object-fit: cover;
        border: 2px solid rgba(255, 255, 255, 0.3);
        transition: all 0.3s ease;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
    }
    
    .team-logo:hover {
        transform: scale(1.1);
        border-color: #ffb600;
        box-shadow: 0 4px 12px rgba(255, 182, 0, 0.4);
    }

    .vs {
        font-weight: bold;
        color: #ffffff;
        font-size: 1.2rem;
        text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
    }

    .fixture-details {
        display: flex;
        justify-content: space-between;
        color: #ffffff;
        font-size: 0.9rem;
        text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
    }

    /* Table Styles */
    .table-container {
        overflow-x: auto;
    }

    .league-table {
        width: 100%;
        border-collapse: collapse;
        color: white;
    }

    .league-table th {
        background: rgba(30, 60, 114, 0.8);
        color: white;
        padding: 15px;
        text-align: left;
        font-weight: 600;
    }

    .league-table td {
        padding: 12px 15px;
        border-bottom: 1px solid rgba(255, 255, 255, 0.2);
    }

    .league-table tr:hover {
        background: rgba(255, 255, 255, 0.1);
    }

    .team-row {
        display: flex;
        align-items: center;
        gap: 10px;
    }

    .position {
        font-weight: bold;
        color: #ffffff;
        min-width: 30px;
        text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
    }

    /* Clubs Styles */
    .clubs-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
        gap: 25px;
    }

    .club-card {
        background: rgba(255, 255, 255, 0.1);
        border-radius: 15px;
        overflow: hidden;
        transition: all 0.3s ease;
        color: white;
        position: relative;
    }

    .club-card:hover {
        transform: translateY(-5px);
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
    }

    .club-header {
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        color: white;
        padding: 20px;
        text-align: center;
    }

    .club-logo {
        width: 60px;
        height: 60px;
        background: rgba(255, 255, 255, 0.1);
        border-radius: 50%;
        margin: 0 auto 10px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.5rem;
        font-weight: bold;
        color: #ffffff;
        text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
        object-fit: contain;
    }

    /* Handle the wrapper div from getTeamLogo function */
    .club-header > div:first-child {
        margin: 0 auto 10px;
        display: flex;
        justify-content: center;
    }

    .club-name {
        font-size: 1.2rem;
        font-weight: bold;
        margin-bottom: 5px;
    }

    .club-group {
        opacity: 0.9;
        font-size: 0.9rem;
        background: rgba(255, 255, 255, 0.2);
        padding: 4px 12px;
        border-radius: 12px;
        display: inline-block;
    }

    .club-overview {
        padding: 20px;
    }

    .club-stats-row {
        display: flex;
        justify-content: space-between;
        margin-bottom: 15px;
        gap: 10px;
    }

    .club-stat {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        flex: 1;
    }

    .stat-label {
        font-size: 0.8rem;
        opacity: 0.8;
        margin-bottom: 4px;
    }

    .stat-value {
        font-size: 1rem;
        font-weight: bold;
    }

    .stat-value.positive {
        color: #28a745;
    }

    .stat-value.negative {
        color: #dc3545;
    }

    .club-info {
        margin-top: 15px;
        padding-top: 15px;
        border-top: 1px solid rgba(255, 255, 255, 0.2);
    }

    .club-info-item {
        display: flex;
        align-items: center;
        gap: 8px;
        margin-bottom: 8px;
        font-size: 0.9rem;
        opacity: 0.9;
    }

    .club-info-item i {
        width: 16px;
        color: #ffb600;
    }

    .click-indicator {
        background: rgba(255, 182, 0, 0.1);
        padding: 12px;
        text-align: center;
        border-top: 1px solid rgba(255, 182, 0, 0.3);
        font-size: 0.9rem;
        color: #ffb600;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 8px;
    }

    .click-indicator i {
        font-size: 0.8rem;
    }

    /* Match Details Styles */
    .team-group {
        opacity: 0.9;
        font-size: 0.9rem;
        background: rgba(255, 255, 255, 0.2);
        padding: 4px 12px;
        border-radius: 12px;
        display: inline-block;
        margin-top: 5px;
    }

    .fixture-status {
        margin-top: 10px;
        padding: 8px 16px;
        border-radius: 20px;
        font-weight: bold;
        text-align: center;
    }

    .fixture-status.completed {
        background: rgba(40, 167, 69, 0.2);
        color: #28a745;
        border: 1px solid #28a745;
    }

    .fixture-status.scheduled {
        background: rgba(255, 193, 7, 0.2);
        color: #ffc107;
        border: 1px solid #ffc107;
    }

    .fixture-status.pending {
        background: rgba(220, 53, 69, 0.2);
        color: #dc3545;
        border: 1px solid #dc3545;
    }

    .match-leg {
        margin-top: 8px;
        padding: 6px 12px;
        background: rgba(255, 182, 0, 0.2);
        color: #ffb600;
        border-radius: 15px;
        font-size: 0.9rem;
        font-weight: bold;
    }

    .penalties-display {
        margin-top: 8px;
        padding: 6px 12px;
        background: rgba(255, 182, 0, 0.3);
        color: #ffb600;
        border-radius: 15px;
        font-size: 0.9rem;
        font-weight: bold;
        border: 1px solid #ffb600;
    }

    .value.positive {
        color: #28a745;
        font-weight: bold;
    }

    .value.negative {
        color: #dc3545;
        font-weight: bold;
    }

    /* Match Result Indicators */
    .match-result {
        margin-top: 8px;
        padding: 4px 12px;
        border-radius: 15px;
        font-size: 0.8rem;
        font-weight: bold;
        text-align: center;
        text-transform: uppercase;
        letter-spacing: 0.5px;
    }

    .match-result.win {
        background: rgba(40, 167, 69, 0.3);
        color: #28a745;
        border: 1px solid #28a745;
    }

    .match-result.draw {
        background: rgba(255, 193, 7, 0.3);
        color: #ffc107;
        border: 1px solid #ffc107;
    }

    .match-result.loss {
        background: rgba(220, 53, 69, 0.3);
        color: #dc3545;
        border: 1px solid #dc3545;
    }

    /* Tournament Bracket Visualization */
    .brackets-visualization {
        background: rgba(255, 255, 255, 0.05);
        border-radius: 15px;
        padding: 30px;
        margin-bottom: 30px;
        border: 1px solid rgba(255, 255, 255, 0.1);
        backdrop-filter: blur(10px);
    }
    
    .brackets-header {
        text-align: center;
        margin-bottom: 25px;
    }
    
    .brackets-header h2 {
        color: #ffb600;
        font-size: 2rem;
        margin-bottom: 10px;
        font-family: 'EFootballStencil', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        letter-spacing: 1px;
    }
    
    .brackets-header p {
        color: rgba(255, 255, 255, 0.8);
        font-size: 1.1rem;
        margin: 0;
    }
    
    .brackets-container {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 20px;
        background: rgba(0, 0, 0, 0.2);
        border-radius: 10px;
        border: 1px solid rgba(255, 255, 255, 0.1);
    }
    
    .brackets-svg {
        max-width: 100%;
        height: auto;
        filter: drop-shadow(0 4px 8px rgba(0, 0, 0, 0.3));
        transition: transform 0.3s ease;
    }
    
    .brackets-svg:hover {
        transform: scale(1.02);
    }
    
    /* Responsive Design for Brackets */
    @media (max-width: 768px) {
        .brackets-visualization {
            padding: 20px;
            margin-bottom: 20px;
        }
        
        .brackets-header h2 {
            font-size: 1.5rem;
        }
        
        .brackets-header p {
            font-size: 1rem;
        }
        
        .brackets-container {
            padding: 15px;
        }
    }
    
    @media (max-width: 480px) {
        .brackets-visualization {
            padding: 15px;
        }
        
        .brackets-header h2 {
            font-size: 1.3rem;
        }
        
        .brackets-container {
            padding: 10px;
        }
    }
    
    /* Knockout Tabs Styles */
    .knockout-tabs {
        display: flex;
        gap: 10px;
        margin-bottom: 30px;
        border-bottom: 2px solid rgba(255, 215, 0, 0.3);
        padding-bottom: 10px;
    }

    .tab-button {
        background: rgba(255, 255, 255, 0.1);
        border: 1px solid rgba(255, 255, 255, 0.2);
        color: white;
        padding: 12px 20px;
        border-radius: 8px 8px 0 0;
        cursor: pointer;
        transition: all 0.3s ease;
        font-size: 1rem;
        font-weight: 500;
        display: flex;
        align-items: center;
        gap: 8px;
    }

    .tab-button:hover {
        background: rgba(255, 255, 255, 0.2);
        border-color: rgba(255, 215, 0, 0.5);
    }

    .tab-button.active {
        background: rgba(255, 182, 0, 0.2);
        border-color: #ffb600;
        color: #ffb600;
        font-weight: bold;
    }

    .tab-content {
        display: none;
    }

    .tab-content.active {
        display: block;
    }

    /* Tournament Bracket Styles */
    .tournament-bracket {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        gap: 20px;
        padding: 20px;
        background: rgba(255, 255, 255, 0.05);
        border-radius: 15px;
        border: 1px solid rgba(255, 255, 255, 0.1);
        overflow-x: auto;
    }

    .bracket-round {
        display: flex;
        flex-direction: column;
        align-items: center;
        min-width: 200px;
    }

    .round-label {
        color: #ffb600;
        font-size: 1.1rem;
        font-weight: bold;
        margin-bottom: 20px;
        text-align: center;
        text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
    }

    .bracket-matches {
        display: flex;
        flex-direction: column;
        gap: 15px;
        width: 100%;
    }

    .bracket-match {
        background: rgba(255, 255, 255, 0.1);
        border-radius: 8px;
        padding: 10px;
        border: 1px solid rgba(255, 255, 255, 0.2);
        position: relative;
        min-height: 80px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
    }

    .bracket-match.completed {
        border-color: #28a745;
        background: rgba(40, 167, 69, 0.1);
    }

    .bracket-match.scheduled {
        border-color: #ffc107;
        background: rgba(255, 193, 7, 0.1);
    }

    .bracket-team {
        display: flex;
        align-items: center;
        gap: 8px;
        padding: 5px;
        border-radius: 5px;
        transition: all 0.3s ease;
    }

    .bracket-team.winner {
        background: rgba(255, 182, 0, 0.2);
        border: 1px solid #ffb600;
        font-weight: bold;
    }

    .bracket-team .team-name {
        flex: 1;
        color: white;
        font-size: 0.9rem;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    .bracket-team .score {
        background: rgba(255, 255, 255, 0.2);
        color: white;
        padding: 2px 6px;
        border-radius: 10px;
        font-weight: bold;
        font-size: 0.8rem;
        min-width: 20px;
        text-align: center;
    }

    .penalties-indicator {
        position: absolute;
        top: -5px;
        right: -5px;
        background: #ffb600;
        color: #1e3c72;
        padding: 2px 6px;
        border-radius: 10px;
        font-size: 0.7rem;
        font-weight: bold;
    }

    .partial-result {
        position: absolute;
        bottom: -5px;
        left: 50%;
        transform: translateX(-50%);
        background: rgba(255, 193, 7, 0.9);
        color: #1e3c72;
        padding: 2px 8px;
        border-radius: 10px;
        font-size: 0.6rem;
        font-weight: bold;
        white-space: nowrap;
    }

    .leg-results {
        position: absolute;
        bottom: -5px;
        left: 50%;
        transform: translateX(-50%);
        background: rgba(40, 167, 69, 0.9);
        color: white;
        padding: 2px 8px;
        border-radius: 10px;
        font-size: 0.6rem;
        font-weight: bold;
        white-space: nowrap;
    }

    /* Knockouts Styles */
    .knockout-container {
        display: flex;
        flex-direction: column;
        gap: 30px;
        margin: 0;
        padding: 0;
    }
    
    .round-card {
        padding: 25px;
        color: white;
        margin: 0;
    }
    
    .tie-container {
        padding: 20px;
        margin-bottom: 25px;
        width: 100%;
        margin-left: 0;
        margin-right: 0;
    }

    .round-card {
        padding: 25px;
        color: white;
    }

    .round-title {
        color: #ffffff;
        font-size: 1.5rem;
        margin-bottom: 20px;
        text-align: center;
        border-bottom: 2px solid #ffb600;
        padding-bottom: 10px;
        text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
    }

    .match-card {
        background: rgba(255, 255, 255, 0.05);
        border-radius: 10px;
        padding: 5px;
        margin-bottom: 15px;
        border-left: 4px solid #ffb600;
        color: white;
        position: relative;
        width: 100%;
        box-sizing: border-box;
    }

    .tie-container {
        padding: 2px;
        margin-bottom: 25px;
        width: 100%;
    }

    .tie-title {
        color: #fff;
        font-size: 1.2rem;
        font-weight: bold;
        margin-bottom: 15px;
        text-align: center;
        background: linear-gradient(45deg, #ff6b6b, #4ecdc4);
        padding: 8px 16px;
        border-radius: 20px;
        display: inline-block;
        margin-left: 50%;
        transform: translateX(-50%);
    }

    .leg-badge {
        position: absolute;
        top: 10px;
        right: 10px;
        padding: 4px 8px;
        border-radius: 12px;
        font-size: 0.7rem;
        font-weight: bold;
        text-transform: uppercase;
    }

    .leg-badge.1st {
        background: #4ecdc4;
        color: #000;
    }

    .leg-badge.2nd {
        background: #ff6b6b;
        color: #fff;
    }

    .penalties {
        font-size: 0.8rem;
        color: #ffb600;
        font-weight: bold;
        margin-top: 5px;
        text-align: center;
    }
    
    /* Team Logo Type Styling */
    .team-logo.owner-picture {
        object-fit: cover;
        border: 2px solid rgba(255, 255, 255, 0.3);
    }
    
    .team-logo.club-badge {
        object-fit: contain;
        border: 2px solid rgba(255, 182, 0, 0.4);
        background: rgba(255, 182, 0, 0.1);
    }
    
    .team-logo.club-badge:hover {
        border-color: #ffb600;
        background: rgba(255, 182, 0, 0.2);
    }

    /* Footer Styles */
    .footer {
        background: rgba(0, 0, 0, 0.9);
        color: white;
        text-align: center;
        padding: 20px;
        margin-top: 50px;
    }

    /* Responsive Design */
    @media (max-width: 768px) {
        .nav-menu {
            display: none;
        }

        .mobile-nav {
            display: block;
        }

        #mainContent {
            padding-bottom: 80px;
        }

        .search-box {
            max-width: 98%;
        }

        .search-results {
            width: 98%;
        }

        .hero-title {
            font-size: 2rem;
            font-family: 'EFootballStencil', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }

        .hero-actions {
            flex-direction: column;
            align-items: center;
        }

        .hero-btn {
            width: 100%;
            max-width: 250px;
            justify-content: center;
        }

        .page-title {
            font-size: 2rem;
            font-family: 'EFootballStencil', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }

        .home-sections-grid {
            grid-template-columns: 1fr;
            gap: 20px;
        }

        .home-section {
            padding: 20px;
        }

        .section-header {
            flex-direction: column;
            gap: 10px;
            align-items: flex-start;
        }

        .leaders-grid {
            grid-template-columns: 1fr;
        }

        .leader-stats {
            flex-direction: column;
            gap: 10px;
        }

        .quick-nav-grid {
            grid-template-columns: repeat(2, 1fr);
        }

        .stats-grid {
            grid-template-columns: 1fr;
            gap: 15px;
        }
        
        .qualification-ticker-section {
            padding: 20px;
            margin: 20px 0;
        }
        
        .ticker-track {
            animation-duration: 40s;
        }
        
        .ticker-container {
            padding: 12px 0;
        }
        
        .group-separator {
            margin: 0 10px;
        }
        
        .team-qualifier {
            margin: 0 5px;
            padding: 3px 6px;
            font-size: 0.9rem;
        }

        .clubs-grid {
            grid-template-columns: 1fr;
            gap: 20px;
        }

        .fixtures-container {
            gap: 15px;
        }

        .fixture-card {
            padding: 15px;
            margin: 0 5px;
        }

        .fixture-teams {
            flex-direction: column;
            gap: 10px;
            text-align: center;
        }

        .fixture-details {
            flex-direction: column;
            gap: 5px;
            text-align: center;
        }

        .knockout-container {
            grid-template-columns: 1fr;
            gap: 20px;
        }

        .round-card {
            padding: 20px;
            margin: 0 5px;
        }

        .match-card {
            margin-bottom: 10px;
        }

        .table-container {
            margin: 0 5px;
        }

        .league-table {
            font-size: 0.9rem;
        }

        .league-table th,
        .league-table td {
            padding: 8px 5px;
        }

        .team-logo {
            width: 35px;
            height: 35px;
            font-size: 0.8rem;
            border: 1px solid rgba(255, 255, 255, 0.3);
        }

        .club-logo {
            width: 60px;
            height: 60px;
            font-size: 1.5rem;
        }

        .nav-logo-img {
            width: 40px;
            height: 40px;
        }

        .club-stats-row {
            flex-direction: column;
            gap: 8px;
        }

        .club-stat {
            flex-direction: row;
            justify-content: space-between;
            text-align: left;
        }

        .club-info {
            margin-top: 10px;
            padding-top: 10px;
        }

        .club-info-item {
            font-size: 0.8rem;
        }

        .click-indicator {
            padding: 10px;
            font-size: 0.8rem;
        }

        #mainContent {
            padding: 0 5px;
        }

        .page-container {
            padding: 20px 5px;
        }
        
        .knockout-container {
            margin: 0;
            padding: 0;
        }
        
        .round-card {
            margin: 0;
            padding: 25px 0;
        }
        
        .tie-container {
            margin-left: 0;
            margin-right: 0;
            padding: 20px 0;
        }

        /* Mobile Tab Styles */
        .knockout-tabs {
            flex-direction: column;
            gap: 5px;
        }

        .tab-button {
            padding: 10px 15px;
            font-size: 0.9rem;
            border-radius: 8px;
        }

        /* Mobile Tournament Bracket Styles */
        .tournament-bracket {
            flex-direction: column;
            gap: 15px;
            padding: 15px;
        }

        .bracket-round {
            min-width: auto;
            width: 100%;
        }

        .bracket-matches {
            gap: 10px;
        }

        .bracket-match {
            min-height: 60px;
            padding: 8px;
        }

        .bracket-team .team-name {
            font-size: 0.8rem;
        }

        .bracket-team .score {
            font-size: 0.7rem;
            padding: 1px 4px;
        }

        .round-label {
            font-size: 1rem;
            margin-bottom: 15px;
        }
    }
`;

// Inject CSS into the document
const styleSheet = document.createElement("style");
styleSheet.textContent = styles;
document.head.appendChild(styleSheet);

// Teams Data
const teamsData = {
    'phenom': {
        name: 'Phenom',
        stadium: 'Phenom Arena',
        manager: 'Phenom Manager',
        capacity: 50000,
        founded: 2023,
        titles: 0,
        colors: ['#1a237e', '#90caf9'],
        shortName: 'PHE',
        logo: 'PHE'
    },
    'volts': {
        name: 'Volts',
        stadium: 'Volts Stadium',
        manager: 'Volts Manager',
        capacity: 48000,
        founded: 2023,
        titles: 0,
        colors: ['#ff6f00', '#ffcc02'],
        shortName: 'VOL',
        logo: 'VOL'
    },
    'kenno': {
        name: 'Kenno',
        stadium: 'Kenno Ground',
        manager: 'Kenno Manager',
        capacity: 42000,
        founded: 2023,
        titles: 0,
        colors: ['#2e7d32', '#81c784'],
        shortName: 'KEN',
        logo: 'KEN'
    },
    'mignon': {
        name: 'Mignon',
        stadium: 'Mignon Park',
        manager: 'Mignon Manager',
        capacity: 46000,
        founded: 2023,
        titles: 0,
        colors: ['#c2185b', '#f8bbd9'],
        shortName: 'MIG',
        logo: 'MIG'
    },
    'ghost': {
        name: 'Ghost',
        stadium: 'Ghost Arena',
        manager: 'Ghost Manager',
        capacity: 44000,
        founded: 2023,
        titles: 0,
        colors: ['#424242', '#9e9e9e'],
        shortName: 'GHO',
        logo: 'GHO'
    },
    'newton': {
        name: 'Newton',
        stadium: 'Newton Stadium',
        manager: 'Newton Manager',
        capacity: 52000,
        founded: 2023,
        titles: 0,
        colors: ['#1565c0', '#64b5f6'],
        shortName: 'NEW',
        logo: 'NEW'
    },
    'maria': {
        name: 'Aka The Kraven',
        stadium: 'Holy Stadium',
        manager: 'Mariakhan',
        capacity: 45000,
        founded: 2023,
        titles: 0,
        colors: ['#1a237e', '#90caf9'],
        shortName: 'AFC',
        logo: 'AFC'
    },
    'thDrksid': {
        name: 'ThDrksid',
        stadium: 'Dark Side Arena',
        manager: 'Dark Manager',
        capacity: 47000,
        founded: 2023,
        titles: 0,
        colors: ['#000000', '#ffffff'],
        shortName: 'DARK',
        logo: 'DARK'
    },
    'its_lyta23': {
        name: 'Its_Lyta23',
        stadium: 'Lyta Stadium',
        manager: 'Lyta Manager',
        capacity: 43000,
        founded: 2023,
        titles: 0,
        colors: ['#6a1b9a', '#ce93d8'],
        shortName: 'LYT',
        logo: 'LYT'
    },
    'dav_lil7': {
        name: 'Dav-Lil7',
        stadium: 'Dav Stadium',
        manager: 'Dav Manager',
        capacity: 41000,
        founded: 2023,
        titles: 0,
        colors: ['#d84315', '#ffab91'],
        shortName: 'DAV',
        logo: 'DAV'
    },
    'emjay': {
        name: 'Emjay',
        stadium: 'Emjay Arena',
        manager: 'Emjay Manager',
        capacity: 46000,
        founded: 2023,
        titles: 0,
        colors: ['#0277bd', '#4fc3f7'],
        shortName: 'EMJ',
        logo: 'EMJ'
    },
    'ghazi': {
        name: 'Ghazi',
        stadium: 'Ghazi Ground',
        manager: 'Ghazi Manager',
        capacity: 44000,
        founded: 2023,
        titles: 0,
        colors: ['#388e3c', '#66bb6a'],
        shortName: 'GHA',
        logo: 'GHA'
    },
    'elton': {
        name: 'Elton',
        stadium: 'Elton Park',
        manager: 'Elton Manager',
        capacity: 48000,
        founded: 2023,
        titles: 0,
        colors: ['#f57c00', '#ffb74d'],
        shortName: 'ELT',
        logo: 'ELT'
    },
    'dandizzo': {
        name: 'Dandizzo',
        stadium: 'Dandizzo Arena',
        manager: 'Dandizzo Manager',
        capacity: 42000,
        founded: 2023,
        titles: 0,
        colors: ['#7b1fa2', '#ba68c8'],
        shortName: 'DAN',
        logo: 'DAN'
    },
    'offer_art': {
        name: 'Offer Art',
        stadium: 'Art Stadium',
        manager: 'Art Manager',
        capacity: 45000,
        founded: 2023,
        titles: 0,
        colors: ['#e65100', '#ff8a65'],
        shortName: 'ART',
        logo: 'ART'
    },
    'thorvisual': {
        name: 'ThorVisual',
        stadium: 'Thor Arena',
        manager: 'Thor Manager',
        capacity: 50000,
        founded: 2023,
        titles: 0,
        colors: ['#0d47a1', '#42a5f5'],
        shortName: 'THOR',
        logo: 'THOR'
    },
    'dyno': {
        name: 'Dyno',
        stadium: 'Dyno Stadium',
        manager: 'Dyno Manager',
        capacity: 46000,
        founded: 2023,
        titles: 0,
        colors: ['#bf360c', '#ff7043'],
        shortName: 'DYN',
        logo: 'DYN'
    },
    'yotah': {
        name: 'Yotah',
        stadium: 'Yotah Ground',
        manager: 'Yotah Manager',
        capacity: 43000,
        founded: 2023,
        titles: 0,
        colors: ['#4a148c', '#ab47bc'],
        shortName: 'YOT',
        logo: 'YOT'
    },
    'wato': {
        name: 'Wato',
        stadium: 'Wato Park',
        manager: 'Wato Manager',
        capacity: 44000,
        founded: 2023,
        titles: 0,
        colors: ['#1b5e20', '#4caf50'],
        shortName: 'WAT',
        logo: 'WAT'
    },
    'tonny': {
        name: 'Tonny',
        stadium: 'Tonny Arena',
        manager: 'Tonny Manager',
        capacity: 47000,
        founded: 2023,
        titles: 0,
        colors: ['#b71c1c', '#ef5350'],
        shortName: 'TON',
        logo: 'TON'
    }
};

// Group stage data - Just team names and short names
const groupData = {
    groupA: [
        { id: 'dav_lil7', name: 'Dav-Lil7', shortName: 'DAV' },
        { id: 'dandizzo', name: 'Dandizzo', shortName: 'DAN' },
        { id: 'its_lyta23', name: 'Its_Lyta23', shortName: 'LYT' },
        { id: 'volts', name: 'Volts', shortName: 'VOL' },
        { id: 'ghost', name: 'ghost', shortName: 'GHO' }
    ],
    groupB: [
        { id: 'phenom', name: 'Phenom', shortName: 'PHE' },
        { id: 'elton', name: 'Elton', shortName: 'ELT' },
        { id: 'dyno', name: 'Dyno', shortName: 'DYN' },
        { id: 'ghazi', name: 'Ghazi', shortName: 'GHA' },
        { id: 'tonny', name: 'Tonny', shortName: 'TON' }
    ],
    groupC: [
        { id: 'newton', name: 'Newton', shortName: 'NEW' },
        { id: 'yotah', name: 'Yotah', shortName: 'YOT' },
        { id: 'kenno', name: 'Kenno', shortName: 'KEN' },
        { id: 'offer_art', name: 'Offer Art', shortName: 'OFF' },
        { id: 'emjay', name: 'Emjay', shortName: 'EMJ' }
    ],
    groupD: [
        { id: 'mignon', name: 'Mignon', shortName: 'MIG' },
        { id: 'wato', name: 'Wato', shortName: 'WAT' },
        { id: 'thorvisual', name: 'ThorVisual', shortName: 'THO' },
        { id: 'thDrksid', name: 'ThDrksid', shortName: 'DARK' },
        { id: 'maria', name: 'Aka The Kraven', shortName: 'AFC' }
    ]
};

// Group stage fixtures - Each group has maximum 4 matchdays
const groupFixtures = [
    // Group A - Matchday 1 (August 26, 2025)
    { id: 'GA1', group: 'A', matchday: 1, date: '2025-08-26', time: '20:00', homeTeam: 'dav_lil7', awayTeam: 'dandizzo', status: 'completed', score: { home: 1, away: 2 } },
    { id: 'GA2', group: 'A', matchday: 1, date: '2025-08-26', time: '22:00', homeTeam: 'dandizzo', awayTeam: 'dav_lil7', status: 'completed', score: { home: 1, away: 2 } },
    { id: 'GA3', group: 'A', matchday: 1, date: '2025-08-26', time: '20:00', homeTeam: 'its_lyta23', awayTeam: 'volts', status: 'completed', score: { home: 3, away: 0 } },
    { id: 'GA4', group: 'A', matchday: 1, date: '2025-08-26', time: '22:00', homeTeam: 'volts', awayTeam: 'its_lyta23', status: 'completed', score: { home: 0, away: 2 } },
    { id: 'GA5', group: 'A', matchday: 1, date: '2025-08-26', time: '20:00', homeTeam: 'ghost', awayTeam: 'dav_lil7', status: 'completed', score: { home: 0, away: 1 } },
    { id: 'GA6', group: 'A', matchday: 1, date: '2025-08-26', time: '22:00', homeTeam: 'dav_lil7', awayTeam: 'ghost', status: 'completed', score: { home: 2, away: 0 } },

    // Group A - Matchday 2 (August 27, 2025)
    { id: 'GA7', group: 'A', matchday: 2, date: '2025-08-27', time: '20:00', homeTeam: 'dandizzo', awayTeam: 'its_lyta23', status: 'completed', score: { home: 0, away: 1 } },
    { id: 'GA8', group: 'A', matchday: 2, date: '2025-08-27', time: '22:00', homeTeam: 'its_lyta23', awayTeam: 'dandizzo', status: 'completed', score: { home: 1, away: 0 } },
    { id: 'GA9', group: 'A', matchday: 2, date: '2025-08-27', time: '20:00', homeTeam: 'volts', awayTeam: 'ghost', status: 'completed', score: { home: 2, away: 5 } },
    { id: 'GA10', group: 'A', matchday: 2, date: '2025-08-27', time: '22:00', homeTeam: 'ghost', awayTeam: 'volts', status: 'completed', score: { home: 3, away: 3 } },

    // Group A - Matchday 3 (August 28, 2025)
    { id: 'GA11', group: 'A', matchday: 3, date: '2025-08-28', time: '20:00', homeTeam: 'dav_lil7', awayTeam: 'volts', status: 'completed', score: { home: 1, away: 3 } },
    { id: 'GA12', group: 'A', matchday: 3, date: '2025-08-28', time: '22:00', homeTeam: 'volts', awayTeam: 'dav_lil7', status: 'completed', score: { home: 0, away: 2 } },
    { id: 'GA13', group: 'A', matchday: 3, date: '2025-08-28', time: '20:00', homeTeam: 'dandizzo', awayTeam: 'ghost', status: 'completed', score: { home: 0, away: 5 } },
    { id: 'GA14', group: 'A', matchday: 3, date: '2025-08-28', time: '22:00', homeTeam: 'ghost', awayTeam: 'dandizzo', status: 'completed', score: { home: 4, away: 4 } },
    { id: 'GA15', group: 'A', matchday: 3, date: '2025-08-28', time: '20:00', homeTeam: 'its_lyta23', awayTeam: 'dav_lil7', status: 'completed', score: { home: 1, away: 3 } },
    { id: 'GA16', group: 'A', matchday: 3, date: '2025-08-28', time: '22:00', homeTeam: 'dav_lil7', awayTeam: 'its_lyta23', status: 'completed', score: { home: 2, away: 2 } },

    // Group A - Matchday 4 (August 29, 2025)
    { id: 'GA17', group: 'A', matchday: 4, date: '2025-08-29', time: '20:00', homeTeam: 'dandizzo', awayTeam: 'volts', status: 'completed', score: { home: 2, away: 1 } },
    { id: 'GA18', group: 'A', matchday: 4, date: '2025-08-29', time: '22:00', homeTeam: 'volts', awayTeam: 'dandizzo', status: 'completed', score: { home: 2, away: 1 } },
    { id: 'GA19', group: 'A', matchday: 4, date: '2025-08-29', time: '20:00', homeTeam: 'its_lyta23', awayTeam: 'ghost', status: 'completed', score: { home: 2, away: 5 } },
    { id: 'GA20', group: 'A', matchday: 4, date: '2025-08-29', time: '22:00', homeTeam: 'ghost', awayTeam: 'its_lyta23', status: 'completed', score: { home: 1, away: 2 } },

    // Group B - Matchday 1 (August 26, 2025)
    { id: 'GB1', group: 'B', matchday: 1, date: '2025-08-26', time: '20:00', homeTeam: 'phenom', awayTeam: 'elton', status: 'completed', score: { home: 5, away: 1 } },
    { id: 'GB2', group: 'B', matchday: 1, date: '2025-08-26', time: '22:00', homeTeam: 'elton', awayTeam: 'phenom', status: 'completed', score: { home: 0, away: 4 } },
    { id: 'GB3', group: 'B', matchday: 1, date: '2025-08-26', time: '20:00', homeTeam: 'dyno', awayTeam: 'ghazi', status: 'completed', score: { home: 7, away: 2 } },
    { id: 'GB4', group: 'B', matchday: 1, date: '2025-08-26', time: '22:00', homeTeam: 'ghazi', awayTeam: 'dyno', status: 'completed', score: { home: 0, away: 3 } },
    { id: 'GB5', group: 'B', matchday: 1, date: '2025-08-26', time: '20:00', homeTeam: 'tonny', awayTeam: 'phenom', status: 'completed', score: { home: 2, away: 1 } },
    { id: 'GB6', group: 'B', matchday: 1, date: '2025-08-26', time: '22:00', homeTeam: 'phenom', awayTeam: 'tonny', status: 'completed', score: { home: 1, away: 3 } },

    // Group B - Matchday 2 (August 27, 2025)
    { id: 'GB7', group: 'B', matchday: 2, date: '2025-08-27', time: '20:00', homeTeam: 'elton', awayTeam: 'dyno', status: 'completed', score: { home: 1, away: 8 } },
    { id: 'GB8', group: 'B', matchday: 2, date: '2025-08-27', time: '22:00', homeTeam: 'dyno', awayTeam: 'elton', status: 'completed', score: { home: 4, away: 2 } },
    { id: 'GB9', group: 'B', matchday: 2, date: '2025-08-27', time: '20:00', homeTeam: 'ghazi', awayTeam: 'tonny', status: 'completed', score: { home: 5, away: 1 } },
    { id: 'GB10', group: 'B', matchday: 2, date: '2025-08-27', time: '22:00', homeTeam: 'tonny', awayTeam: 'ghazi', status: 'completed', score: { home: 0, away: 1 } },

    // Group B - Matchday 3 (August 28, 2025)
    { id: 'GB11', group: 'B', matchday: 3, date: '2025-08-28', time: '20:00', homeTeam: 'phenom', awayTeam: 'dyno', status: 'completed', score: { home: 1, away: 3 } },
    { id: 'GB12', group: 'B', matchday: 3, date: '2025-08-28', time: '22:00', homeTeam: 'dyno', awayTeam: 'phenom', status: 'completed', score: { home: 3, away: 2 } },
    { id: 'GB13', group: 'B', matchday: 3, date: '2025-08-28', time: '20:00', homeTeam: 'elton', awayTeam: 'ghazi', status: 'completed', score: { home: 0, away: 8 } },
    { id: 'GB14', group: 'B', matchday: 3, date: '2025-08-28', time: '22:00', homeTeam: 'ghazi', awayTeam: 'elton', status: 'completed', score: { home: 9, away: 1 } },
    { id: 'GB15', group: 'B', matchday: 3, date: '2025-08-28', time: '20:00', homeTeam: 'tonny', awayTeam: 'elton', status: 'completed', score: { home: 0, away: 0 } },
    { id: 'GB16', group: 'B', matchday: 3, date: '2025-08-28', time: '22:00', homeTeam: 'elton', awayTeam: 'tonny', status: 'completed', score: { home: 0, away: 0 } },

    // Group B - Matchday 4 (August 29, 2025)
    { id: 'GB17', group: 'B', matchday: 4, date: '2025-08-29', time: '20:00', homeTeam: 'phenom', awayTeam: 'ghazi', status: 'completed', score: { home: 0, away: 2 } },
    { id: 'GB18', group: 'B', matchday: 4, date: '2025-08-29', time: '22:00', homeTeam: 'ghazi', awayTeam: 'phenom', status: 'completed', score: { home: 2, away: 2 } },
    { id: 'GB21', group: 'B', matchday: 4, date: '2025-08-29', time: '20:00', homeTeam: 'dyno', awayTeam: 'tonny', status: 'completed', score: { home: 4, away: 0 } },
    { id: 'GB22', group: 'B', matchday: 4, date: '2025-08-29', time: '22:00', homeTeam: 'tonny', awayTeam: 'dyno', status: 'completed', score: { home: 3, away: 8 } },

    // Group C - Matchday 1 (August 26, 2025)
    { id: 'GC1', group: 'C', matchday: 1, date: '2025-08-26', time: '20:00', homeTeam: 'newton', awayTeam: 'yotah', status: 'completed', score: { home: 2, away: 5 } },
    { id: 'GC2', group: 'C', matchday: 1, date: '2025-08-26', time: '22:00', homeTeam: 'yotah', awayTeam: 'newton', status: 'completed', score: { home: 1, away: 0 } },
    { id: 'GC3', group: 'C', matchday: 1, date: '2025-08-26', time: '20:00', homeTeam: 'kenno', awayTeam: 'offer_art', status: 'completed', score: { home: 7, away: 2 } },
    { id: 'GC4', group: 'C', matchday: 1, date: '2025-08-26', time: '22:00', homeTeam: 'offer_art', awayTeam: 'kenno', status: 'completed', score: { home: 1, away: 2 } },
    { id: 'GC5', group: 'C', matchday: 1, date: '2025-08-26', time: '20:00', homeTeam: 'emjay', awayTeam: 'newton', status: 'completed', score: { home: 3, away: 2 } },
    { id: 'GC6', group: 'C', matchday: 1, date: '2025-08-26', time: '22:00', homeTeam: 'newton', awayTeam: 'emjay', status: 'completed', score: { home: 1, away: 4 } },

    // Group C - Matchday 2 (August 27, 2025)
    { id: 'GC7', group: 'C', matchday: 2, date: '2025-08-27', time: '20:00', homeTeam: 'yotah', awayTeam: 'kenno', status: 'completed', score: { home: 2, away: 5 } },
    { id: 'GC8', group: 'C', matchday: 2, date: '2025-08-27', time: '22:00', homeTeam: 'kenno', awayTeam: 'yotah', status: 'completed', score: { home: 6, away: 0 } },
    { id: 'GC9', group: 'C', matchday: 2, date: '2025-08-27', time: '20:00', homeTeam: 'offer_art', awayTeam: 'emjay', status: 'completed', score: { home: 4, away: 5 } },
    { id: 'GC10', group: 'C', matchday: 2, date: '2025-08-27', time: '22:00', homeTeam: 'emjay', awayTeam: 'offer_art', status: 'completed', score: { home: 0, away: 1 } },

    // Group C - Matchday 3 (August 28, 2025)
    { id: 'GC11', group: 'C', matchday: 3, date: '2025-08-28', time: '20:00', homeTeam: 'newton', awayTeam: 'kenno', status: 'completed', score: { home: 4, away: 6 } },
    { id: 'GC12', group: 'C', matchday: 3, date: '2025-08-28', time: '22:00', homeTeam: 'kenno', awayTeam: 'newton', status: 'completed', score: { home: 8, away: 2 } },
    { id: 'GC13', group: 'C', matchday: 3, date: '2025-08-28', time: '20:00', homeTeam: 'yotah', awayTeam: 'offer_art', status: 'completed', score: { home: 1, away: 2 } },
    { id: 'GC14', group: 'C', matchday: 3, date: '2025-08-28', time: '22:00', homeTeam: 'offer_art', awayTeam: 'yotah', status: 'completed', score: { home: 2, away: 3 } },
    { id: 'GC15', group: 'C', matchday: 3, date: '2025-08-28', time: '20:00', homeTeam: 'emjay', awayTeam: 'kenno', status: 'completed', score: { home: 0, away: 3 } },
    { id: 'GC16', group: 'C', matchday: 3, date: '2025-08-28', time: '22:00', homeTeam: 'kenno', awayTeam: 'emjay', status: 'completed', score: { home: 3, away: 2 } },

    // Group C - Matchday 4 (August 29, 2025)
    { id: 'GC17', group: 'C', matchday: 4, date: '2025-08-29', time: '20:00', homeTeam: 'newton', awayTeam: 'offer_art', status: 'completed', score: { home: 2, away: 5 } },
    { id: 'GC18', group: 'C', matchday: 4, date: '2025-08-29', time: '22:00', homeTeam: 'offer_art', awayTeam: 'newton', status: 'completed', score: { home: 8, away: 2 } },
    { id: 'GC19', group: 'C', matchday: 4, date: '2025-08-29', time: '20:00', homeTeam: 'yotah', awayTeam: 'emjay', status: 'completed', score: { home: 1, away: 2 } },
    { id: 'GC20', group: 'C', matchday: 4, date: '2025-08-29', time: '22:00', homeTeam: 'emjay', awayTeam: 'yotah', status: 'completed', score: { home: 1, away: 3 } },

    // Group D - Matchday 1 (August 26, 2025)
    { id: 'GD1', group: 'D', matchday: 1, date: '2025-08-26', time: '20:00', homeTeam: 'mignon', awayTeam: 'wato', status: 'completed', score: { home: 2, away: 11 } },
    { id: 'GD2', group: 'D', matchday: 1, date: '2025-08-26', time: '22:00', homeTeam: 'wato', awayTeam: 'mignon', status: 'completed', score: { home: 3, away: 1 } },
    { id: 'GD3', group: 'D', matchday: 1, date: '2025-08-26', time: '20:00', homeTeam: 'thorvisual', awayTeam: 'thDrksid', status: 'completed', score: { home: 2, away: 5 } },
    { id: 'GD4', group: 'D', matchday: 1, date: '2025-08-26', time: '22:00', homeTeam: 'thDrksid', awayTeam: 'thorvisual', status: 'completed', score: { home: 4, away: 2 } },
    { id: 'GD5', group: 'D', matchday: 1, date: '2025-08-26', time: '20:00', homeTeam: 'maria', awayTeam: 'mignon', status: 'completed', score: { home: 0, away: 0 } },
    { id: 'GD6', group: 'D', matchday: 1, date: '2025-08-26', time: '22:00', homeTeam: 'mignon', awayTeam: 'maria', status: 'completed', score: { home: 0, away: 0 } },

    // Group D - Matchday 2 (August 27, 2025)
    { id: 'GD7', group: 'D', matchday: 2, date: '2025-08-27', time: '20:00', homeTeam: 'wato', awayTeam: 'thorvisual', status: 'completed', score: { home: 5, away: 3 } },
    { id: 'GD8', group: 'D', matchday: 2, date: '2025-08-27', time: '22:00', homeTeam: 'thorvisual', awayTeam: 'wato', status: 'completed', score: { home: 2, away: 1 } },
    { id: 'GD9', group: 'D', matchday: 2, date: '2025-08-27', time: '20:00', homeTeam: 'thDrksid', awayTeam: 'maria', status: 'completed', score: { home: 2, away: 1 } },
    { id: 'GD10', group: 'D', matchday: 2, date: '2025-08-27', time: '22:00', homeTeam: 'maria', awayTeam: 'thDrksid', status: 'completed', score: { home: 1, away: 4 } },

    // Group D - Matchday 3 (August 28, 2025)
    { id: 'GD11', group: 'D', matchday: 3, date: '2025-08-28', time: '20:00', homeTeam: 'mignon', awayTeam: 'thorvisual', status: 'completed', score: { home: 1, away: 7 } },
    { id: 'GD12', group: 'D', matchday: 3, date: '2025-08-28', time: '22:00', homeTeam: 'thorvisual', awayTeam: 'mignon', status: 'completed', score: { home: 1, away: 0 } },
    { id: 'GD13', group: 'D', matchday: 3, date: '2025-08-28', time: '20:00', homeTeam: 'wato', awayTeam: 'thDrksid', status: 'completed', score: { home: 3, away: 3 } },
    { id: 'GD14', group: 'D', matchday: 3, date: '2025-08-28', time: '22:00', homeTeam: 'thDrksid', awayTeam: 'wato', status: 'completed', score: { home: 6, away: 5 } },

    // Group D - Matchday 4 (August 29, 2025)
    { id: 'GD15', group: 'D', matchday: 4, date: '2025-08-29', time: '20:00', homeTeam: 'mignon', awayTeam: 'thDrksid', status: 'completed', score: { home: 0, away: 0 } },
    { id: 'GD16', group: 'D', matchday: 4, date: '2025-08-29', time: '22:00', homeTeam: 'thDrksid', awayTeam: 'mignon', status: 'completed', score: { home: 0, away: 0 } },
    { id: 'GD17', group: 'D', matchday: 4, date: '2025-08-29', time: '20:00', homeTeam: 'wato', awayTeam: 'maria', status: 'completed', score: { home: 1, away: 2 } },
    { id: 'GD18', group: 'D', matchday: 4, date: '2025-08-29', time: '22:00', homeTeam: 'maria', awayTeam: 'wato', status: 'completed', score: { home: 4, away: 4 } },
    { id: 'GD19', group: 'D', matchday: 4, date: '2025-08-29', time: '20:00', homeTeam: 'thorvisual', awayTeam: 'maria', status: 'completed', score: { home: 2, away: 3 } },
    { id: 'GD20', group: 'D', matchday: 4, date: '2025-08-29', time: '22:00', homeTeam: 'maria', awayTeam: 'thorvisual', status: 'completed', score: { home: 0, away: 3 } }
];

// Helper function to get team name from ID
function getTeamName(teamId) {
    return teamsData[teamId] ? teamsData[teamId].name : teamId;
}

// Helper function to generate team logo HTML (uses owner pictures with club logo fallback)
function getTeamLogo(teamId, size = '40px', useCircle = true) {
    if (!teamId || teamId === 'TBD') {
        // Always use circular design for TBD and fallback logos
        return `<div class="team-logo" style="width: ${size}; height: ${size}; display: flex; align-items: center; justify-content: center; background: rgba(255, 255, 255, 0.2); border-radius: 50%; font-weight: bold; color: #ffffff; text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);">${teamId === 'TBD' ? 'TBD' : 'N/A'}</div>`;
    }
    
    const borderRadius = useCircle ? '50%' : '8px';
    const background = useCircle ? 'rgba(255, 255, 255, 0.1)' : 'transparent';
    
    // Create a working fallback system with proper error handling
    return `<div style="position: relative; width: ${size}; height: ${size};">
                <img src="images/pics/${teamId}.jpeg" alt="${getTeamName(teamId)}" class="team-logo owner-picture" style="width: ${size}; height: ${size}; object-fit: cover; border-radius: ${borderRadius}; background: ${background}; position: absolute; top: 0; left: 0; border: 2px solid rgba(255, 255, 255, 0.3);" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';" />
                <img src="images/club-logos/${teamId}.svg" alt="${getTeamName(teamId)}" class="team-logo club-badge" style="width: ${size}; height: ${size}; object-fit: contain; border-radius: ${borderRadius}; background: ${background}; position: absolute; top: 0; left: 0; border: 2px solid rgba(255, 182, 0, 0.4); display: none;" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';" />
                <div class="team-logo-fallback" style="width: ${size}; height: ${size}; display: none; align-items: center; justify-content: center; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); border-radius: ${borderRadius}; font-weight: bold; color: #ffffff; text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5); position: absolute; top: 0; left: 0; border: 2px solid rgba(255, 255, 255, 0.3); font-size: ${parseInt(size) * 0.4}px; letter-spacing: 1px;">${teamsData[teamId] ? teamsData[teamId].shortName : teamId.substring(0, 3).toUpperCase()}</div>
            </div>`;
}

// Function to find which group a team belongs to
function findTeamGroup(teamId) {
    const groupData = {
        groupA: ['dav_lil7', 'dandizzo', 'its_lyta23', 'volts', 'ghost'],
        groupB: ['phenom', 'elton', 'dyno', 'ghazi', 'tonny'],
        groupC: ['newton', 'yotah', 'kenno', 'offer_art', 'emjay'],
        groupD: ['mignon', 'wato', 'thorvisual', 'thDrksid', 'maria']
    };
    
    for (const [group, teams] of Object.entries(groupData)) {
        if (teams.includes(teamId)) {
            return group.replace('group', '').toUpperCase();
        }
    }
    return 'Unknown';
}

function groupMatchesByTie(matches) {
    const ties = {};
    
    matches.forEach(match => {
        if (!ties[match.tie]) {
            ties[match.tie] = {
                tie: match.tie,
                matches: []
            };
        }
        ties[match.tie].matches.push(match);
    });
    
    // Sort matches within each tie by leg (1st first, then 2nd)
    Object.values(ties).forEach(tie => {
        tie.matches.sort((a, b) => {
            if (a.leg === '1st' && b.leg === '2nd') return -1;
            if (a.leg === '2nd' && b.leg === '1st') return 1;
            return 0;
        });
    });
    
    return Object.values(ties).sort((a, b) => a.tie - b.tie);
}

// Function to update fixture statuses based on matchday progress
function updateFixtureStatuses(fixtures) {
    // Group fixtures by matchday
    const fixturesByMatchday = {};
    
    fixtures.forEach(fixture => {
        if (!fixturesByMatchday[fixture.matchday]) {
            fixturesByMatchday[fixture.matchday] = [];
        }
        fixturesByMatchday[fixture.matchday].push(fixture);
    });
    
    // Check each matchday for mixed status
    Object.values(fixturesByMatchday).forEach(matchdayFixtures => {
        const hasCompleted = matchdayFixtures.some(f => f.status === 'completed');
        
        // If ANY match in the matchday is completed, ALL remaining scheduled matches become pending
        if (hasCompleted) {
            matchdayFixtures.forEach(fixture => {
                if (fixture.status === 'scheduled') {
                    fixture.status = 'pending';
                }
            });
        }
    });
    
    // Debug: Log the status distribution
    const statusCounts = {
        completed: fixtures.filter(f => f.status === 'completed').length,
        scheduled: fixtures.filter(f => f.status === 'scheduled').length,
        pending: fixtures.filter(f => f.status === 'pending').length
    };
    console.log('Status distribution after update:', statusCounts);
    
    return fixtures;
}

// Global filter state
let currentFilters = {
    matchday: 'all',
    group: 'all',
    team: 'all',
    status: 'all'
};

// Function to generate all fixtures HTML
function generateAllFixtures() {
    let fixtures = [...leagueData.groupFixtures];
    
    // Update status to pending if matchday has mixed status
    fixtures = updateFixtureStatuses(fixtures);
    
    // Apply filters
    if (currentFilters.matchday !== 'all') {
        fixtures = fixtures.filter(fixture => fixture.matchday === parseInt(currentFilters.matchday));
    }
    if (currentFilters.group !== 'all') {
        fixtures = fixtures.filter(fixture => fixture.group === currentFilters.group);
    }
    if (currentFilters.team !== 'all') {
        fixtures = fixtures.filter(fixture => 
            fixture.homeTeam === currentFilters.team || fixture.awayTeam === currentFilters.team
        );
    }
    if (currentFilters.status !== 'all') {
        console.log('Filtering by status:', currentFilters.status);
        console.log('Available statuses:', [...new Set(fixtures.map(f => f.status))]);
        fixtures = fixtures.filter(fixture => fixture.status === currentFilters.status);
        console.log('Fixtures after status filter:', fixtures.length);
    }
    
    // Check if no matches found
    if (fixtures.length === 0) {
        let message = 'No matches found';
        
        // Provide specific message based on filters
        if (currentFilters.team !== 'all' && currentFilters.group !== 'all') {
            const teamName = getTeamName(currentFilters.team);
            const teamGroup = findTeamGroup(currentFilters.team);
            if (currentFilters.group !== teamGroup) {
                message = `${teamName} is not in Group ${currentFilters.group}. ${teamName} is in Group ${teamGroup}.`;
            } else {
                message = `No matches found for ${teamName} in Group ${currentFilters.group} with the selected filters.`;
            }
        } else if (currentFilters.team !== 'all') {
            const teamName = getTeamName(currentFilters.team);
            message = `No matches found for ${teamName} with the selected filters.`;
        } else if (currentFilters.group !== 'all') {
            message = `No matches found in Group ${currentFilters.group} with the selected filters.`;
        } else if (currentFilters.matchday !== 'all') {
            message = `No matches found for Matchday ${currentFilters.matchday} with the selected filters.`;
        } else if (currentFilters.status !== 'all') {
            message = `No ${currentFilters.status} matches found with the selected filters.`;
        }
        
        return `
            <div class="no-matches-message">
                <i class="fas fa-search"></i>
                <h3>${message}</h3>
                <p>Try adjusting your filters to see more results.</p>
            </div>
        `;
    }
    
    return fixtures.map(fixture => {
        // Determine match result for the filtered team
        let matchResult = '';
        let resultClass = '';
        
        if (currentFilters.team !== 'all' && fixture.status === 'completed' && fixture.score) {
            const isHomeTeam = fixture.homeTeam === currentFilters.team;
            const isAwayTeam = fixture.awayTeam === currentFilters.team;
            
            if (isHomeTeam || isAwayTeam) {
                const teamScore = isHomeTeam ? fixture.score.home : fixture.score.away;
                const opponentScore = isHomeTeam ? fixture.score.away : fixture.score.home;
                
                if (teamScore > opponentScore) {
                    matchResult = 'WIN';
                    resultClass = 'win';
                } else if (teamScore < opponentScore) {
                    matchResult = 'LOSS';
                    resultClass = 'loss';
                } else {
                    matchResult = 'DRAW';
                    resultClass = 'draw';
                }
            }
        }
        
        return `
            <div class="fixture-item ${fixture.status} ${resultClass}">
                <div class="matchday-badge">Group ${fixture.group} - Matchday ${fixture.matchday}</div>
                ${matchResult ? `<div class="result-badge ${resultClass}">${matchResult}</div>` : ''}
                <div class="fixture-teams">
                    <div class="team">
                        ${getTeamLogo(fixture.homeTeam, '50px', false)}
                        <span>${getTeamName(fixture.homeTeam)}</span>
                    </div>
                    <div class="vs ${fixture.status}">
                        ${fixture.status === 'completed' && fixture.score ? `${fixture.score.home} - ${fixture.score.away}` : 'vs'}
                    </div>
                    <div class="team">
                        <span>${getTeamName(fixture.awayTeam)}</span>
                        ${getTeamLogo(fixture.awayTeam, '50px', false)}
                    </div>
                </div>
                <div class="fixture-details">
                    <span><i class="fas fa-calendar"></i> ${fixture.date}</span>
                    <span><i class="fas fa-clock"></i> ${fixture.time}</span>
                    <span class="status-badge ${fixture.status}">
                        <i class="fas ${fixture.status === 'completed' ? 'fa-check-circle' : fixture.status === 'pending' ? 'fa-clock' : 'fa-calendar'}"></i>
                        ${fixture.status}
                    </span>
                </div>
            </div>
        `;
    }).join('');
}

// Filter functions
function filterByMatchday(matchday) {
    currentFilters.matchday = matchday;
    updateFilteredFixtures();
}

function filterByGroup(group) {
    currentFilters.group = group;
    updateFilteredFixtures();
}

function filterByTeam(team) {
    currentFilters.team = team;
    updateFilteredFixtures();
}

function filterByStatus(status) {
    currentFilters.status = status;
    updateFilteredFixtures();
}

// Update filtered fixtures display
function updateFilteredFixtures() {
    const container = document.getElementById('filteredFixtures');
    if (container) {
        container.innerHTML = generateAllFixtures();
    }
}

// Convert teamsData to leagueData format with random stats
const leagueData = {
    teams: Object.keys(teamsData).map((key, index) => {
        const team = teamsData[key];
        const played = Math.floor(Math.random() * 6) + 1;
        const won = Math.floor(Math.random() * played);
        const drawn = Math.floor(Math.random() * (played - won));
        const lost = played - won - drawn;
        const goalsFor = Math.floor(Math.random() * 20) + 5;
        const goalsAgainst = Math.floor(Math.random() * 15) + 3;
        const points = (won * 3) + drawn;
        
        return {
            id: index + 1,
            name: team.name,
            country: "Pro League",
            logo: team.logo,
            points: points,
            played: played,
            won: won,
            drawn: drawn,
            lost: lost,
            goalsFor: goalsFor,
            goalsAgainst: goalsAgainst,
            stadium: team.stadium,
            manager: team.manager,
            capacity: team.capacity,
            founded: team.founded,
            titles: team.titles,
            colors: team.colors,
            shortName: team.shortName
        };
    }),
    groups: groupData,
    groupFixtures: groupFixtures,
    knockouts: {
        roundOf16: [
            // Tie 1
            { id: 'R16_1_1', round: 'Round of 16', tie: 1, leg: '1st', date: '2025-08-30', time: '20:00', homeTeam: 'dav_lil7', awayTeam: 'phenom', status: 'completed', score: { home: 1, away: 2 } },
            { id: 'R16_1_2', round: 'Round of 16', tie: 1, leg: '2nd', date: '2025-08-30', time: '22:00', homeTeam: 'phenom', awayTeam: 'dav_lil7', status: 'completed', score: { home: 0, away: 2 } },
            // Tie 2
            { id: 'R16_2_1', round: 'Round of 16', tie: 2, leg: '1st', date: '2025-08-30', time: '20:00', homeTeam: 'thorvisual', awayTeam: 'emjay', status: 'completed', score: { home: 4, away: 2 } },
            { id: 'R16_2_2', round: 'Round of 16', tie: 2, leg: '2nd', date: '2025-08-30', time: '22:00', homeTeam: 'emjay', awayTeam: 'thorvisual', status: 'completed', score: { home: 3, away: 4 } },
            // Tie 3
            { id: 'R16_3_1', round: 'Round of 16', tie: 3, leg: '1st', date: '2025-08-30', time: '20:00', homeTeam: 'kenno', awayTeam: 'maria', status: 'completed', score: { home: 4, away: 0 } },
            { id: 'R16_3_2', round: 'Round of 16', tie: 3, leg: '2nd', date: '2025-08-30', time: '22:00', homeTeam: 'maria', awayTeam: 'kenno', status: 'completed', score: { home: 3, away: 1 } },
            // Tie 4
            { id: 'R16_4_1', round: 'Round of 16', tie: 4, leg: '1st', date: '2025-08-30', time: '20:00', homeTeam: 'ghazi', awayTeam: 'ghost', status: 'completed', score: { home: 3, away: 3 } },
            { id: 'R16_4_2', round: 'Round of 16', tie: 4, leg: '2nd', date: '2025-08-30', time: '22:00', homeTeam: 'ghost', awayTeam: 'ghazi', status: 'completed', score: { home: 4, away: 2 } },
            // Tie 5
            { id: 'R16_5_1', round: 'Round of 16', tie: 5, leg: '1st', date: '2025-08-30', time: '20:00', homeTeam: 'dyno', awayTeam: 'dandizzo', status: 'completed', score: { home: 2, away: 1 } },
            { id: 'R16_5_2', round: 'Round of 16', tie: 5, leg: '2nd', date: '2025-08-30', time: '22:00', homeTeam: 'dandizzo', awayTeam: 'dyno', status: 'completed', score: { home: 1, away: 4 } },
            // Tie 6
            { id: 'R16_6_1', round: 'Round of 16', tie: 6, leg: '1st', date: '2025-08-30', time: '20:00', homeTeam: 'offer_art', awayTeam: 'wato', status: 'completed', score: { home: 2, away: 4 } },
            { id: 'R16_6_2', round: 'Round of 16', tie: 6, leg: '2nd', date: '2025-08-30', time: '22:00', homeTeam: 'wato', awayTeam: 'offer_art', status: 'completed', score: { home: 3, away: 1 } },
            // Tie 7
            { id: 'R16_7_1', round: 'Round of 16', tie: 7, leg: '1st', date: '2025-08-30', time: '20:00', homeTeam: 'thDrksid', awayTeam: 'yotah', status: 'completed', score: { home: 8, away: 2 } },
            { id: 'R16_7_2', round: 'Round of 16', tie: 7, leg: '2nd', date: '2025-08-30', time: '22:00', homeTeam: 'yotah', awayTeam: 'thDrksid', status: 'completed', score: { home: 3, away: 1 } },
            // Tie 8
            { id: 'R16_8_1', round: 'Round of 16', tie: 8, leg: '1st', date: '2025-08-30', time: '20:00', homeTeam: 'its_lyta23', awayTeam: 'tonny', status: 'completed', score: { home: 1, away: 0 } },
            { id: 'R16_8_2', round: 'Round of 16', tie: 8, leg: '2nd', date: '2025-08-30', time: '22:00', homeTeam: 'tonny', awayTeam: 'its_lyta23', status: 'completed', score: { home: 1, away: 3 }, }
        ],
        quarterFinals: [
            // Tie 1
            { id: 'QF_1_1', round: 'Quarter Finals', tie: 1, leg: '1st', date: '2025-08-31', time: '20:00', homeTeam: 'its_lyta23', awayTeam: 'thDrksid', status: 'completed', score: { home: 0, away: 1 } },
            { id: 'QF_1_2', round: 'Quarter Finals', tie: 1, leg: '2nd', date: '2025-08-31', time: '22:00', homeTeam: 'thDrksid', awayTeam: 'its_lyta23', status: 'completed', score: { home: 4, away: 2 }, },
            // Tie 2
            { id: 'QF_2_1', round: 'Quarter Finals', tie: 2, leg: '1st', date: '2025-08-31', time: '20:00', homeTeam: 'wato', awayTeam: 'dyno', status: 'completed', score: { home: 8, away: 3 } },
            { id: 'QF_2_2', round: 'Quarter Finals', tie: 2, leg: '2nd', date: '2025-08-31', time: '22:00', homeTeam: 'dyno', awayTeam: 'wato', status: 'completed', score: { home: 5, away: 2 } },
            // Tie 3
            { id: 'QF_3_1', round: 'Quarter Finals', tie: 3, leg: '1st', date: '2025-08-31', time: '20:00', homeTeam: 'ghost', awayTeam: 'kenno', status: 'completed', score: { home: 3, away: 3 } },
            { id: 'QF_3_2', round: 'Quarter Finals', tie: 3, leg: '2nd', date: '2025-08-31', time: '22:00', homeTeam: 'kenno', awayTeam: 'ghost', status: 'completed', score: { home: 2, away: 0 }, },
            // Tie 4
            { id: 'QF_4_1', round: 'Quarter Finals', tie: 4, leg: '1st', date: '2025-08-31', time: '20:00', homeTeam: 'thorvisual', awayTeam: 'dav_lil7', status: 'completed', score: { home: 1, away: 2 } },
            { id: 'QF_4_2', round: 'Quarter Finals', tie: 4, leg: '2nd', date: '2025-08-31', time: '22:00', homeTeam: 'dav_lil7', awayTeam: 'thorvisual', status: 'completed', score: { home: 1, away: 1 } }
        ],
        semiFinals: [
            // Tie 1
            { id: 'SF_1_1', round: 'Semi Finals', tie: 1, leg: '1st', date: '2025-09-01', time: '20:00', homeTeam: 'dav_lil7', awayTeam: 'kenno', status: 'completed', score: { home: 1, away: 5 } },
            { id: 'SF_1_2', round: 'Semi Finals', tie: 1, leg: '2nd', date: '2025-09-01', time: '22:00', homeTeam: 'kenno', awayTeam: 'dav_lil7', status: 'completed', score: { home: 7, away: 3 } },
            // { id: 'SF_1_2', round: 'Semi Finals', tie: 1, leg: '2nd', date: '2025-09-01', time: '22:00', homeTeam: 'kenno', awayTeam: 'dav_lil7', status: 'completed', score: { home: 0, away: 0 }, penalties: { home: 1, away: 4 } },
            // Tie 2
            { id: 'SF_2_1', round: 'Semi Finals', tie: 2, leg: '1st', date: '2025-09-01', time: '20:00', homeTeam: 'thDrksid', awayTeam: 'wato', status: 'completed', score: { home: 2, away: 0 } },
            { id: 'SF_2_2', round: 'Semi Finals', tie: 2, leg: '2nd', date: '2025-09-01', time: '22:00', homeTeam: 'wato', awayTeam: 'thDrksid', status: 'completed', score: { home: 4, away: 3 }, }
        ],
        thirdPlacePlayoff: [
            { id: 'TPP_1', round: 'Third Place Playoff', matchNumber: 1, date: '2025-09-02', time: '20:00', homeTeam: 'dav_lil7', awayTeam: 'wato', status: 'scheduled',score: { home: 2, away: 1 } }
        ],
        final: [
            { id: 'FINAL_1', round: 'Final', matchNumber: 1, date: '2025-09-02', time: '22:00', homeTeam: 'kenno', awayTeam: 'thDrksid', status: 'scheduled', score: { home: 1, away: 1 }, penalties: { home: 3, away: 2 } }
        ]
    }
};

// Function to calculate group standings
function calculateGroupStandings() {
    // Create stats objects for each team based on fixtures
    const teamStats = {};
    
    // Initialize stats for all teams
    Object.keys(leagueData.groups).forEach(groupKey => {
        leagueData.groups[groupKey].forEach(team => {
            teamStats[team.id] = {
                id: team.id,
                name: team.name,
                shortName: team.shortName,
                points: 0,
                played: 0,
                won: 0,
                drawn: 0,
                lost: 0,
                goalsFor: 0,
                goalsAgainst: 0,
                goalDifference: 0
            };
        });
    });

    // Process completed fixtures
    leagueData.groupFixtures.forEach(fixture => {
        if (fixture.status === 'completed' && fixture.score) {
            const homeTeam = fixture.homeTeam;
            const awayTeam = fixture.awayTeam;
            const homeScore = fixture.score.home;
            const awayScore = fixture.score.away;

            // Check if both teams exist in our stats
            if (teamStats[homeTeam] && teamStats[awayTeam]) {
                // Update home team stats
                teamStats[homeTeam].played++;
                teamStats[homeTeam].goalsFor += homeScore;
                teamStats[homeTeam].goalsAgainst += awayScore;

                // Update away team stats
                teamStats[awayTeam].played++;
                teamStats[awayTeam].goalsFor += awayScore;
                teamStats[awayTeam].goalsAgainst += homeScore;

                // Determine result and update points
                if (homeScore > awayScore) {
                    teamStats[homeTeam].won++;
                    teamStats[awayTeam].lost++;
                    teamStats[homeTeam].points += 3;
                } else if (homeScore < awayScore) {
                    teamStats[awayTeam].won++;
                    teamStats[homeTeam].lost++;
                    teamStats[awayTeam].points += 3;
                } else {
                    teamStats[homeTeam].drawn++;
                    teamStats[awayTeam].drawn++;
                    teamStats[homeTeam].points += 1;
                    teamStats[awayTeam].points += 1;
                }
            }
        }
    });

    // Calculate goal differences
    Object.values(teamStats).forEach(team => {
        team.goalDifference = team.goalsFor - team.goalsAgainst;
    });

    // Update leagueData.groups with calculated stats
    Object.keys(leagueData.groups).forEach(groupKey => {
        leagueData.groups[groupKey] = leagueData.groups[groupKey].map(team => {
            return teamStats[team.id] || team;
        });

        // Sort teams by points, goal difference, goals scored
        leagueData.groups[groupKey].sort((a, b) => {
            if (b.points !== a.points) return b.points - a.points;
            if (b.goalDifference !== a.goalDifference) return b.goalDifference - a.goalDifference;
            return b.goalsFor - a.goalsFor;
        });
    });
}

// Global variables
let currentPage = 'home';
let searchResults = [];

// DOM Elements
const mainContent = document.getElementById('mainContent');
    const mainSearch = document.getElementById('mainsearch');
const searchBtn = document.getElementById('searchBtn');
const searchResultsDiv = document.getElementById('searchResults');
const navLinks = document.querySelectorAll('.nav-link');
    const mobileNavItems = document.querySelectorAll('.mobile-nav-item');

// Event Listeners
document.addEventListener('DOMContentLoaded', () => {
    // Show loader initially
    const pageLoader = document.getElementById('pageLoader');
    const mainContent = document.getElementById('mainContent');
    
    // Simulate a small delay to ensure smooth loading
    setTimeout(() => {
        // Load the home page
        loadPage('home');
        setupEventListeners();
        
        // Hide loader and show main content
        pageLoader.classList.add('hidden');
        mainContent.style.display = 'block';
        
        // Remove loader after transition
        setTimeout(() => {
            pageLoader.style.display = 'none';
        }, 500);
    }, 800);
});

function setupEventListeners() {
    // Desktop Navigation
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const page = e.target.dataset.page;
            loadPage(page);
            setActiveNavLink(e.target);
            setActiveMobileNav(page);
        });
    });

    // Mobile Navigation
    mobileNavItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            const page = e.currentTarget.dataset.page;
            loadPage(page);
            setActiveMobileNavItem(e.currentTarget);
            setActiveNavLink(document.querySelector(`[data-page="${page}"]`));
        });
    });

    // Search functionality
    searchBtn.addEventListener('click', (e) => {
        e.preventDefault();
        performSearch();
    });
    
    mainSearch.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            performSearch();
        }
    });

    // Real-time search as user types (oninput event)
    mainSearch.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase().trim();
        if (query.length >= 2) {
            performSearch();
        } else if (query.length === 0) {
            searchResultsDiv.style.display = 'none';
        }
    });

    // Close search results when clicking outside
    document.addEventListener('click', (e) => {
        if (!mainSearch.contains(e.target) && !searchResultsDiv.contains(e.target) && !searchBtn.contains(e.target)) {
            searchResultsDiv.style.display = 'none';
        }
    });
}

function setActiveNavLink(activeLink) {
    navLinks.forEach(link => link.classList.remove('active'));
    if (activeLink) {
    activeLink.classList.add('active');
    }
}

function setActiveMobileNavItem(activeItem) {
    mobileNavItems.forEach(item => item.classList.remove('active'));
    activeItem.classList.add('active');
}

function setActiveMobileNav(page) {
    mobileNavItems.forEach(item => item.classList.remove('active'));
    const activeItem = document.querySelector(`.mobile-nav-item[data-page="${page}"]`);
    if (activeItem) {
        activeItem.classList.add('active');
    }
}

function loadPage(page) {
    currentPage = page;
    let content = '';

    // Show quick loader for page transitions
    const mainContent = document.getElementById('mainContent');
    mainContent.style.opacity = '0.7';
    mainContent.style.transition = 'opacity 0.2s ease';

    switch (page) {
        case 'home':
            content = generateHomePage();
            break;
        case 'fixtures':
            content = generateFixturesPage();
            break;
        case 'table':
            content = generateTablePage();
            break;
        case 'knockouts':
            content = generateKnockoutsPage();
            break;
        case 'clubs':
            content = generateClubsPage();
            break;
        default:
            content = generateHomePage();
    }

    // Update content and restore opacity
    mainContent.innerHTML = content;
    mainContent.style.opacity = '1';
}

function generateHomePage() {
    // Calculate dynamic stats
    const totalTeams = leagueData.teams.length;
    const totalGroupMatches = leagueData.groupFixtures.length;
    const completedGroupMatches = leagueData.groupFixtures.filter(f => f.status === 'completed').length;
    const upcomingGroupMatches = leagueData.groupFixtures.filter(f => f.status === 'scheduled').length;
    
    // Get recent completed matches (group stage + knockouts)
    const allCompletedMatches = [
        ...leagueData.groupFixtures.filter(f => f.status === 'completed'),
        ...leagueData.knockouts.roundOf16.filter(m => m.status === 'completed'),
        ...leagueData.knockouts.quarterFinals.filter(m => m.status === 'completed'),
        ...leagueData.knockouts.semiFinals.filter(m => m.status === 'completed'),
        ...leagueData.knockouts.final.filter(m => m.status === 'completed'),
        ...leagueData.knockouts.thirdPlacePlayoff.filter(m => m.status === 'completed')
    ];
    
    const recentMatches = allCompletedMatches
        .sort((a, b) => new Date(b.date) - new Date(a.date))
        .slice(0, 6);
    
    // Get upcoming matches from group stage
    let upcomingMatches = leagueData.groupFixtures
        .filter(f => f.status === 'scheduled' || f.status === 'pending')
        .sort((a, b) => new Date(a.date) - new Date(b.date));
    
    // If not enough group matches, add knockout matches
    if (upcomingMatches.length < 6) {
        const knockoutMatches = [
            ...leagueData.knockouts.roundOf16,
            ...leagueData.knockouts.quarterFinals,
            ...leagueData.knockouts.semiFinals,
            ...leagueData.knockouts.final,
            ...leagueData.knockouts.thirdPlacePlayoff
        ].filter(match => match.status === 'scheduled' || match.status === 'pending')
         .sort((a, b) => new Date(a.date) - new Date(b.date));
        
        upcomingMatches = [...upcomingMatches, ...knockoutMatches];
    }
    
    upcomingMatches = upcomingMatches.slice(0, 6);
    
    // Get top teams from each group
    calculateGroupStandings();
    const topTeams = [];
    Object.keys(leagueData.groups).forEach(groupKey => {
        const group = leagueData.groups[groupKey];
        if (group.length > 0) {
            topTeams.push({
                ...group[0],
                group: groupKey.replace('group', '').toUpperCase()
            });
        }
    });
    
    // Get knockout stage info
    const knockoutMatches = [
        ...leagueData.knockouts.roundOf16,
        ...leagueData.knockouts.quarterFinals,
        ...leagueData.knockouts.semiFinals,
        ...leagueData.knockouts.final
    ];
    const completedKnockouts = knockoutMatches.filter(m => m.status === 'completed').length;

    return `
        <div class="page-container">
            <div class="hero-section">
                <h1 class="hero-title">Welcome to Pro League</h1>
                <p class="hero-subtitle">The most prestigious club competition in football</p>
                <div class="hero-actions">
                    <button class="hero-btn primary" onclick="loadPage('fixtures')">
                        <i class="fas fa-calendar-alt"></i> View Fixtures
                    </button>
                    <button class="hero-btn secondary" onclick="loadPage('table')">
                        <i class="fas fa-table"></i> League Tables
                    </button>
                    <button class="hero-btn secondary" onclick="loadPage('clubs')">
                        <i class="fas fa-users"></i> All Clubs
                    </button>
                </div>
            </div>
            
            <div class="stats-grid">
                <div class="stat-card" onclick="loadPage('clubs')" style="cursor: pointer;">
                    <div class="stat-number">${totalTeams}</div>
                    <div class="stat-label">Teams</div>
                    <div class="stat-icon"><i class="fas fa-users"></i></div>
                </div>
                <div class="stat-card" onclick="loadPage('fixtures')" style="cursor: pointer;">
                    <div class="stat-number">${totalGroupMatches}</div>
                    <div class="stat-label">Total Matches</div>
                    <div class="stat-icon"><i class="fas fa-futbol"></i></div>
                </div>
                <div class="stat-card" onclick="loadPage('fixtures')" style="cursor: pointer;">
                    <div class="stat-number">${completedGroupMatches}</div>
                    <div class="stat-label">Completed</div>
                    <div class="stat-icon"><i class="fas fa-check-circle"></i></div>
                </div>
                <div class="stat-card" onclick="loadPage('knockouts')" style="cursor: pointer;">
                    <div class="stat-number">${completedKnockouts}</div>
                    <div class="stat-label">Knockout Matches</div>
                    <div class="stat-icon"><i class="fas fa-trophy"></i></div>
                </div>
            </div>
            
            ${upcomingGroupMatches === 0 ? `
            <!-- Dynamic Qualification Ticker -->
            <div class="qualification-ticker-section">
                <div class="section-header">
                    <h2><i class="fas fa-star"></i> ${leagueData.knockouts.final.every(match => match.status === 'completed') && leagueData.knockouts.thirdPlacePlayoff.every(match => match.status === 'completed') ? '🏆 Tournament Champions' : leagueData.knockouts.semiFinals.every(match => match.status === 'completed') ? 'Finals & Third Place Playoff' : leagueData.knockouts.quarterFinals.every(match => match.status === 'completed') ? 'Semi Finals Qualifiers' : leagueData.knockouts.roundOf16.every(match => match.status === 'completed') ? 'Quarter Finals Qualifiers' : 'Round of 16 Qualifiers'}</h2>
                    <span class="qualification-status">${leagueData.knockouts.final.every(match => match.status === 'completed') && leagueData.knockouts.thirdPlacePlayoff.every(match => match.status === 'completed') ? 'Tournament Completed! 🎉' : leagueData.knockouts.semiFinals.every(match => match.status === 'completed') ? 'Semi Finals Completed!' : leagueData.knockouts.quarterFinals.every(match => match.status === 'completed') ? 'Quarter Finals Completed!' : leagueData.knockouts.roundOf16.every(match => match.status === 'completed') ? 'Round of 16 Completed!' : 'All Group Matches Completed!'}</span>
                </div>
                <div class="ticker-container">
                    <div class="ticker-track">
                        ${leagueData.knockouts.final.every(match => match.status === 'completed') && leagueData.knockouts.thirdPlacePlayoff.every(match => match.status === 'completed') ? 
                            // Tournament Champions & Final Rankings
                            (() => {
                                const champions = [];
                                const runnersUp = [];
                                const thirdPlace = [];
                                const fourthPlace = [];
                                
                                // Get Final results
                                const finalMatch = leagueData.knockouts.final[0];
                                if (finalMatch.status === 'completed' && finalMatch.score) {
                                    if (finalMatch.score.home > finalMatch.score.away) {
                                        champions.push(finalMatch.homeTeam);
                                        runnersUp.push(finalMatch.awayTeam);
                                    } else if (finalMatch.score.away > finalMatch.score.home) {
                                        champions.push(finalMatch.awayTeam);
                                        runnersUp.push(finalMatch.homeTeam);
                                    } else if (finalMatch.penalties) {
                                        const winner = finalMatch.penalties.home > finalMatch.penalties.away ? finalMatch.homeTeam : finalMatch.awayTeam;
                                        const loser = winner === finalMatch.homeTeam ? finalMatch.awayTeam : finalMatch.homeTeam;
                                        champions.push(winner);
                                        runnersUp.push(loser);
                                    }
                                }
                                
                                // Get Third Place Playoff results
                                const tppMatch = leagueData.knockouts.thirdPlacePlayoff[0];
                                if (tppMatch.status === 'completed' && tppMatch.score) {
                                    if (tppMatch.score.home > tppMatch.score.away) {
                                        thirdPlace.push(tppMatch.homeTeam);
                                        fourthPlace.push(tppMatch.awayTeam);
                                    } else if (tppMatch.score.away > tppMatch.score.home) {
                                        thirdPlace.push(tppMatch.awayTeam);
                                        fourthPlace.push(tppMatch.homeTeam);
                                    } else if (tppMatch.penalties) {
                                        const winner = tppMatch.penalties.home > tppMatch.penalties.away ? tppMatch.homeTeam : tppMatch.awayTeam;
                                        const loser = winner === tppMatch.homeTeam ? tppMatch.awayTeam : tppMatch.homeTeam;
                                        thirdPlace.push(winner);
                                        fourthPlace.push(loser);
                                    }
                                }
                                
                                return `
                                    <span class="group-separator">•</span>
                                    <span class="group-label">🥇 Champions:</span>
                                    ${champions.map(team => `
                                        <span class="team-qualifier winner">
                                            ${getTeamName(team)} <span class="position-badge">1ST</span>
                                        </span>
                                    `).join('')}
                                    <span class="group-separator">•</span>
                                    <span class="group-label">🥈 Runners-Up:</span>
                                    ${runnersUp.map(team => `
                                        <span class="team-qualifier runner-up">
                                            ${getTeamName(team)} <span class="position-badge">2ND</span>
                                        </span>
                                    `).join('')}
                                    <span class="group-separator">•</span>
                                    <span class="group-label">🥉 Third Place:</span>
                                    ${thirdPlace.map(team => `
                                        <span class="team-qualifier third">
                                            ${getTeamName(team)} <span class="position-badge">3RD</span>
                                        </span>
                                    `).join('')}
                                    <span class="group-separator">•</span>
                                    <span class="group-label">4th Place:</span>
                                    ${fourthPlace.map(team => `
                                        <span class="team-qualifier fourth">
                                            ${getTeamName(team)} <span class="position-badge">4TH</span>
                                        </span>
                                    `).join('')}
                                `;
                            })() :
                            leagueData.knockouts.semiFinals.every(match => match.status === 'completed') ? 
                            // Finals & Third Place Playoff
                            (() => {
                                const finalists = [];
                                const thirdPlaceTeams = [];
                                
                                // Process Semi Finals results to determine Finalists and Third Place teams
                                const sfTies = groupMatchesByTie(leagueData.knockouts.semiFinals);
                                sfTies.forEach((tie, index) => {
                                    if (tie.matches.every(match => match.status === 'completed')) {
                                        const firstMatch = tie.matches[0];
                                        const secondMatch = tie.matches[1];
                                        
                                        if (firstMatch.score && secondMatch.score) {
                                            const homeAggregate = firstMatch.score.home + secondMatch.score.away;
                                            const awayAggregate = firstMatch.score.away + secondMatch.score.home;
                                            
                                            if (homeAggregate > awayAggregate) {
                                                finalists.push(firstMatch.homeTeam);
                                                thirdPlaceTeams.push(firstMatch.awayTeam);
                                            } else if (awayAggregate > homeAggregate) {
                                                finalists.push(firstMatch.awayTeam);
                                                thirdPlaceTeams.push(firstMatch.homeTeam);
                                            } else if (secondMatch.penalties) {
                                                // Penalty shootout winner
                                                const winner = secondMatch.penalties.home > secondMatch.penalties.away ? firstMatch.homeTeam : firstMatch.awayTeam;
                                                const loser = winner === firstMatch.homeTeam ? firstMatch.awayTeam : firstMatch.homeTeam;
                                                finalists.push(winner);
                                                thirdPlaceTeams.push(loser);
                                            }
                                        }
                                    }
                                });
                                
                                return `
                                    <span class="group-separator">•</span>
                                    <span class="group-label">Finalists:</span>
                                    ${finalists.map(team => `
                                        <span class="team-qualifier winner">
                                            ${getTeamName(team)} <span class="position-badge">FINAL</span>
                                        </span>
                                    `).join('')}
                                    <span class="group-separator">•</span>
                                    <span class="group-label">Third Place Playoff:</span>
                                    ${thirdPlaceTeams.map(team => `
                                        <span class="team-qualifier runner-up">
                                            ${getTeamName(team)} <span class="position-badge">3RD PLACE</span>
                                        </span>
                                    `).join('')}
                                `;
                            })() :
                            leagueData.knockouts.quarterFinals.every(match => match.status === 'completed') ? 
                            // Semi Finals Qualifiers
                            (() => {
                                const semiFinalists = [];
                                const eliminated = [];
                                
                                // Process Quarter Finals results to determine Semi Finalists
                                const qfTies = groupMatchesByTie(leagueData.knockouts.quarterFinals);
                                qfTies.forEach((tie, index) => {
                                    if (tie.matches.every(match => match.status === 'completed')) {
                                        const firstMatch = tie.matches[0];
                                        const secondMatch = tie.matches[1];
                                        
                                        if (firstMatch.score && secondMatch.score) {
                                            const homeAggregate = firstMatch.score.home + secondMatch.score.away;
                                            const awayAggregate = firstMatch.score.away + secondMatch.score.home;
                                            
                                            if (homeAggregate > awayAggregate) {
                                                semiFinalists.push(firstMatch.homeTeam);
                                                eliminated.push(firstMatch.awayTeam);
                                            } else if (awayAggregate > homeAggregate) {
                                                semiFinalists.push(firstMatch.awayTeam);
                                                eliminated.push(firstMatch.homeTeam);
                                            } else if (secondMatch.penalties) {
                                                // Penalty shootout winner
                                                const winner = secondMatch.penalties.home > secondMatch.penalties.away ? firstMatch.homeTeam : firstMatch.awayTeam;
                                                const loser = winner === firstMatch.homeTeam ? firstMatch.awayTeam : firstMatch.homeTeam;
                                                semiFinalists.push(winner);
                                                eliminated.push(loser);
                                            }
                                        }
                                    }
                                });
                                
                                return `
                                    <span class="group-separator">•</span>
                                    <span class="group-label">Semi Finalists:</span>
                                    ${semiFinalists.map(team => `
                                        <span class="team-qualifier winner">
                                            ${getTeamName(team)} <span class="position-badge">QUALIFIED</span>
                                        </span>
                                    `).join('')}
                                    <span class="group-separator">•</span>
                                    <span class="group-label">Eliminated:</span>
                                    ${eliminated.map(team => `
                                        <span class="team-qualifier eliminated">
                                            ${getTeamName(team)} <span class="eliminated-badge">ELIMINATED</span>
                                        </span>
                                    `).join('')}
                                `;
                            })() :
                            leagueData.knockouts.roundOf16.every(match => match.status === 'completed') ? 
                            // Quarter Finals Qualifiers
                            (() => {
                                const quarterFinalists = [];
                                const eliminated = [];
                                
                                // Process Round of 16 results to determine Quarter Finalists
                                const r16Ties = groupMatchesByTie(leagueData.knockouts.roundOf16);
                                r16Ties.forEach((tie, index) => {
                                    if (tie.matches.every(match => match.status === 'completed')) {
                                        const firstMatch = tie.matches[0];
                                        const secondMatch = tie.matches[1];
                                        
                                        if (firstMatch.score && secondMatch.score) {
                                            const homeAggregate = firstMatch.score.home + secondMatch.score.away;
                                            const awayAggregate = firstMatch.score.away + secondMatch.score.home;
                                            
                                            if (homeAggregate > awayAggregate) {
                                                quarterFinalists.push(firstMatch.homeTeam);
                                                eliminated.push(firstMatch.awayTeam);
                                            } else if (awayAggregate > homeAggregate) {
                                                quarterFinalists.push(firstMatch.awayTeam);
                                                eliminated.push(firstMatch.homeTeam);
                                            } else if (secondMatch.penalties) {
                                                // Penalty shootout winner
                                                const winner = secondMatch.penalties.home > secondMatch.penalties.away ? firstMatch.homeTeam : firstMatch.awayTeam;
                                                const loser = winner === firstMatch.homeTeam ? firstMatch.awayTeam : firstMatch.homeTeam;
                                                quarterFinalists.push(winner);
                                                eliminated.push(loser);
                                            }
                                        }
                                    }
                                });
                                
                                return `
                                    <span class="group-separator">•</span>
                                    <span class="group-label">Quarter Finalists:</span>
                                    ${quarterFinalists.map(team => `
                                        <span class="team-qualifier winner">
                                            ${getTeamName(team)} <span class="position-badge">QUALIFIED</span>
                                        </span>
                                    `).join('')}
                                    <span class="group-separator">•</span>
                                    <span class="group-label">Eliminated:</span>
                                    ${eliminated.map(team => `
                                        <span class="team-qualifier eliminated">
                                            ${getTeamName(team)} <span class="eliminated-badge">ELIMINATED</span>
                                        </span>
                                    `).join('')}
                                `;
                            })() :
                            // Round of 16 Qualifiers (original group display)
                            Object.keys(leagueData.groups).map(groupKey => {
                                const group = leagueData.groups[groupKey];
                                const groupLetter = groupKey.replace('group', '').toUpperCase();
                                const allTeams = group.slice(0, 6);
                                
                                return `
                                    <span class="group-separator">•</span>
                                    <span class="group-label">Group ${groupLetter}:</span>
                                    ${allTeams.map((team, index) => `
                                        <span class="team-qualifier ${index === 0 ? 'winner' : index === 1 ? 'runner-up' : index === 2 ? 'third' : index === 3 ? 'fourth' : index === 4 ? 'fifth' : 'sixth'}">
                                            ${getTeamName(team.id)} <span class="position-badge">${index === 0 ? '1st' : index === 1 ? '2nd' : index === 2 ? '3rd' : index === 3 ? '4th' : index === 4 ? '5th' : '6th'}</span>
                                            ${index >= 4 ? '<span class="eliminated-badge">ELIMINATED</span>' : ''}
                                        </span>
                                    `).join('')}
                                `;
                            }).join('')
                        }
                        <!-- Duplicate for seamless loop -->
                        ${leagueData.knockouts.semiFinals.every(match => match.status === 'completed') ? 
                            // Finals & Third Place Playoff (duplicate)
                            (() => {
                                const finalists = [];
                                const thirdPlaceTeams = [];
                                
                                const sfTies = groupMatchesByTie(leagueData.knockouts.semiFinals);
                                sfTies.forEach((tie, index) => {
                                    if (tie.matches.every(match => match.status === 'completed')) {
                                        const firstMatch = tie.matches[0];
                                        const secondMatch = tie.matches[1];
                                        
                                        if (firstMatch.score && secondMatch.score) {
                                            const homeAggregate = firstMatch.score.home + secondMatch.score.away;
                                            const awayAggregate = firstMatch.score.away + secondMatch.score.home;
                                            
                                            if (homeAggregate > awayAggregate) {
                                                finalists.push(firstMatch.homeTeam);
                                                thirdPlaceTeams.push(firstMatch.awayTeam);
                                            } else if (awayAggregate > homeAggregate) {
                                                finalists.push(firstMatch.awayTeam);
                                                thirdPlaceTeams.push(firstMatch.homeTeam);
                                            } else if (secondMatch.penalties) {
                                                const winner = secondMatch.penalties.home > secondMatch.penalties.away ? firstMatch.homeTeam : firstMatch.awayTeam;
                                                const loser = winner === firstMatch.homeTeam ? firstMatch.awayTeam : firstMatch.homeTeam;
                                                finalists.push(winner);
                                                thirdPlaceTeams.push(loser);
                                            }
                                        }
                                    }
                                });
                                
                                return `
                                    <span class="group-separator">•</span>
                                    <span class="group-label">Finalists:</span>
                                    ${finalists.map(team => `
                                        <span class="team-qualifier winner">
                                            ${getTeamName(team)} <span class="position-badge">FINAL</span>
                                        </span>
                                    `).join('')}
                                    <span class="group-separator">•</span>
                                    <span class="group-label">Third Place Playoff:</span>
                                    ${thirdPlaceTeams.map(team => `
                                        <span class="team-qualifier runner-up">
                                            ${getTeamName(team)} <span class="position-badge">3RD PLACE</span>
                                        </span>
                                    `).join('')}
                                `;
                            })() :
                            leagueData.knockouts.quarterFinals.every(match => match.status === 'completed') ? 
                            // Semi Finals Qualifiers (duplicate)
                            (() => {
                                const semiFinalists = [];
                                const eliminated = [];
                                
                                const qfTies = groupMatchesByTie(leagueData.knockouts.quarterFinals);
                                qfTies.forEach((tie, index) => {
                                    if (tie.matches.every(match => match.status === 'completed')) {
                                        const firstMatch = tie.matches[0];
                                        const secondMatch = tie.matches[1];
                                        
                                        if (firstMatch.score && secondMatch.score) {
                                            const homeAggregate = firstMatch.score.home + secondMatch.score.away;
                                            const awayAggregate = firstMatch.score.away + secondMatch.score.home;
                                            
                                            if (homeAggregate > awayAggregate) {
                                                semiFinalists.push(firstMatch.homeTeam);
                                                eliminated.push(firstMatch.awayTeam);
                                            } else if (awayAggregate > homeAggregate) {
                                                semiFinalists.push(firstMatch.awayTeam);
                                                eliminated.push(firstMatch.homeTeam);
                                            } else if (secondMatch.penalties) {
                                                const winner = secondMatch.penalties.home > secondMatch.penalties.away ? firstMatch.homeTeam : firstMatch.awayTeam;
                                                const loser = winner === firstMatch.homeTeam ? firstMatch.awayTeam : firstMatch.homeTeam;
                                                semiFinalists.push(winner);
                                                eliminated.push(loser);
                                            }
                                        }
                                    }
                                });
                                
                                return `
                                    <span class="group-separator">•</span>
                                    <span class="group-label">Semi Finalists:</span>
                                    ${semiFinalists.map(team => `
                                        <span class="team-qualifier winner">
                                            ${getTeamName(team)} <span class="position-badge">QUALIFIED</span>
                                        </span>
                                    `).join('')}
                                    <span class="group-separator">•</span>
                                    <span class="group-label">Eliminated:</span>
                                    ${eliminated.map(team => `
                                        <span class="team-qualifier eliminated">
                                            ${getTeamName(team)} <span class="eliminated-badge">ELIMINATED</span>
                                        </span>
                                    `).join('')}
                                `;
                            })() :
                            leagueData.knockouts.roundOf16.every(match => match.status === 'completed') ? 
                            // Quarter Finals Qualifiers (duplicate)
                            (() => {
                                const quarterFinalists = [];
                                const eliminated = [];
                                
                                const r16Ties = groupMatchesByTie(leagueData.knockouts.roundOf16);
                                r16Ties.forEach((tie, index) => {
                                    if (tie.matches.every(match => match.status === 'completed')) {
                                        const firstMatch = tie.matches[0];
                                        const secondMatch = tie.matches[1];
                                        
                                        if (firstMatch.score && secondMatch.score) {
                                            const homeAggregate = firstMatch.score.home + secondMatch.score.away;
                                            const awayAggregate = firstMatch.score.away + secondMatch.score.home;
                                            
                                            if (homeAggregate > awayAggregate) {
                                                quarterFinalists.push(firstMatch.homeTeam);
                                                eliminated.push(firstMatch.awayTeam);
                                            } else if (awayAggregate > homeAggregate) {
                                                quarterFinalists.push(firstMatch.awayTeam);
                                                eliminated.push(firstMatch.homeTeam);
                                            } else if (secondMatch.penalties) {
                                                const winner = secondMatch.penalties.home > secondMatch.penalties.away ? firstMatch.homeTeam : firstMatch.awayTeam;
                                                const loser = winner === firstMatch.homeTeam ? firstMatch.awayTeam : firstMatch.homeTeam;
                                                quarterFinalists.push(winner);
                                                eliminated.push(loser);
                                            }
                                        }
                                    }
                                });
                                
                                return `
                                    <span class="group-separator">•</span>
                                    <span class="group-label">Quarter Finalists:</span>
                                    ${quarterFinalists.map(team => `
                                        <span class="team-qualifier winner">
                                            ${getTeamName(team)} <span class="position-badge">QUALIFIED</span>
                                        </span>
                                    `).join('')}
                                    <span class="group-separator">•</span>
                                    <span class="group-label">Eliminated:</span>
                                    ${eliminated.map(team => `
                                        <span class="team-qualifier eliminated">
                                            ${getTeamName(team)} <span class="eliminated-badge">ELIMINATED</span>
                                        </span>
                                    `).join('')}
                                `;
                            })() :
                            // Round of 16 Qualifiers (duplicate)
                            Object.keys(leagueData.groups).map(groupKey => {
                                const group = leagueData.groups[groupKey];
                                const groupLetter = groupKey.replace('group', '').toUpperCase();
                                const allTeams = group.slice(0, 6);
                                
                                return `
                                    <span class="group-separator">•</span>
                                    <span class="group-label">Group ${groupLetter}:</span>
                                    ${allTeams.map((team, index) => `
                                        <span class="team-qualifier ${index === 0 ? 'winner' : index === 1 ? 'runner-up' : index === 2 ? 'third' : index === 3 ? 'fourth' : index === 4 ? 'fifth' : 'sixth'}">
                                            ${getTeamName(team.id)} <span class="position-badge">${index === 0 ? '1st' : index === 1 ? '2nd' : index === 2 ? '3rd' : index === 3 ? '4th' : index === 4 ? '5th' : '6th'}</span>
                                            ${index >= 4 ? '<span class="eliminated-badge">ELIMINATED</span>' : ''}
                                        </span>
                                    `).join('')}
                                `;
                            }).join('')
                        }
                    </div>
                </div>
            </div>
            ` : ''}

            <div class="home-sections-grid">
                <!-- Recent Results Section -->
                <div class="home-section">
                    <div class="section-header">
                        <h2><i class="fas fa-history"></i> Recent Results</h2>
                        <button class="view-all-btn" onclick="loadPage('fixtures')">View All</button>
                    </div>
                    <div class="fixtures-container">
                        ${recentMatches.length > 0 ? recentMatches.map((fixture, index) => {
                            // Determine if this is a knockout match
                            const isKnockout = fixture.round && !fixture.group;
                            const matchType = isKnockout ? fixture.round : `Group ${fixture.group}`;
                            const matchId = fixture.id || `${fixture.round}_${fixture.tie || fixture.matchNumber}`;
                            
                            return `
                                <div class="fixture-card completed" onclick="loadDetailedFixturePage('${matchId}')" style="cursor: pointer;">
                                    <div class="fixture-teams">
                                        <div class="team">
                                            ${getTeamLogo(fixture.homeTeam, '40px', false)}
                                            <span style="color: white;">${getTeamName(fixture.homeTeam)}</span>
                                        </div>
                                        <div class="vs completed">
                                            ${fixture.status === 'completed' && fixture.score ? `${fixture.score.home} - ${fixture.score.away}` : 'vs'}
                                        </div>
                                        <div class="team">
                                            <span style="color: white;">${getTeamName(fixture.awayTeam)}</span>
                                            ${getTeamLogo(fixture.awayTeam, '40px', false)}
                                        </div>
                                    </div>
                                    <div class="fixture-details">
                                        <span><i class="fas fa-calendar"></i> ${fixture.date}</span>
                                        <span><i class="fas fa-trophy"></i> ${matchType}</span>
                                        ${isKnockout && fixture.leg ? `<span><i class="fas fa-exchange-alt"></i> ${fixture.leg} Leg</span>` : ''}
                                        ${isKnockout && fixture.penalties ? `<span><i class="fas fa-crosshairs"></i> Penalties: ${fixture.penalties.home}-${fixture.penalties.away}</span>` : ''}
                                    </div>
                                </div>
                                ${index < recentMatches.length - 1 ? '<div class="match-divider"></div>' : ''}
                            `;
                        }).join('') : `
                            <div class="no-data-message">
                                <i class="fas fa-info-circle"></i>
                                <p>No recent matches to display</p>
                            </div>
                        `}
                    </div>
                </div>

                <!-- Upcoming Matches Section -->
                <div class="home-section">
                    <div class="section-header">
                        <h2><i class="fas fa-clock"></i> Upcoming Matches</h2>
                        <button class="view-all-btn" onclick="loadPage('fixtures')">View All</button>
                    </div>
                    <div class="fixtures-container">
                        ${upcomingMatches.length > 0 ? upcomingMatches.map((fixture, index) => {
                            // Determine if this is a knockout match
                            const isKnockout = fixture.round && !fixture.group;
                            const matchType = isKnockout ? fixture.round : `Group ${fixture.group}`;
                            const matchId = fixture.id || `${fixture.round}_${fixture.tie || fixture.matchNumber}`;
                            
                            return `
                                <div class="fixture-card scheduled" onclick="loadDetailedFixturePage('${matchId}')" style="cursor: pointer;">
                                    <div class="fixture-teams">
                                        <div class="team">
                                            ${getTeamLogo(fixture.homeTeam, '40px', false)}
                                            <span style="color: white;">${getTeamName(fixture.homeTeam)}</span>
                                        </div>
                                        <div class="vs scheduled">vs</div>
                                        <div class="team">
                                            <span style="color: white;">${getTeamName(fixture.awayTeam)}</span>
                                            ${getTeamLogo(fixture.awayTeam, '40px', false)}
                                        </div>
                                    </div>
                                    <div class="fixture-details">
                                        <span><i class="fas fa-calendar"></i> ${fixture.date}</span>
                                        <span><i class="fas fa-trophy"></i> ${matchType}</span>
                                        ${isKnockout && fixture.leg ? `<span><i class="fas fa-exchange-alt"></i> ${fixture.leg} Leg</span>` : ''}
                                    </div>
                                </div>
                                ${index < upcomingMatches.length - 1 ? '<div class="match-divider"></div>' : ''}
                            `;
                        }).join('') : `
                            <div class="no-data-message">
                                <i class="fas fa-info-circle"></i>
                                <p>No upcoming matches scheduled</p>
                            </div>
                        `}
                    </div>
                </div>

                <!-- Group Leaders Section -->
                <div class="home-section">
                    <div class="section-header">
                        <h2><i class="fas fa-crown"></i> Group Leaders</h2>
                        <button class="view-all-btn" onclick="loadPage('table')">View Tables</button>
                    </div>
                    <div class="leaders-grid">
                        ${topTeams.map(team => `
                            <div class="leader-card" onclick="loadDetailedTeamPage(${JSON.stringify(teamsData[team.id]).replace(/"/g, '&quot;')})" style="cursor: pointer;">
                                <div class="leader-header">
                                    ${getTeamLogo(team.id, '50px', false)}
                                    <div class="leader-info">
                                        <h3>${team.name}</h3>
                                        <span class="group-badge">Group ${team.group}</span>
                                    </div>
                                </div>
                                <div class="leader-stats">
                                    <div class="stat">
                                        <span class="stat-value">${team.points}</span>
                                        <span class="stat-label">Points</span>
                                    </div>
                                    <div class="stat">
                                        <span class="stat-value">${team.played}</span>
                                        <span class="stat-label">Played</span>
                                    </div>
                                    <div class="stat">
                                        <span class="stat-value">${team.won}W ${team.drawn}D ${team.lost}L</span>
                                        <span class="stat-label">Record</span>
                                    </div>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>

                <!-- Quick Navigation Section -->
                <div class="home-section">
                    <div class="section-header">
                        <h2><i class="fas fa-compass"></i> Quick Navigation</h2>
                    </div>
                    <div class="quick-nav-grid">
                        <div class="quick-nav-card" onclick="loadPage('fixtures')">
                            <i class="fas fa-calendar-alt"></i>
                            <h3>Fixtures</h3>
                            <p>View all matches and results</p>
                        </div>
                        <div class="quick-nav-card" onclick="loadPage('table')">
                            <i class="fas fa-table"></i>
                            <h3>Tables</h3>
                            <p>Check group standings</p>
                        </div>
                        <div class="quick-nav-card" onclick="loadPage('knockouts')">
                            <i class="fas fa-trophy"></i>
                            <h3>Knockouts</h3>
                            <p>Follow the knockout stages</p>
                        </div>
                        <div class="quick-nav-card" onclick="loadPage('clubs')">
                            <i class="fas fa-users"></i>
                            <h3>Clubs</h3>
                            <p>Explore all teams</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

function generateFixturesPage() {
    try {
        // Calculate group standings before displaying
        calculateGroupStandings();
        
    return `
        <div class="page-container">
                    <h1 class="page-title">Group Stage Fixtures</h1>
                
                    <!-- Sorting Dropdowns -->
                    <div class="sorting-dropdowns">
                        <div class="sort-category">
                            <h3>Matchday</h3>
                            <select class="sort-dropdown" onchange="filterByMatchday(this.value)">
                                <option value="all">All</option>
                                <option value="1">Matchday 1</option>
                                <option value="2">Matchday 2</option>
                                <option value="3">Matchday 3</option>
                                <option value="4">Matchday 4</option>
                            </select>
                        </div>
                        
                        <div class="sort-category">
                            <h3>Groups</h3>
                            <select class="sort-dropdown" onchange="filterByGroup(this.value)">
                                <option value="all">All</option>
                                <option value="A">Group A</option>
                                <option value="B">Group B</option>
                                <option value="C">Group C</option>
                                <option value="D">Group D</option>
                            </select>
                        </div>
                        
                        <div class="sort-category">
                            <h3>Teams</h3>
                            <select class="sort-dropdown" onchange="filterByTeam(this.value)">
                                <option value="all">All</option>
                                ${Object.keys(teamsData).map(teamId => `
                                    <option value="${teamId}">${teamsData[teamId].name}</option>
                                `).join('')}
                            </select>
                        </div>
                        
                        <div class="sort-category">
                            <h3>Status</h3>
                            <select class="sort-dropdown" onchange="filterByStatus(this.value)">
                                <option value="all">All</option>
                                <option value="completed">Completed</option>
                                <option value="scheduled">Scheduled</option>
                                <option value="pending">Pending</option>
                            </select>
                        </div>
                    </div>

                    <!-- Filtered Fixtures Display -->
                    <div class="filtered-fixtures">
                        <h2 class="section-title"><i class="fas fa-list"></i> Filtered Fixtures</h2>
                        <div id="filteredFixtures" class="fixtures-container">
                            ${generateAllFixtures()}
                        </div>
                    </div>
                
                    <!-- Group A -->
                <div class="group-section">
                    <h2 class="group-title"><i class="fas fa-trophy"></i> Group A</h2>
            <div class="fixtures-container">
                        ${leagueData.groupFixtures.filter(f => f.group === 'A').map(fixture => `
                            <div class="fixture-item">
                                <div class="matchday-badge">Matchday ${fixture.matchday}</div>
                        <div class="fixture-teams">
                            <div class="team">
                                        ${getTeamLogo(fixture.homeTeam, '50px', false)}
                                        <span>${getTeamName(fixture.homeTeam)}</span>
                            </div>
                                    <div class="vs">
                                        ${fixture.status === 'completed' && fixture.score ? `${fixture.score.home} - ${fixture.score.away}` : 'vs'}
                                    </div>
                            <div class="team">
                                        <span>${getTeamName(fixture.awayTeam)}</span>
                                        ${getTeamLogo(fixture.awayTeam, '50px', false)}
                            </div>
                        </div>
                        <div class="fixture-details">
                                    <span><i class="fas fa-calendar"></i> ${fixture.date}</span>
                                    <span><i class="fas fa-clock"></i> ${fixture.time}</span>
                                    <span class="status ${fixture.status}">${fixture.status}</span>
                        </div>
                    </div>
                `).join('')}
                    </div>
                </div>

                <!-- Group B -->
                <div class="group-section">
                    <h2 class="group-title"><i class="fas fa-trophy"></i> Group B</h2>
                    <div class="fixtures-container">
                        ${leagueData.groupFixtures.filter(f => f.group === 'B').map(fixture => `
                            <div class="fixture-item">
                                <div class="matchday-badge">Matchday ${fixture.matchday}</div>
                                <div class="fixture-teams">
                                    <div class="team">
                                        ${getTeamLogo(fixture.homeTeam, '50px', false)}
                                        <span>${getTeamName(fixture.homeTeam)}</span>
                                    </div>
                                    <div class="vs">
                                        ${fixture.status === 'completed' && fixture.score ? `${fixture.score.home} - ${fixture.score.away}` : 'vs'}
                                    </div>
                                    <div class="team">
                                        <span>${getTeamName(fixture.awayTeam)}</span>
                                        ${getTeamLogo(fixture.awayTeam, '50px', false)}
                                    </div>
                                </div>
                                <div class="fixture-details">
                                    <span><i class="fas fa-calendar"></i> ${fixture.date}</span>
                                    <span><i class="fas fa-clock"></i> ${fixture.time}</span>
                                    <span class="status ${fixture.status}">${fixture.status}</span>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>

                <!-- Group C -->
                <div class="group-section">
                    <h2 class="group-title"><i class="fas fa-trophy"></i> Group C</h2>
                    <div class="fixtures-container">
                        ${leagueData.groupFixtures.filter(f => f.group === 'C').map(fixture => `
                            <div class="fixture-item">
                                <div class="matchday-badge">Matchday ${fixture.matchday}</div>
                                <div class="fixture-teams">
                                    <div class="team">
                                        ${getTeamLogo(fixture.homeTeam, '50px', false)}
                                        <span>${getTeamName(fixture.homeTeam)}</span>
                                    </div>
                                    <div class="vs">
                                        ${fixture.status === 'completed' && fixture.score ? `${fixture.score.home} - ${fixture.score.away}` : 'vs'}
                                    </div>
                                    <div class="team">
                                        <span>${getTeamName(fixture.awayTeam)}</span>
                                        ${getTeamLogo(fixture.awayTeam, '50px', false)}
                                    </div>
                                </div>
                                <div class="fixture-details">
                                    <span><i class="fas fa-calendar"></i> ${fixture.date}</span>
                                    <span><i class="fas fa-clock"></i> ${fixture.time}</span>
                                    <span class="status ${fixture.status}">${fixture.status}</span>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>

                <!-- Group D -->
                <div class="group-section">
                    <h2 class="group-title"><i class="fas fa-trophy"></i> Group D</h2>
                    <div class="fixtures-container">
                        ${leagueData.groupFixtures.filter(f => f.group === 'D').map(fixture => `
                            <div class="fixture-item">
                                <div class="matchday-badge">Matchday ${fixture.matchday}</div>
                                <div class="fixture-teams">
                                    <div class="team">
                                        ${getTeamLogo(fixture.homeTeam, '50px', false)}
                                        <span>${getTeamName(fixture.homeTeam)}</span>
                                    </div>
                                    <div class="vs">
                                        ${fixture.status === 'completed' && fixture.score ? `${fixture.score.home} - ${fixture.score.away}` : 'vs'}
                                    </div>
                                    <div class="team">
                                        <span>${getTeamName(fixture.awayTeam)}</span>
                                        ${getTeamLogo(fixture.awayTeam, '50px', false)}
                                    </div>
                                </div>
                                <div class="fixture-details">
                                    <span><i class="fas fa-calendar"></i> ${fixture.date}</span>
                                    <span><i class="fas fa-clock"></i> ${fixture.time}</span>
                                    <span class="status ${fixture.status}">${fixture.status}</span>
                                </div>
                            </div>
                        `).join('')}
                    </div>
            </div>
        </div>
    `;
    } catch (error) {
        console.error('Error in generateFixturesPage:', error);
        return `
            <div class="page-container">
                <h1 class="page-title">Error Loading Fixtures</h1>
                <p>There was an error loading the fixtures page. Please try again.</p>
                <p>Error: ${error.message}</p>
            </div>
        `;
    }
}

function generateTablePage() {
    try {
        // Calculate group standings before displaying
        calculateGroupStandings();
    
    return `
        <div class="page-container">
                <h1 class="page-title">Group Tables</h1>
                
                <!-- Group A Table -->
                <div class="group-table-section">
                    <h2 class="group-title"><i class="fas fa-trophy"></i> Group A</h2>
            <div class="table-container">
                <table class="league-table">
                    <thead>
                        <tr>
                            <th>Pos</th>
                            <th>Team</th>
                            <th>P</th>
                            <th>W</th>
                            <th>D</th>
                            <th>L</th>
                            <th>GF</th>
                            <th>GA</th>
                            <th>GD</th>
                            <th>Pts</th>
                        </tr>
                    </thead>
                    <tbody>
                                ${leagueData.groups.groupA.map((team, index) => `
                                    <tr class="${index < 4 ? 'qualified' : ''}">
                                        <td class="position">${index + 1}</td>
                                        <td>
                                            <div class="team-row">
                                                ${getTeamLogo(team.id, '35px', false)}
                                                <span>${team.name}</span>
                                            </div>
                                        </td>
                                        <td>${team.played}</td>
                                        <td>${team.won}</td>
                                        <td>${team.drawn}</td>
                                        <td>${team.lost}</td>
                                        <td>${team.goalsFor}</td>
                                        <td>${team.goalsAgainst}</td>
                                        <td>${team.goalDifference}</td>
                                        <td><strong>${team.points}</strong></td>
                                    </tr>
                                `).join('')}
                            </tbody>
                        </table>
                    </div>
                </div>

                <!-- Group B Table -->
                <div class="group-table-section">
                    <h2 class="group-title"><i class="fas fa-trophy"></i> Group B</h2>
                    <div class="table-container">
                        <table class="league-table">
                            <thead>
                                <tr>
                                    <th>Pos</th>
                                    <th>Team</th>
                                    <th>P</th>
                                    <th>W</th>
                                    <th>D</th>
                                    <th>L</th>
                                    <th>GF</th>
                                    <th>GA</th>
                                    <th>GD</th>
                                    <th>Pts</th>
                                </tr>
                            </thead>
                            <tbody>
                                ${leagueData.groups.groupB.map((team, index) => `
                                    <tr class="${index < 4 ? 'qualified' : ''}">
                                <td class="position">${index + 1}</td>
                                <td>
                                    <div class="team-row">
                                                ${getTeamLogo(team.id, '35px', false)}
                                        <span>${team.name}</span>
                                    </div>
                                </td>
                                <td>${team.played}</td>
                                <td>${team.won}</td>
                                <td>${team.drawn}</td>
                                <td>${team.lost}</td>
                                <td>${team.goalsFor}</td>
                                <td>${team.goalsAgainst}</td>
                                        <td>${team.goalDifference}</td>
                                <td><strong>${team.points}</strong></td>
                            </tr>
                        `).join('')}
                    </tbody>
                </table>
                    </div>
                </div>

                <!-- Group C Table -->
                <div class="group-table-section">
                    <h2 class="group-title"><i class="fas fa-trophy"></i> Group C</h2>
                    <div class="table-container">
                        <table class="league-table">
                            <thead>
                                <tr>
                                    <th>Pos</th>
                                    <th>Team</th>
                                    <th>P</th>
                                    <th>W</th>
                                    <th>D</th>
                                    <th>L</th>
                                    <th>GF</th>
                                    <th>GA</th>
                                    <th>GD</th>
                                    <th>Pts</th>
                                </tr>
                            </thead>
                            <tbody>
                                ${leagueData.groups.groupC.map((team, index) => `
                                    <tr class="${index < 4 ? 'qualified' : ''}">
                                        <td class="position">${index + 1}</td>
                                        <td>
                                            <div class="team-row">
                                                ${getTeamLogo(team.id, '35px', false)}
                                                <span>${team.name}</span>
                                            </div>
                                        </td>
                                        <td>${team.played}</td>
                                        <td>${team.won}</td>
                                        <td>${team.drawn}</td>
                                        <td>${team.lost}</td>
                                        <td>${team.goalsFor}</td>
                                        <td>${team.goalsAgainst}</td>
                                        <td>${team.goalDifference}</td>
                                        <td><strong>${team.points}</strong></td>
                                    </tr>
                                `).join('')}
                            </tbody>
                        </table>
                    </div>
                </div>

                <!-- Group D Table -->
                <div class="group-table-section">
                    <h2 class="group-title"><i class="fas fa-trophy"></i> Group D</h2>
                    <div class="table-container">
                        <table class="league-table">
                            <thead>
                                <tr>
                                    <th>Pos</th>
                                    <th>Team</th>
                                    <th>P</th>
                                    <th>W</th>
                                    <th>D</th>
                                    <th>L</th>
                                    <th>GF</th>
                                    <th>GA</th>
                                    <th>GD</th>
                                    <th>Pts</th>
                                </tr>
                            </thead>
                            <tbody>
                                ${leagueData.groups.groupD.map((team, index) => `
                                    <tr class="${index < 4 ? 'qualified' : ''}">
                                        <td class="position">${index + 1}</td>
                                        <td>
                                            <div class="team-row">
                                                ${getTeamLogo(team.id, '35px', false)}
                                                <span>${team.name}</span>
                                            </div>
                                        </td>
                                        <td>${team.played}</td>
                                        <td>${team.won}</td>
                                        <td>${team.drawn}</td>
                                        <td>${team.lost}</td>
                                        <td>${team.goalsFor}</td>
                                        <td>${team.goalsAgainst}</td>
                                        <td>${team.goalDifference}</td>
                                        <td><strong>${team.points}</strong></td>
                                    </tr>
                                `).join('')}
                            </tbody>
                        </table>
                    </div>
            </div>
        </div>
    `;
    } catch (error) {
        console.error('Error in generateTablePage:', error);
        return `
            <div class="page-container">
                <h1 class="page-title">Error Loading Tables</h1>
                <p>There was an error loading the tables page. Please try again.</p>
                <p>Error: ${error.message}</p>
            </div>
        `;
    }
}

// Function to generate bracket matches for tournament view
function generateBracketMatches(matches, expectedMatches) {
    // Check if this is a single match (Final or TPP) or two-legged tie
    const isSingleMatch = matches.length === expectedMatches;
    
    if (isSingleMatch) {
        // Handle single matches (Final, TPP)
        return matches.map(match => {
            const winner = match.status === 'completed' && match.score ? 
                (match.score.home > match.score.away ? match.homeTeam : 
                 match.score.away > match.score.home ? match.awayTeam : 'TBD') : 'TBD';
            
            return `
                <div class="bracket-match ${match.status}">
                    <div class="bracket-team home ${match.status === 'completed' && winner === match.homeTeam ? 'winner' : ''}">
                        ${getTeamLogo(match.homeTeam, '30px', false)}
                        <span class="team-name">${match.homeTeam === 'TBD' ? 'TBD' : getTeamName(match.homeTeam)}</span>
                        ${match.status === 'completed' && match.score ? `<span class="score">${match.score.home}</span>` : ''}
                    </div>
                    <div class="bracket-team away ${match.status === 'completed' && winner === match.awayTeam ? 'winner' : ''}">
                        ${getTeamLogo(match.awayTeam, '30px', false)}
                        <span class="team-name">${match.awayTeam === 'TBD' ? 'TBD' : getTeamName(match.awayTeam)}</span>
                        ${match.status === 'completed' && match.score ? `<span class="score">${match.score.away}</span>` : ''}
                    </div>
                    ${match.status === 'completed' && match.penalties ? `<div class="penalties-indicator">(${match.penalties.home}-${match.penalties.away} pen)</div>` : ''}
                </div>
            `;
        }).join('');
    } else {
        // Handle two-legged ties (Round of 16, Quarter Finals, Semi Finals)
        const ties = groupMatchesByTie(matches);
        
        // Create array of expected matches
        const bracketMatches = [];
        for (let i = 0; i < expectedMatches; i++) {
            const tie = ties[i] || { matches: [] };
            const firstMatch = tie.matches[0] || { homeTeam: 'TBD', awayTeam: 'TBD', status: 'scheduled', score: null };
            const secondMatch = tie.matches[1] || { homeTeam: 'TBD', awayTeam: 'TBD', status: 'scheduled', score: null };
            
            // Check if both legs are completed
            const bothLegsCompleted = firstMatch.status === 'completed' && secondMatch.status === 'completed';
            
            // Determine winner based on aggregate score only if both legs are completed
            let winner = 'TBD';
            let aggregateScore = null;
            let penalties = null;
            
            if (bothLegsCompleted && firstMatch.score && secondMatch.score) {
                const homeAggregate = firstMatch.score.home + (secondMatch.score.away || 0);
                const awayAggregate = firstMatch.score.away + (secondMatch.score.home || 0);
                
                aggregateScore = { home: homeAggregate, away: awayAggregate };
                
                if (homeAggregate > awayAggregate) {
                    winner = firstMatch.homeTeam;
                } else if (awayAggregate > homeAggregate) {
                    winner = firstMatch.awayTeam;
                } else {
                    // Check penalties if scores are equal
                    if (secondMatch.penalties) {
                        penalties = secondMatch.penalties;
                        winner = secondMatch.penalties.home > secondMatch.penalties.away ? firstMatch.homeTeam : firstMatch.awayTeam;
                    } else {
                        winner = 'TBD';
                    }
                }
            }
            
            bracketMatches.push({
                tie: i + 1,
                homeTeam: firstMatch.homeTeam,
                awayTeam: firstMatch.awayTeam,
                winner: winner,
                status: bothLegsCompleted ? 'completed' : 'scheduled',
                aggregateScore: aggregateScore,
                penalties: penalties,
                firstLegScore: firstMatch.score,
                secondLegScore: secondMatch.score
            });
                }
        
        return bracketMatches.map(match => `
            <div class="bracket-match ${match.status}">
                <div class="bracket-team home ${match.status === 'completed' && match.winner === match.homeTeam ? 'winner' : ''}">
                    ${getTeamLogo(match.homeTeam, '30px', false)}
                    <span class="team-name">${match.homeTeam === 'TBD' ? 'TBD' : getTeamName(match.homeTeam)}</span>
                    ${match.status === 'completed' && match.aggregateScore ? `<span class="score">${match.aggregateScore.home}</span>` : ''}
                </div>
                <div class="bracket-team away ${match.status === 'completed' && match.winner === match.awayTeam ? 'winner' : ''}">
                    ${getTeamLogo(match.awayTeam, '30px', false)}
                    <span class="team-name">${match.awayTeam === 'TBD' ? 'TBD' : getTeamName(match.awayTeam)}</span>
                    ${match.status === 'completed' && match.aggregateScore ? `<span class="score">${match.aggregateScore.away}</span>` : ''}
                </div>
                ${match.status === 'completed' && match.penalties ? `<div class="penalties-indicator">(${match.penalties.home}-${match.penalties.away} pen)</div>` : ''}
                ${match.status === 'completed' && match.firstLegScore && match.secondLegScore ? `<div class="leg-results">H: ${match.firstLegScore.home}-${match.firstLegScore.away} | A: ${match.secondLegScore.home}-${match.secondLegScore.away}</div>` : ''}
            </div>
        `).join('');
    }
}

// Function to switch between knockout tabs
function switchKnockoutTab(tabName) {
    // Hide all tab contents
    const tabContents = document.querySelectorAll('.tab-content');
    tabContents.forEach(content => content.classList.remove('active'));
    
    // Remove active class from all tab buttons
    const tabButtons = document.querySelectorAll('.tab-button');
    tabButtons.forEach(button => button.classList.remove('active'));
    
    // Show selected tab content
    const selectedTab = document.getElementById(tabName + '-tab');
    if (selectedTab) {
        selectedTab.classList.add('active');
    }
    
    // Add active class to clicked button
    const clickedButton = event.target.closest('.tab-button');
    if (clickedButton) {
        clickedButton.classList.add('active');
    }
}

function generateKnockoutsPage() {
    return `
        <div class="page-container">
            <h1 class="page-title">Knockout Stages</h1>
            
            <!-- Tournament Bracket Visualization -->
            <div class="brackets-visualization">
                <div class="brackets-header">
                    <h2><i class="fas fa-sitemap"></i> Tournament Bracket</h2>
                    <p>Visual representation of the knockout tournament structure</p>
                </div>
                <div class="brackets-container">
                    <img src="images/brackets/brackets.svg" alt="Tournament Bracket" class="brackets-svg">
                </div>
            </div>
            
            <!-- Tab Navigation -->
            <div class="knockout-tabs">
                <button class="tab-button active" onclick="switchKnockoutTab('bracket')">
                    <i class="fas fa-sitemap"></i> Tournament Bracket
                </button>
                <button class="tab-button" onclick="switchKnockoutTab('details')">
                    <i class="fas fa-list"></i> Match Details
                </button>
            </div>
            
            <!-- Bracket Tab Content -->
            <div id="bracket-tab" class="tab-content active">
                <div class="tournament-bracket">
                    <div class="bracket-round round-of-16">
                        <h3 class="round-label">Round of 16</h3>
                        <div class="bracket-matches">
                            ${generateBracketMatches(leagueData.knockouts.roundOf16, 8)}
                        </div>
                    </div>
                    
                    <div class="bracket-round quarter-finals">
                        <h3 class="round-label">Quarter Finals</h3>
                        <div class="bracket-matches">
                            ${generateBracketMatches(leagueData.knockouts.quarterFinals, 4)}
                        </div>
                    </div>
                    
                    <div class="bracket-round semi-finals">
                        <h3 class="round-label">Semi Finals</h3>
                        <div class="bracket-matches">
                            ${generateBracketMatches(leagueData.knockouts.semiFinals, 2)}
                        </div>
                    </div>
                    
                    <div class="bracket-round final">
                        <h3 class="round-label">Final</h3>
                        <div class="bracket-matches">
                            ${generateBracketMatches(leagueData.knockouts.final, 1)}
                        </div>
                    </div>
                    
                    <div class="bracket-round third-place">
                        <h3 class="round-label">3rd Place</h3>
                        <div class="bracket-matches">
                            ${generateBracketMatches(leagueData.knockouts.thirdPlacePlayoff, 1)}
                        </div>
                    </div>
                </div>
            </div>
            
            <!-- Details Tab Content -->
            <div id="details-tab" class="tab-content">
                <div class="knockout-container">
                <div class="round-card">
                    <h2 class="round-title">Round of 16</h2>
                    ${groupMatchesByTie(leagueData.knockouts.roundOf16).map(tie => `
                        <div class="tie-container">
                            <h3 class="tie-title">Tie ${tie.tie}</h3>
                            ${tie.matches.map(match => `
                                <div class="match-card ${match.status}">
                                    <div class="leg-badge ${match.leg.toLowerCase()}">${match.leg} Leg</div>
                                    <div class="fixture-teams">
                                        <div class="team">
                                            ${getTeamLogo(match.homeTeam, '50px', false)}
                                            <span>${match.homeTeam === 'TBD' ? 'TBD' : getTeamName(match.homeTeam)}</span>
                                        </div>
                                        <div class="vs ${match.status}">
                                            ${match.status === 'completed' && match.score ? `${match.score.home} - ${match.score.away}` : 'vs'}
                                            ${match.status === 'completed' && match.penalties ? `<div class="penalties">(${match.penalties.home}-${match.penalties.away} pen)</div>` : ''}
                                        </div>
                                        <div class="team">
                                            <span>${match.awayTeam === 'TBD' ? 'TBD' : getTeamName(match.awayTeam)}</span>
                                            ${getTeamLogo(match.awayTeam, '50px', false)}
                                        </div>
                                    </div>
                                    <div class="fixture-details">
                                        <span><i class="fas fa-calendar"></i> ${match.date}</span>
                                        <span><i class="fas fa-clock"></i> ${match.time}</span>
                                        <span class="status-badge ${match.status}">
                                            <i class="fas ${match.status === 'completed' ? 'fa-check-circle' : 'fa-calendar'}"></i>
                                            ${match.status}
                                        </span>
                                    </div>
                                </div>
                            `).join('')}
                        </div>
                    `).join('')}
                </div>

                <div class="round-card">
                    <h2 class="round-title">Quarter Finals</h2>
                    ${groupMatchesByTie(leagueData.knockouts.quarterFinals).map(tie => `
                        <div class="tie-container">
                            <h3 class="tie-title">Tie ${tie.tie}</h3>
                            ${tie.matches.map(match => `
                                <div class="match-card ${match.status}">
                                    <div class="leg-badge ${match.leg.toLowerCase()}">${match.leg} Leg</div>
                                    <div class="fixture-teams">
                                        <div class="team">
                                            ${getTeamLogo(match.homeTeam, '50px', false)}
                                            <span>${match.homeTeam === 'TBD' ? 'TBD' : getTeamName(match.homeTeam)}</span>
                                        </div>
                                        <div class="vs ${match.status}">
                                            ${match.status === 'completed' && match.score ? `${match.score.home} - ${match.score.away}` : 'vs'}
                                            ${match.status === 'completed' && match.penalties ? `<div class="penalties">(${match.penalties.home}-${match.penalties.away} pen)</div>` : ''}
                                        </div>
                                        <div class="team">
                                            <span>${match.awayTeam === 'TBD' ? 'TBD' : getTeamName(match.awayTeam)}</span>
                                            ${getTeamLogo(match.awayTeam, '50px', false)}
                                        </div>
                                    </div>
                                    <div class="fixture-details">
                                        <span><i class="fas fa-calendar"></i> ${match.date}</span>
                                        <span><i class="fas fa-clock"></i> ${match.time}</span>
                                        <span class="status-badge ${match.status}">
                                            <i class="fas ${match.status === 'completed' ? 'fa-check-circle' : 'fa-calendar'}"></i>
                                            ${match.status}
                                        </span>
                                    </div>
                                </div>
                            `).join('')}
                        </div>
                    `).join('')}
                </div>

                <div class="round-card">
                    <h2 class="round-title">Semi Finals</h2>
                    ${groupMatchesByTie(leagueData.knockouts.semiFinals).map(tie => `
                        <div class="tie-container">
                            <h3 class="tie-title">Tie ${tie.tie}</h3>
                            ${tie.matches.map(match => `
                                <div class="match-card ${match.status}">
                                    <div class="leg-badge ${match.leg.toLowerCase()}">${match.leg} Leg</div>
                                    <div class="fixture-teams">
                                        <div class="team">
                                            ${getTeamLogo(match.homeTeam, '50px', false)}
                                            <span>${match.homeTeam === 'TBD' ? 'TBD' : getTeamName(match.homeTeam)}</span>
                                        </div>
                                        <div class="vs ${match.status}">
                                            ${match.status === 'completed' && match.score ? `${match.score.home} - ${match.score.away}` : 'vs'}
                                            ${match.status === 'completed' && match.penalties ? `<div class="penalties">(${match.penalties.home}-${match.penalties.away} pen)</div>` : ''}
                                        </div>
                                        <div class="team">
                                            <span>${match.awayTeam === 'TBD' ? 'TBD' : getTeamName(match.awayTeam)}</span>
                                            ${getTeamLogo(match.awayTeam, '50px', false)}
                                        </div>
                                    </div>
                                    <div class="fixture-details">
                                        <span><i class="fas fa-calendar"></i> ${match.date}</span>
                                        <span><i class="fas fa-clock"></i> ${match.time}</span>
                                        <span class="status-badge ${match.status}">
                                            <i class="fas ${match.status === 'completed' ? 'fa-check-circle' : 'fa-calendar'}"></i>
                                            ${match.status}
                                        </span>
                                    </div>
                                </div>
                            `).join('')}
                        </div>
                    `).join('')}
                </div>

                <div class="round-card">
                    <h2 class="round-title">Third Place Playoff</h2>
                    ${leagueData.knockouts.thirdPlacePlayoff.map(match => `
                        <div class="match-card ${match.status}">
                            <div class="fixture-teams">
                                <div class="team">
                                    ${getTeamLogo(match.homeTeam, '50px', false)}
                                    <span>${match.homeTeam === 'TBD' ? 'TBD' : getTeamName(match.homeTeam)}</span>
                                </div>
                                <div class="vs ${match.status}">
                                    ${match.status === 'completed' && match.score ? `${match.score.home} - ${match.score.away}` : 'vs'}
                                    ${match.status === 'completed' && match.penalties ? `<div class="penalties">(${match.penalties.home}-${match.penalties.away} pen)</div>` : ''}
                                </div>
                                <div class="team">
                                    <span>${match.awayTeam === 'TBD' ? 'TBD' : getTeamName(match.awayTeam)}</span>
                                    ${getTeamLogo(match.awayTeam, '50px', false)}
                                </div>
                            </div>
                            <div class="fixture-details">
                                <span><i class="fas fa-calendar"></i> ${match.date}</span>
                                <span><i class="fas fa-clock"></i> ${match.time}</span>
                                <span class="status-badge ${match.status}">
                                    <i class="fas ${match.status === 'completed' ? 'fa-check-circle' : 'fa-calendar'}"></i>
                                    ${match.status}
                                </span>
                            </div>
                        </div>
                    `).join('')}
                </div>

                <div class="round-card">
                    <h2 class="round-title">Final</h2>
                    ${leagueData.knockouts.final.map(match => `
                        <div class="match-card ${match.status}">
                            <div class="fixture-teams">
                                <div class="team">
                                    ${getTeamLogo(match.homeTeam, '50px', false)}
                                    <span>${match.homeTeam === 'TBD' ? 'TBD' : getTeamName(match.homeTeam)}</span>
                                </div>
                                <div class="vs ${match.status}">
                                    ${match.status === 'completed' && match.score ? `${match.score.home} - ${match.score.away}` : 'vs'}
                                    ${match.status === 'completed' && match.penalties ? `<div class="penalties">(${match.penalties.home}-${match.penalties.away} pen)</div>` : ''}
                                </div>
                                <div class="team">
                                    <span>${match.awayTeam === 'TBD' ? 'TBD' : getTeamName(match.awayTeam)}</span>
                                    ${getTeamLogo(match.awayTeam, '50px', false)}
                                </div>
                            </div>
                            <div class="fixture-details">
                                <span><i class="fas fa-calendar"></i> ${match.date}</span>
                                <span><i class="fas fa-clock"></i> ${match.time}</span>
                                <span class="status-badge ${match.status}">
                                    <i class="fas ${match.status === 'completed' ? 'fa-check-circle' : 'fa-calendar'}"></i>
                                    ${match.status}
                                </span>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        </div>
    `;
}

function generateClubsPage() {
    return `
        <div class="page-container">
            <h1 class="page-title">Clubs</h1>
            <div class="clubs-grid">
                ${Object.entries(teamsData).map(([teamId, team]) => {
                    // Get team's group
                    const teamGroup = findTeamGroup(teamId);
                    // Get team's current stats from group fixtures
                    const teamFixtures = leagueData.groupFixtures.filter(f => 
                        f.homeTeam === teamId || f.awayTeam === teamId
                    );
                    const teamStats = calculateTeamStats(teamId, teamFixtures);
                    
                    return `
                        <div class="club-card" onclick="loadDetailedTeamPage(${JSON.stringify(team).replace(/"/g, '&quot;')})" style="cursor: pointer;">
                            <div class="club-header">
                                ${getTeamLogo(teamId, '80px', false)}
                                <div class="club-name">${team.name}</div>
                                <div class="club-group">${teamGroup}</div>
                            </div>
                            <div class="club-overview">
                                <div class="club-stats-row">
                                    <div class="club-stat">
                                        <span class="stat-label">Points:</span>
                                        <span class="stat-value">${teamStats.points}</span>
                                    </div>
                                    <div class="club-stat">
                                        <span class="stat-label">Played:</span>
                                        <span class="stat-value">${teamStats.played}</span>
                                    </div>
                                    <div class="club-stat">
                                        <span class="stat-label">Record:</span>
                                        <span class="stat-value">${teamStats.won}W ${teamStats.drawn}D ${teamStats.lost}L</span>
                                    </div>
                                </div>
                                <div class="club-stats-row">
                                    <div class="club-stat">
                                        <span class="stat-label">Goals:</span>
                                        <span class="stat-value">${teamStats.goalsFor} / ${teamStats.goalsAgainst}</span>
                                    </div>
                                    <div class="club-stat">
                                        <span class="stat-label">GD:</span>
                                        <span class="stat-value ${teamStats.goalDifference >= 0 ? 'positive' : 'negative'}">${teamStats.goalDifference >= 0 ? '+' : ''}${teamStats.goalDifference}</span>
                                    </div>
                                </div>
                                <div class="club-info">
                                    <div class="club-info-item">
                                        <i class="fas fa-map-marker-alt"></i>
                                        <span>${team.stadium}</span>
                                    </div>
                                    <div class="club-info-item">
                                        <i class="fas fa-user-tie"></i>
                                        <span>${team.manager}</span>
                                    </div>
                                </div>
                            </div>
                            <div class="click-indicator">
                                <i class="fas fa-arrow-right"></i>
                                <span>Click for full profile</span>
                            </div>
                        </div>
                    `;
                }).join('')}
            </div>
        </div>
    `;
}

function performSearch() {
    const query = mainSearch.value.toLowerCase().trim();
    if (!query) {
        searchResultsDiv.style.display = 'none';
        return;
    }

    searchResults = [];

    // Search in teams with enhanced information
    leagueData.teams.forEach(team => {
        if (team.name.toLowerCase().includes(query) || 
            team.country.toLowerCase().includes(query) ||
            team.logo.toLowerCase().includes(query) ||
            team.shortName.toLowerCase().includes(query) ||
            team.stadium.toLowerCase().includes(query) ||
            team.manager.toLowerCase().includes(query)) {
            searchResults.push({
                type: 'Team',
                title: team.name,
                subtitle: `${team.country} • ${team.stadium}`,
                details: {
                    manager: team.manager,
                    capacity: team.capacity.toLocaleString(),
                    founded: team.founded,
                    titles: team.titles,
                    position: leagueData.teams.indexOf(team) + 1,
                    points: team.points,
                    played: team.played,
                    won: team.won,
                    drawn: team.drawn,
                    lost: team.lost,
                    goalsFor: team.goalsFor,
                    goalsAgainst: team.goalsAgainst,
                    goalDifference: team.goalsFor - team.goalsAgainst
                },
                data: team
            });
        }
    });

    // Search in group fixtures
    leagueData.groupFixtures.forEach(fixture => {
        const homeTeamName = getTeamName(fixture.homeTeam);
        const awayTeamName = getTeamName(fixture.awayTeam);
        if (homeTeamName.toLowerCase().includes(query) || 
            awayTeamName.toLowerCase().includes(query) ||
            fixture.date.includes(query) ||
            fixture.status.toLowerCase().includes(query) ||
            `Group ${fixture.group}`.toLowerCase().includes(query) ||
            `Matchday ${fixture.matchday}`.toLowerCase().includes(query)) {
            searchResults.push({
                type: 'Group Fixture',
                title: `${homeTeamName} vs ${awayTeamName}`,
                subtitle: `Group ${fixture.group} • Matchday ${fixture.matchday} • ${fixture.date}`,
                data: fixture
            });
        }
    });

    // Search in knockouts
    Object.entries(leagueData.knockouts).forEach(([round, matches]) => {
        matches.forEach(match => {
            const homeTeamName = getTeamName(match.homeTeam);
            const awayTeamName = getTeamName(match.awayTeam);
            if (homeTeamName.toLowerCase().includes(query) || 
                awayTeamName.toLowerCase().includes(query)) {
                searchResults.push({
                    type: 'Knockout',
                    title: `${homeTeamName} vs ${awayTeamName}`,
                    subtitle: `${round.replace(/([A-Z])/g, ' $1').trim()}${match.leg ? ` • ${match.leg} Leg` : ''}`,
                    data: match
                });
            }
        });
    });

    displaySearchResults();
}

function displaySearchResults() {
    if (searchResults.length === 0) {
        searchResultsDiv.innerHTML = '<div class="search-result-item" style="text-align: center; color: rgba(255, 255, 255, 0.7);">No results found</div>';
    } else {
        // Limit results to first 10 for better performance
        const limitedResults = searchResults.slice(0, 10);
        
        searchResultsDiv.innerHTML = limitedResults.map((result, index) => {
            if (result.type === 'Team') {
                return `
                    <div class="search-result-item team-result" data-result-index="${index}" style="cursor: pointer;">
                        <div style="font-weight: bold; color: #ffffff; font-size: 1.1rem; margin-bottom: 5px;">${result.title}</div>
                        <div style="font-size: 0.9rem; color: rgba(255, 255, 255, 0.8); margin-bottom: 10px;">${result.subtitle}</div>
                        <div style="font-size: 0.8rem; color: rgba(255, 255, 255, 0.7); line-height: 1.5;">
                            <div style="margin-bottom: 3px;"><strong>Manager:</strong> ${result.details.manager}</div>
                            <div style="margin-bottom: 3px;"><strong>Position:</strong> ${result.details.position} | <strong>Points:</strong> ${result.details.points}</div>
                            <div style="margin-bottom: 3px;"><strong>Record:</strong> ${result.details.won}W ${result.details.drawn}D ${result.details.lost}L | <strong>Goals:</strong> ${result.details.goalsFor}-${result.details.goalsAgainst}</div>
                            <div><strong>Capacity:</strong> ${result.details.capacity} | <strong>Founded:</strong> ${result.details.founded}</div>
            </div>
                    </div>
                `;
            } else {
                return `
                    <div class="search-result-item" data-result-index="${index}" style="cursor: pointer;">
                        <div style="font-weight: bold; color: #ffffff;">${result.title}</div>
                        <div style="font-size: 0.9rem; color: rgba(255, 255, 255, 0.8);">${result.type} • ${result.subtitle}</div>
                    </div>
                `;
            }
        }).join('');
        
        if (searchResults.length > 10) {
            searchResultsDiv.innerHTML += '<div class="search-result-item" style="text-align: center; color: rgba(255, 255, 255, 0.7); font-style: italic;">... and more results</div>';
        }
        
        // Add click event listeners to search result items
        const searchResultItems = searchResultsDiv.querySelectorAll('.search-result-item[data-result-index]');
        searchResultItems.forEach(item => {
            item.addEventListener('click', function() {
                const index = parseInt(this.getAttribute('data-result-index'));
                const result = limitedResults[index];
                handleSearchResultClick(result.type, result.data);
            });
        });
    }
    
    searchResultsDiv.style.display = 'block';
}

function handleSearchResultClick(type, data) {
    try {
    searchResultsDiv.style.display = 'none';
        mainSearch.value = '';

    switch (type) {
        case 'Team':
                loadDetailedTeamPage(data);
            break;
        case 'Group Fixture':
            loadDetailedFixturePage(data);
            break;
        case 'Knockout':
                loadDetailedKnockoutPage(data);
            break;
            default:
                console.log('Unknown search result type:', type);
        }
    } catch (error) {
        console.error('Error handling search result click:', error);
    }
}

// Detailed Page Functions
function loadDetailedTeamPage(team) {
    // Get team ID from team name
    const teamId = Object.keys(teamsData).find(id => teamsData[id].name === team.name);
    
    // Get group fixtures for this team
    const teamGroupFixtures = leagueData.groupFixtures.filter(f => 
        f.homeTeam === teamId || f.awayTeam === teamId
    );
    
    // Get knockout fixtures for this team
    const teamKnockouts = [];
    Object.entries(leagueData.knockouts).forEach(([round, matches]) => {
        matches.forEach(match => {
            if (match.homeTeam === teamId || match.awayTeam === teamId) {
                teamKnockouts.push({ ...match, round });
            }
        });
    });
    
    // Calculate team statistics from group fixtures
    const teamStats = calculateTeamStats(teamId, teamGroupFixtures);
    
    // Get team's group
    const teamGroup = findTeamGroup(teamId);

    const content = `
        <div class="page-container">
            <!-- Navigation Header -->
            <div class="page-navigation">
                <div class="back-button" onclick="loadPage('clubs')" style="cursor: pointer; color: #ffb600; font-weight: bold; display: flex; align-items: center; gap: 10px; padding: 10px 0;">
                    <i class="fas fa-arrow-left"></i>
                    Back to Clubs
                </div>
                <div class="page-title" style="color: #1e3c72; font-size: 1.5rem; font-weight: bold; margin: 10px 0;">
                    Team Profile
                </div>
            </div>

            <!-- Team Header Section -->
            <div class="detailed-header">
                <div class="team-banner">
                    ${getTeamLogo(teamId, '80px')}
                    <div class="team-info">
                        <h1 class="team-name">${team.name}</h1>
                        <p class="team-subtitle">${teamGroup} • ${team.stadium}</p>
                        <div class="team-stats-overview">
                            <span class="stat-badge">Group: ${teamGroup}</span>
                            <span class="stat-badge">Points: ${teamStats.points}</span>
                            <span class="stat-badge">Record: ${teamStats.won}W ${teamStats.drawn}D ${teamStats.lost}L</span>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Main Content Grid -->
            <div class="detailed-content">
                <!-- Information Cards Section -->
                <div class="info-grid">
                    <div class="info-card">
                        <h3><i class="fas fa-info-circle"></i> Club Information</h3>
                        <div class="info-item">
                            <span class="label"><i class="fas fa-user-tie"></i> Manager:</span>
                            <span class="value">${team.manager}</span>
                        </div>
                        <div class="info-item">
                            <span class="label"><i class="fas fa-map-marker-alt"></i> Stadium:</span>
                            <span class="value">${team.stadium}</span>
                        </div>
                        <div class="info-item">
                            <span class="label"><i class="fas fa-users"></i> Capacity:</span>
                            <span class="value">${team.capacity.toLocaleString()}</span>
                        </div>
                        <div class="info-item">
                            <span class="label"><i class="fas fa-calendar-alt"></i> Founded:</span>
                            <span class="value">${team.founded}</span>
                        </div>
                        <div class="info-item">
                            <span class="label"><i class="fas fa-trophy"></i> Titles:</span>
                            <span class="value">${team.titles}</span>
                        </div>
                        <div class="info-item">
                            <span class="label"><i class="fas fa-tag"></i> Short Name:</span>
                            <span class="value">${team.shortName}</span>
                        </div>
                    </div>

                    <div class="info-card">
                        <h3><i class="fas fa-chart-bar"></i> Season Statistics</h3>
                        <div class="info-item">
                            <span class="label"><i class="fas fa-gamepad"></i> Matches Played:</span>
                            <span class="value">${teamStats.played}</span>
                        </div>
                        <div class="info-item">
                            <span class="label"><i class="fas fa-check-circle" style="color: #28a745;"></i> Wins:</span>
                            <span class="value">${teamStats.won}</span>
                        </div>
                        <div class="info-item">
                            <span class="label"><i class="fas fa-minus-circle" style="color: #ffc107;"></i> Draws:</span>
                            <span class="value">${teamStats.drawn}</span>
                        </div>
                        <div class="info-item">
                            <span class="label"><i class="fas fa-times-circle" style="color: #dc3545;"></i> Losses:</span>
                            <span class="value">${teamStats.lost}</span>
                        </div>
                        <div class="info-item">
                            <span class="label"><i class="fas fa-futbol"></i> Goals For:</span>
                            <span class="value">${teamStats.goalsFor}</span>
                        </div>
                        <div class="info-item">
                            <span class="label"><i class="fas fa-shield-alt"></i> Goals Against:</span>
                            <span class="value">${teamStats.goalsAgainst}</span>
                        </div>
                        <div class="info-item">
                            <span class="label"><i class="fas fa-balance-scale"></i> Goal Difference:</span>
                            <span class="value" style="color: ${teamStats.goalDifference >= 0 ? '#28a745' : '#dc3545'}; font-weight: bold;">${teamStats.goalDifference}</span>
                        </div>
                    </div>
                </div>

                <!-- Match History Section -->
                <div class="fixtures-section">
                    <h3><i class="fas fa-history"></i> Group Stage Matches</h3>
                    <div class="fixtures-list">
                        ${teamGroupFixtures.length > 0 ? teamGroupFixtures.map(fixture => `
                            <div class="fixture-item ${fixture.status}">
                                <div class="fixture-teams">
                                    <span class="${fixture.homeTeam === teamId ? 'team-highlight' : ''}">${getTeamName(fixture.homeTeam)}</span>
                                    <span class="vs ${fixture.status}">
                                        ${fixture.status === 'completed' && fixture.score ? `${fixture.score.home} - ${fixture.score.away}` : 'vs'}
                                    </span>
                                    <span class="${fixture.awayTeam === teamId ? 'team-highlight' : ''}">${getTeamName(fixture.awayTeam)}</span>
                                </div>
                                <div class="fixture-details">
                                    <span><i class="fas fa-calendar"></i> ${fixture.date} at ${fixture.time}</span>
                                    <span><i class="fas fa-trophy"></i> Matchday ${fixture.matchday}</span>
                                    <span class="status ${fixture.status}">${fixture.status}</span>
                                </div>
                            </div>
                        `).join('') : '<p style="text-align: center; color: #666; font-style: italic;">No group fixtures found for this team.</p>'}
                    </div>
                </div>

                <!-- Team Form Section -->
                <div class="form-section">
                    <h3><i class="fas fa-chart-line"></i> Recent Form</h3>
                    <div class="form-display">
                        <div class="form-indicators">
                            ${generateTeamFormFromFixtures(teamId, teamGroupFixtures).map(result => `
                                <div class="form-indicator ${result.toLowerCase()}">
                                    <span>${result}</span>
                                </div>
                            `).join('')}
                        </div>
                        <div class="form-stats">
                            <div class="form-stat">
                                <span class="label">Last 5 Matches:</span>
                                <span class="value">${getLastFiveResultsFromFixtures(teamId, teamGroupFixtures)}</span>
                            </div>
                            <div class="form-stat">
                                <span class="label">Current Streak:</span>
                                <span class="value">${getCurrentStreakFromFixtures(teamId, teamGroupFixtures)}</span>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Performance Analysis Section -->
                <div class="performance-section">
                    <h3><i class="fas fa-analytics"></i> Performance Analysis</h3>
                    <div class="performance-grid">
                        <div class="performance-card">
                            <h4><i class="fas fa-home"></i> Home Performance</h4>
                            <div class="performance-stats">
                                <div class="perf-stat">
                                    <span class="label">Home Matches:</span>
                                    <span class="value">${getHomeMatchesFromFixtures(teamId, teamGroupFixtures)}</span>
                                </div>
                                <div class="perf-stat">
                                    <span class="label">Home Wins:</span>
                                    <span class="value">${getHomeWinsFromFixtures(teamId, teamGroupFixtures)}</span>
                                </div>
                                <div class="perf-stat">
                                    <span class="label">Home Goals:</span>
                                    <span class="value">${getHomeGoalsFromFixtures(teamId, teamGroupFixtures)}</span>
                                </div>
                            </div>
                        </div>
                        <div class="performance-card">
                            <h4><i class="fas fa-plane"></i> Away Performance</h4>
                            <div class="performance-stats">
                                <div class="perf-stat">
                                    <span class="label">Away Matches:</span>
                                    <span class="value">${getAwayMatchesFromFixtures(teamId, teamGroupFixtures)}</span>
                                </div>
                                <div class="perf-stat">
                                    <span class="label">Away Wins:</span>
                                    <span class="value">${getAwayWinsFromFixtures(teamId, teamGroupFixtures)}</span>
                                </div>
                                <div class="perf-stat">
                                    <span class="label">Away Goals:</span>
                                    <span class="value">${getAwayGoalsFromFixtures(teamId, teamGroupFixtures)}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Knockouts Section -->
                ${teamKnockouts.length > 0 ? `
                <div class="knockouts-section">
                    <h3><i class="fas fa-trophy"></i> Knockout Matches</h3>
                    <div class="knockouts-list">
                        ${teamKnockouts.map(match => `
                            <div class="knockout-item">
                                <div class="knockout-teams">
                                    <span class="${match.homeTeam === teamId ? 'team-highlight' : ''}">${getTeamName(match.homeTeam)}</span>
                                    <span class="vs ${match.status}">
                                        ${match.status === 'completed' && match.score ? `${match.score.home} - ${match.score.away}` : 'vs'}
                                        ${match.status === 'completed' && match.penalties ? `<div class="penalties">(${match.penalties.home}-${match.penalties.away} pen)</div>` : ''}
                                    </span>
                                    <span class="${match.awayTeam === teamId ? 'team-highlight' : ''}">${getTeamName(match.awayTeam)}</span>
                                </div>
                                <div class="knockout-details">
                                    <span><i class="fas fa-star"></i> ${match.round.replace(/([A-Z])/g, ' $1').trim()} - ${match.leg} Leg</span>
                                    <span class="status ${match.status}">${match.status}</span>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>
                ` : ''}
            </div>
        </div>
    `;

    mainContent.innerHTML = content;
    currentPage = 'team-detail';
}

// Team Form and Performance Helper Functions
function generateTeamForm(team) {
    // Generate random form for the last 5 matches (W, D, L)
    const formResults = ['W', 'D', 'L'];
    const form = [];
    for (let i = 0; i < 5; i++) {
        form.push(formResults[Math.floor(Math.random() * formResults.length)]);
    }
    return form;
}

function getLastFiveResults(team) {
    const form = generateTeamForm(team);
    return form.join(' - ');
}

function getCurrentStreak(team) {
    const form = generateTeamForm(team);
    let streak = 1;
    const lastResult = form[form.length - 1];
    
    for (let i = form.length - 2; i >= 0; i--) {
        if (form[i] === lastResult) {
            streak++;
        } else {
            break;
        }
    }
    
    return `${streak} ${lastResult}${streak > 1 ? 's' : ''}`;
}



// Dynamic Team Statistics Functions
function calculateTeamStats(teamId, fixtures) {
    const stats = {
        played: 0,
        won: 0,
        drawn: 0,
        lost: 0,
        goalsFor: 0,
        goalsAgainst: 0,
        points: 0,
        goalDifference: 0
    };
    
    fixtures.forEach(fixture => {
        if (fixture.status === 'completed' && fixture.score) {
            stats.played++;
            
            const isHome = fixture.homeTeam === teamId;
            const teamGoals = isHome ? fixture.score.home : fixture.score.away;
            const opponentGoals = isHome ? fixture.score.away : fixture.score.home;
            
            stats.goalsFor += teamGoals;
            stats.goalsAgainst += opponentGoals;
            
            if (teamGoals > opponentGoals) {
                stats.won++;
                stats.points += 3;
            } else if (teamGoals === opponentGoals) {
                stats.drawn++;
                stats.points += 1;
            } else {
                stats.lost++;
            }
        }
    });
    
    stats.goalDifference = stats.goalsFor - stats.goalsAgainst;
    return stats;
}

function generateTeamFormFromFixtures(teamId, fixtures) {
    const completedFixtures = fixtures
        .filter(f => f.status === 'completed' && f.score)
        .sort((a, b) => new Date(a.date) - new Date(b.date));
    
    const form = [];
    const last5 = completedFixtures.slice(-5);
    
    last5.forEach(fixture => {
        const isHome = fixture.homeTeam === teamId;
        const teamGoals = isHome ? fixture.score.home : fixture.score.away;
        const opponentGoals = isHome ? fixture.score.away : fixture.score.home;
        
        if (teamGoals > opponentGoals) {
            form.push('W');
        } else if (teamGoals === opponentGoals) {
            form.push('D');
        } else {
            form.push('L');
        }
    });
    
    // Fill remaining slots with 'N/A' if less than 5 matches
    while (form.length < 5) {
        form.unshift('N/A');
    }
    
    return form;
}

function getLastFiveResultsFromFixtures(teamId, fixtures) {
    const form = generateTeamFormFromFixtures(teamId, fixtures);
    return form.join(' - ');
}

function getCurrentStreakFromFixtures(teamId, fixtures) {
    const form = generateTeamFormFromFixtures(teamId, fixtures);
    const validResults = form.filter(result => result !== 'N/A');
    
    if (validResults.length === 0) return 'No matches played';
    
    let streak = 1;
    const lastResult = validResults[validResults.length - 1];
    
    for (let i = validResults.length - 2; i >= 0; i--) {
        if (validResults[i] === lastResult) {
            streak++;
        } else {
            break;
        }
    }
    
    return `${streak} ${lastResult}${streak > 1 ? 's' : ''}`;
}

function getHomeMatchesFromFixtures(teamId, fixtures) {
    return fixtures.filter(f => f.homeTeam === teamId && f.status === 'completed').length;
}

function getHomeWinsFromFixtures(teamId, fixtures) {
    return fixtures.filter(f => 
        f.homeTeam === teamId && 
        f.status === 'completed' && 
        f.score && 
        f.score.home > f.score.away
    ).length;
}

function getHomeGoalsFromFixtures(teamId, fixtures) {
    return fixtures
        .filter(f => f.homeTeam === teamId && f.status === 'completed' && f.score)
        .reduce((total, f) => total + f.score.home, 0);
}

function getAwayMatchesFromFixtures(teamId, fixtures) {
    return fixtures.filter(f => f.awayTeam === teamId && f.status === 'completed').length;
}

function getAwayWinsFromFixtures(teamId, fixtures) {
    return fixtures.filter(f => 
        f.awayTeam === teamId && 
        f.status === 'completed' && 
        f.score && 
        f.score.away > f.score.home
    ).length;
}

function getAwayGoalsFromFixtures(teamId, fixtures) {
    return fixtures
        .filter(f => f.awayTeam === teamId && f.status === 'completed' && f.score)
        .reduce((total, f) => total + f.score.away, 0);
}

// Function to calculate match result for a specific team
function getMatchResult(fixture, teamId) {
    if (fixture.status !== 'completed' || !fixture.score) {
        return null;
    }
    
    const isHome = fixture.homeTeam === teamId;
    const teamGoals = isHome ? fixture.score.home : fixture.score.away;
    const opponentGoals = isHome ? fixture.score.away : fixture.score.home;
    
    if (teamGoals > opponentGoals) {
        return 'win';
    } else if (teamGoals === opponentGoals) {
        return 'draw';
    } else {
        return 'loss';
    }
}

function loadDetailedFixturePage(fixture) {
    // Handle case where fixture is a string ID (from knockout matches)
    let fixtureData = fixture;
    if (typeof fixture === 'string') {
        // Find the fixture in knockout data
        const allKnockoutMatches = [
            ...leagueData.knockouts.roundOf16,
            ...leagueData.knockouts.quarterFinals,
            ...leagueData.knockouts.semiFinals,
            ...leagueData.knockouts.final,
            ...leagueData.knockouts.thirdPlacePlayoff
        ];
        fixtureData = allKnockoutMatches.find(match => match.id === fixture);
        
        if (!fixtureData) {
            // If not found in knockouts, try group fixtures
            fixtureData = leagueData.groupFixtures.find(match => match.id === fixture);
        }
        
        if (!fixtureData) {
            console.error('Fixture not found:', fixture);
            mainContent.innerHTML = `
                <div class="page-container">
                    <div class="page-navigation">
                        <div class="back-button" onclick="loadPage('fixtures')" style="cursor: pointer; color: #ffb600; font-weight: bold; display: flex; align-items: center; gap: 10px; padding: 10px 0;">
                            <i class="fas fa-arrow-left"></i>
                            Back to Fixtures
                        </div>
                        <div class="page-title" style="color: #1e3c72; font-size: 1.5rem; font-weight: bold; margin: 10px 0;">
                            Match Details
                        </div>
                    </div>
                    <div style="text-align: center; color: white; padding: 50px;">
                        <h2>Error Loading Match Details</h2>
                        <p>Fixture not found.</p>
                    </div>
                </div>
            `;
            return;
        }
    }
    
    // Get team data from teamsData using team IDs
    const homeTeamData = teamsData[fixtureData.homeTeam];
    const awayTeamData = teamsData[fixtureData.awayTeam];
    
    // Check if team data exists
    if (!homeTeamData || !awayTeamData) {
        console.error('Team data not found:', { homeTeam: fixture.homeTeam, awayTeam: fixture.awayTeam });
        mainContent.innerHTML = `
            <div class="page-container">
                <div class="page-navigation">
                    <div class="back-button" onclick="loadPage('fixtures')" style="cursor: pointer; color: #ffd700; font-weight: bold; display: flex; align-items: center; gap: 10px; padding: 10px 0;">
                        <i class="fas fa-arrow-left"></i>
                        Back to Fixtures
                    </div>
                    <div class="page-title" style="color: #1e3c72; font-size: 1.5rem; font-weight: bold; margin: 10px 0;">
                        ${fixtureData.round ? fixtureData.round : 'Match Details'}
                    </div>
                </div>
                <div style="text-align: center; color: white; padding: 50px;">
                    <h2>Error Loading Match Details</h2>
                    <p>Team data not found for this fixture.</p>
                </div>
            </div>
        `;
        return;
    }
    
    // Get team statistics from group fixtures
    const homeTeamFixtures = leagueData.groupFixtures.filter(f => 
        f.homeTeam === fixtureData.homeTeam || f.awayTeam === fixtureData.homeTeam
    );
    const awayTeamFixtures = leagueData.groupFixtures.filter(f => 
        f.homeTeam === fixtureData.awayTeam || f.awayTeam === fixtureData.awayTeam
    );
    
    const homeTeamStats = calculateTeamStats(fixtureData.homeTeam, homeTeamFixtures);
    const awayTeamStats = calculateTeamStats(fixtureData.awayTeam, awayTeamFixtures);
    
    // Get team groups
    const homeTeamGroup = findTeamGroup(fixtureData.homeTeam);
    const awayTeamGroup = findTeamGroup(fixtureData.awayTeam);
    
    // Calculate match results for both teams
    const homeTeamResult = getMatchResult(fixtureData, fixtureData.homeTeam);
    const awayTeamResult = getMatchResult(fixtureData, fixtureData.awayTeam);

    const content = `
        <div class="page-container">
            <!-- Navigation Header -->
            <div class="page-navigation">
                <div class="back-button" onclick="loadPage('${fixtureData.round ? 'knockouts' : 'fixtures'}')" style="cursor: pointer; color: #ffb600; font-weight: bold; display: flex; align-items: center; gap: 10px; padding: 10px 0;">
                    <i class="fas fa-arrow-left"></i>
                    Back to ${fixtureData.round ? 'Knockouts' : 'Fixtures'}
                </div>
                <div class="page-title" style="color: #1e3c72; font-size: 1.5rem; font-weight: bold; margin: 10px 0;">
                    Match Details
                </div>
            </div>

            <!-- Match Header Section -->
            <div class="detailed-header">
                <div class="fixture-banner">
                                            <div class="fixture-teams-large">
                            <div class="team-side">
                                ${getTeamLogo(fixtureData.homeTeam, '80px')}
                                <h2 class="team-name">${homeTeamData.name}</h2>
                                <div class="team-group">${homeTeamGroup}</div>
                                ${homeTeamResult ? `<div class="match-result ${homeTeamResult}">${homeTeamResult.toUpperCase()}</div>` : ''}
                            </div>
                            <div class="fixture-vs">
                                <span class="vs-large ${fixtureData.status}">${fixtureData.status === 'completed' && fixtureData.score ? `${fixtureData.score.home} - ${fixtureData.score.away}` : 'vs'}</span>
                                ${fixtureData.group ? `<div class="fixture-group"><i class="fas fa-trophy"></i> Group ${fixtureData.group}</div>` : ''}
                                ${fixtureData.round ? `<div class="fixture-group"><i class="fas fa-trophy"></i> ${fixtureData.round}</div>` : ''}
                                ${fixtureData.matchday ? `<div class="fixture-matchday"><i class="fas fa-calendar-day"></i> Matchday ${fixtureData.matchday}</div>` : ''}
                                ${fixtureData.leg ? `<div class="fixture-matchday"><i class="fas fa-exchange-alt"></i> ${fixtureData.leg} Leg</div>` : ''}
                                <div class="fixture-date"><i class="fas fa-calendar"></i> ${fixtureData.date}</div>
                                <div class="fixture-time"><i class="fas fa-clock"></i> ${fixtureData.time}</div>
                                <div class="fixture-status status ${fixtureData.status}">
                                    <i class="fas fa-flag"></i> ${fixtureData.status}
                                </div>
                            </div>
                            <div class="team-side">
                                ${getTeamLogo(fixtureData.awayTeam, '80px')}
                                <h2 class="team-name">${awayTeamData.name}</h2>
                                <div class="team-group">${awayTeamGroup}</div>
                                ${awayTeamResult ? `<div class="match-result ${awayTeamResult}">${awayTeamResult.toUpperCase()}</div>` : ''}
                            </div>
                        </div>
                </div>
            </div>

            <!-- Main Content Grid -->
            <div class="detailed-content">
                <div class="info-grid">
                    <!-- Match Information Card -->
                    <div class="info-card">
                        <h3><i class="fas fa-info-circle"></i> Match Information</h3>
                        ${fixtureData.group ? `
                        <div class="info-item">
                            <span class="label"><i class="fas fa-trophy"></i> Group:</span>
                            <span class="value">Group ${fixtureData.group}</span>
                        </div>
                        ` : ''}
                        ${fixtureData.round ? `
                        <div class="info-item">
                            <span class="label"><i class="fas fa-trophy"></i> Round:</span>
                            <span class="value">${fixtureData.round}</span>
                        </div>
                        ` : ''}
                        ${fixtureData.matchday ? `
                        <div class="info-item">
                            <span class="label"><i class="fas fa-calendar-day"></i> Matchday:</span>
                            <span class="value">${fixtureData.matchday}</span>
                        </div>
                        ` : ''}
                        ${fixtureData.leg ? `
                        <div class="info-item">
                            <span class="label"><i class="fas fa-exchange-alt"></i> Leg:</span>
                            <span class="value">${fixtureData.leg} Leg</span>
                        </div>
                        ` : ''}
                        <div class="info-item">
                            <span class="label"><i class="fas fa-flag"></i> Status:</span>
                            <span class="value status ${fixtureData.status.toLowerCase()}">${fixtureData.status}</span>
                        </div>
                        <div class="info-item">
                            <span class="label"><i class="fas fa-calendar-alt"></i> Date:</span>
                            <span class="value">${fixtureData.date}</span>
                        </div>
                        <div class="info-item">
                            <span class="label"><i class="fas fa-clock"></i> Time:</span>
                            <span class="value">${fixtureData.time}</span>
                        </div>
                        ${fixtureData.venue ? `
                        <div class="info-item">
                            <span class="label"><i class="fas fa-map-marker-alt"></i> Venue:</span>
                            <span class="value">${fixtureData.venue}</span>
                        </div>
                        ` : ''}
                        ${fixtureData.penalties ? `
                        <div class="info-item">
                            <span class="label"><i class="fas fa-crosshairs"></i> Penalties:</span>
                            <span class="value">${fixtureData.penalties.home} - ${fixtureData.penalties.away}</span>
                        </div>
                        ` : ''}
                    </div>

                    <!-- Match Score Card (for completed matches) -->
                    ${fixtureData.status === 'completed' && fixtureData.score ? `
                    <div class="info-card">
                        <h3><i class="fas fa-futbol"></i> Match Result</h3>
                        <div class="info-item">
                            <span class="label"><i class="fas fa-home"></i> ${homeTeamData.name}:</span>
                            <span class="value">${fixtureData.score.home}</span>
                        </div>
                        <div class="info-item">
                            <span class="label"><i class="fas fa-plane"></i> ${awayTeamData.name}:</span>
                            <span class="value">${fixtureData.score.away}</span>
                        </div>
                        ${fixtureData.penalties ? `
                        <div class="info-item">
                            <span class="label"><i class="fas fa-crosshairs"></i> Penalties:</span>
                            <span class="value" style="color: #ffb600; font-weight: bold;">${fixtureData.penalties.home} - ${fixtureData.penalties.away}</span>
                        </div>
                        ` : ''}
                    </div>
                    ` : ''}

                    <!-- Home Team Stats Card -->
                    <div class="info-card">
                        <h3><i class="fas fa-home"></i> ${homeTeamData.name} Stats</h3>
                        <div class="info-item">
                            <span class="label"><i class="fas fa-trophy"></i> Group:</span>
                            <span class="value">${homeTeamGroup}</span>
                        </div>
                        <div class="info-item">
                            <span class="label"><i class="fas fa-star"></i> Points:</span>
                            <span class="value">${homeTeamStats.points}</span>
                        </div>
                        <div class="info-item">
                            <span class="label"><i class="fas fa-chart-bar"></i> Record:</span>
                            <span class="value">${homeTeamStats.won}W ${homeTeamStats.drawn}D ${homeTeamStats.lost}L</span>
                        </div>
                        <div class="info-item">
                            <span class="label"><i class="fas fa-futbol"></i> Goals:</span>
                            <span class="value">${homeTeamStats.goalsFor}-${homeTeamStats.goalsAgainst}</span>
                        </div>
                        <div class="info-item">
                            <span class="label"><i class="fas fa-balance-scale"></i> Goal Difference:</span>
                            <span class="value ${homeTeamStats.goalDifference >= 0 ? 'positive' : 'negative'}">${homeTeamStats.goalDifference >= 0 ? '+' : ''}${homeTeamStats.goalDifference}</span>
                        </div>
                        <div class="info-item">
                            <span class="label"><i class="fas fa-gamepad"></i> Matches Played:</span>
                            <span class="value">${homeTeamStats.played}</span>
                        </div>
                    </div>

                    <!-- Away Team Stats Card -->
                    <div class="info-card">
                        <h3><i class="fas fa-plane"></i> ${awayTeamData.name} Stats</h3>
                        <div class="info-item">
                            <span class="label"><i class="fas fa-trophy"></i> Group:</span>
                            <span class="value">${awayTeamGroup}</span>
                        </div>
                        <div class="info-item">
                            <span class="label"><i class="fas fa-star"></i> Points:</span>
                            <span class="value">${awayTeamStats.points}</span>
                        </div>
                        <div class="info-item">
                            <span class="label"><i class="fas fa-chart-bar"></i> Record:</span>
                            <span class="value">${awayTeamStats.won}W ${awayTeamStats.drawn}D ${awayTeamStats.lost}L</span>
                        </div>
                        <div class="info-item">
                            <span class="label"><i class="fas fa-futbol"></i> Goals:</span>
                            <span class="value">${awayTeamStats.goalsFor}-${awayTeamStats.goalsAgainst}</span>
                        </div>
                        <div class="info-item">
                            <span class="label"><i class="fas fa-balance-scale"></i> Goal Difference:</span>
                            <span class="value ${awayTeamStats.goalDifference >= 0 ? 'positive' : 'negative'}">${awayTeamStats.goalDifference >= 0 ? '+' : ''}${awayTeamStats.goalDifference}</span>
                        </div>
                        <div class="info-item">
                            <span class="label"><i class="fas fa-gamepad"></i> Matches Played:</span>
                            <span class="value">${awayTeamStats.played}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;

    mainContent.innerHTML = content;
    currentPage = 'fixture-detail';
}

function loadDetailedKnockoutPage(match) {
    // Get team data from teamsData using team IDs
    const homeTeamData = teamsData[match.homeTeam];
    const awayTeamData = teamsData[match.awayTeam];
    
    // Check if team data exists
    if (!homeTeamData || !awayTeamData) {
        console.error('Team data not found:', { homeTeam: match.homeTeam, awayTeam: match.awayTeam });
        mainContent.innerHTML = `
            <div class="page-container">
                <div class="page-navigation">
                                    <div class="back-button" onclick="loadPage('knockouts')" style="cursor: pointer; color: #ffb600; font-weight: bold; display: flex; align-items: center; gap: 10px; padding: 10px 0;">
                    <i class="fas fa-arrow-left"></i>
                    Back to Knockouts
                </div>
                    <div class="page-title" style="color: #1e3c72; font-size: 1.5rem; font-weight: bold; margin: 10px 0;">
                        Knockout Match
                    </div>
                </div>
                <div style="text-align: center; color: white; padding: 50px;">
                    <h2>Error Loading Knockout Match</h2>
                    <p>Team data not found for this match.</p>
                </div>
            </div>
        `;
        return;
    }
    
    // Get team statistics from group fixtures
    const homeTeamFixtures = leagueData.groupFixtures.filter(f => 
        f.homeTeam === match.homeTeam || f.awayTeam === match.homeTeam
    );
    const awayTeamFixtures = leagueData.groupFixtures.filter(f => 
        f.homeTeam === match.awayTeam || f.awayTeam === match.awayTeam
    );
    
    const homeTeamStats = calculateTeamStats(match.homeTeam, homeTeamFixtures);
    const awayTeamStats = calculateTeamStats(match.awayTeam, awayTeamFixtures);
    
    // Get team groups
    const homeTeamGroup = findTeamGroup(match.homeTeam);
    const awayTeamGroup = findTeamGroup(match.awayTeam);
    
    // Find the round name
    const roundName = Object.keys(leagueData.knockouts).find(round => 
        leagueData.knockouts[round].some(m => m.id === match.id)
    );

    const content = `
        <div class="page-container">
            <!-- Navigation Header -->
            <div class="page-navigation">
                <div class="back-button" onclick="loadPage('knockouts')" style="cursor: pointer; color: #ffb600; font-weight: bold; display: flex; align-items: center; gap: 10px; padding: 10px 0;">
                    <i class="fas fa-arrow-left"></i>
                    Back to Knockouts
                </div>
                <div class="page-title" style="color: #1e3c72; font-size: 1.5rem; font-weight: bold; margin: 10px 0;">
                    Knockout Match
                </div>
            </div>

            <!-- Knockout Header Section -->
            <div class="detailed-header">
                <div class="knockout-banner">
                    <div class="round-title-large">
                        <i class="fas fa-trophy"></i> ${roundName ? roundName.replace(/([A-Z])/g, ' $1').trim() : 'Knockout Match'}
                    </div>
                    <div class="knockout-teams-large">
                        <div class="team-side">
                            ${getTeamLogo(match.homeTeam, '80px')}
                            <h2 class="team-name">${homeTeamData.name}</h2>
                            <div class="team-group">${homeTeamGroup}</div>
                        </div>
                        <div class="knockout-vs">
                            <span class="vs-large ${match.status}">${match.status === 'completed' && match.score ? `${match.score.home} - ${match.score.away}` : 'vs'}</span>
                            ${match.leg ? `<div class="match-leg"><i class="fas fa-exchange-alt"></i> ${match.leg} Leg</div>` : ''}
                            ${match.status === 'completed' && match.penalties ? `<div class="penalties-display">(${match.penalties.home}-${match.penalties.away} pen)</div>` : ''}
                            <div class="match-status status ${match.status}">
                                <i class="fas fa-flag"></i> ${match.status}
                            </div>
                        </div>
                        <div class="team-side">
                            ${getTeamLogo(match.awayTeam, '80px')}
                            <h2 class="team-name">${awayTeamData.name}</h2>
                            <div class="team-group">${awayTeamGroup}</div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Main Content Grid -->
            <div class="detailed-content">
                <div class="info-grid">
                    <!-- Match Information Card -->
                    <div class="info-card">
                        <h3><i class="fas fa-info-circle"></i> Match Information</h3>
                        <div class="info-item">
                            <span class="label"><i class="fas fa-star"></i> Round:</span>
                            <span class="value">${roundName ? roundName.replace(/([A-Z])/g, ' $1').trim() : 'Unknown'}</span>
                        </div>
                        ${match.leg ? `
                        <div class="info-item">
                            <span class="label"><i class="fas fa-exchange-alt"></i> Leg:</span>
                            <span class="value">${match.leg} Leg</span>
                        </div>
                        ` : ''}
                        <div class="info-item">
                            <span class="label"><i class="fas fa-flag"></i> Status:</span>
                            <span class="value status ${match.status}">${match.status}</span>
                        </div>
                        ${match.status === 'completed' && match.score ? `
                        <div class="info-item">
                            <span class="label"><i class="fas fa-futbol"></i> Score:</span>
                            <span class="value" style="font-weight: bold; font-size: 1.1rem;">${match.score.home} - ${match.score.away}</span>
                        </div>
                        ` : ''}
                        ${match.status === 'completed' && match.penalties ? `
                        <div class="info-item">
                            <span class="label"><i class="fas fa-bullseye"></i> Penalties:</span>
                            <span class="value" style="font-weight: bold; color: #ffb600;">${match.penalties.home} - ${match.penalties.away}</span>
                        </div>
                        ` : ''}
                        <div class="info-item">
                            <span class="label"><i class="fas fa-calendar"></i> Date:</span>
                            <span class="value">${match.date}</span>
                        </div>
                        <div class="info-item">
                            <span class="label"><i class="fas fa-clock"></i> Time:</span>
                            <span class="value">${match.time}</span>
                        </div>
                    </div>

                    <!-- Home Team Stats Card -->
                    <div class="info-card">
                        <h3><i class="fas fa-home"></i> ${homeTeamData.name} Stats</h3>
                        <div class="info-item">
                            <span class="label"><i class="fas fa-trophy"></i> Group:</span>
                            <span class="value">${homeTeamGroup}</span>
                        </div>
                        <div class="info-item">
                            <span class="label"><i class="fas fa-star"></i> Points:</span>
                            <span class="value">${homeTeamStats.points}</span>
                        </div>
                        <div class="info-item">
                            <span class="label"><i class="fas fa-chart-bar"></i> Record:</span>
                            <span class="value">${homeTeamStats.won}W ${homeTeamStats.drawn}D ${homeTeamStats.lost}L</span>
                        </div>
                        <div class="info-item">
                            <span class="label"><i class="fas fa-futbol"></i> Goals:</span>
                            <span class="value">${homeTeamStats.goalsFor}-${homeTeamStats.goalsAgainst}</span>
                        </div>
                        <div class="info-item">
                            <span class="label"><i class="fas fa-balance-scale"></i> Goal Difference:</span>
                            <span class="value ${homeTeamStats.goalDifference >= 0 ? 'positive' : 'negative'}">${homeTeamStats.goalDifference >= 0 ? '+' : ''}${homeTeamStats.goalDifference}</span>
                        </div>
                        <div class="info-item">
                            <span class="label"><i class="fas fa-gamepad"></i> Matches Played:</span>
                            <span class="value">${homeTeamStats.played}</span>
                        </div>
                    </div>

                    <!-- Away Team Stats Card -->
                    <div class="info-card">
                        <h3><i class="fas fa-plane"></i> ${awayTeamData.name} Stats</h3>
                        <div class="info-item">
                            <span class="label"><i class="fas fa-trophy"></i> Group:</span>
                            <span class="value">${awayTeamGroup}</span>
                        </div>
                        <div class="info-item">
                            <span class="label"><i class="fas fa-star"></i> Points:</span>
                            <span class="value">${awayTeamStats.points}</span>
                        </div>
                        <div class="info-item">
                            <span class="label"><i class="fas fa-chart-bar"></i> Record:</span>
                            <span class="value">${awayTeamStats.won}W ${awayTeamStats.drawn}D ${awayTeamStats.lost}L</span>
                        </div>
                        <div class="info-item">
                            <span class="label"><i class="fas fa-futbol"></i> Goals:</span>
                            <span class="value">${awayTeamStats.goalsFor}-${awayTeamStats.goalsAgainst}</span>
                        </div>
                        <div class="info-item">
                            <span class="label"><i class="fas fa-balance-scale"></i> Goal Difference:</span>
                            <span class="value ${awayTeamStats.goalDifference >= 0 ? 'positive' : 'negative'}">${awayTeamStats.goalDifference >= 0 ? '+' : ''}${awayTeamStats.goalDifference}</span>
                        </div>
                        <div class="info-item">
                            <span class="label"><i class="fas fa-gamepad"></i> Matches Played:</span>
                            <span class="value">${awayTeamStats.played}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;

    mainContent.innerHTML = content;
    currentPage = 'knockout-detail';
}




