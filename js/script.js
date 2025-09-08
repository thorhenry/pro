// Embedded CSS Styles
const styles = `
    /* Page Loader */
    .page-loader {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(135deg, #1e0021 0%, #37003c 100%);
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
        border-top: 4px solid #e90052;
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

    html {
        overflow-x: hidden; /* Prevent horizontal scrolling */
        touch-action: pan-y; /* Only allow vertical panning, prevent horizontal */
    }

    body {
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        background: linear-gradient(135deg, #1e0021 0%, #37003c 100%);
        color: #333;
        min-height: 100vh;
        overflow-x: hidden; /* Prevent horizontal scrolling */
        touch-action: pan-y; /* Only allow vertical panning, prevent horizontal */
        -webkit-overflow-scrolling: touch; /* Smooth scrolling on iOS */
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
        color: #e90052;
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
        color: #e90052;
        background: rgba(255, 93, 182, 0.3);
    }

    .nav-link.active {
        color: #e90052;
        background: rgba(255, 93, 182, 0.3);
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
        color: #e90052;
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
        background: #00ff85;
        border: none;
        padding: 15px 20px;
        cursor: pointer;
        transition: background 0.3s ease;
    }

    #searchBtn:hover {
        background:rgb(2, 185, 100);
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
        background: #1e0021;
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
        border-left: 4px solid #e90052;
    }

    .search-result-item.team-result:hover {
        background: rgba(255, 255, 255, 0.15);
        border-left-color: #e90052;
    }

    .search-result-item.team-result::after {
        content: "Click for details";
        position: absolute;
        top: 10px;
        right: 15px;
        background: #e90052;
        color: #1e0021;
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
        padding: 20px 30px;
        border-radius: 15px;
        margin-bottom: 20px;
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
        border-color: #e90052;
        box-shadow: 0 6px 20px rgba(255, 0, 157, 0.5);
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
        font-size: 0.8rem;
        margin-bottom: 2px;
        text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        max-width: 100px;
        text-align: center;
        font-weight: 500;
    }

    /* Smaller team logos for fixture details */
    .fixture-teams-large .team-logo-large,
    .knockout-teams-large .team-logo-large {
        width: 40px;
        height: 40px;
        font-size: 1rem;
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
        color: #e90052;
        font-size: 1.3rem;
        margin-bottom: 20px;
        border-bottom: 2px solid #e90052;
        padding-bottom: 10px;
    }

    /* Collapsible Headers */
    .collapsible-header {
        cursor: pointer;
        display: flex;
        justify-content: space-between;
        align-items: center;
        transition: all 0.3s ease;
        user-select: none;
        padding: 15px 20px;
        margin: -15px -20px 20px -20px;
        border-radius: 10px;
        background: rgba(233, 0, 82, 0.1);
        border: 2px solid transparent;
    }

    .collapsible-header:hover {
        color: #ff6b9d;
        background: rgba(233, 0, 82, 0.2);
        border-color: rgba(233, 0, 82, 0.3);
        transform: translateY(-1px);
        box-shadow: 0 4px 12px rgba(233, 0, 82, 0.2);
    }

    .collapsible-header:active {
        transform: translateY(0);
        box-shadow: 0 2px 6px rgba(233, 0, 82, 0.3);
    }

    .toggle-icon {
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        font-size: 1.2rem;
        color: #e90052;
        padding: 5px;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.1);
        transform: rotate(0deg);
    }

    .collapsible-header:hover .toggle-icon {
        background: rgba(255, 255, 255, 0.2);
        transform: scale(1.1);
    }

    .collapsible-content {
        transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        overflow: hidden;
    }

    .collapsible-content.collapsed {
        opacity: 0;
        max-height: 0;
        transform: translateY(-10px);
    }

    .collapsible-content.expanded {
        opacity: 1;
        max-height: 2000px;
        transform: translateY(0);
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

    /* All Seasons Stats Styles */
    .all-seasons-stats {
        grid-column: 1 / -1;
        margin-top: 20px;
    }

    .all-seasons-overview {
        display: flex;
        flex-direction: column;
        gap: 20px;
        margin-bottom: 25px;
    }

    .overview-stats, .goals-overview {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
        gap: 15px;
    }

    .overview-stat, .goals-stat {
        text-align: center;
        padding: 15px;
        background: rgba(255, 255, 255, 0.05);
        border-radius: 10px;
        border: 1px solid rgba(255, 255, 255, 0.1);
    }

    .overview-stat .stat-value, .goals-stat .stat-value {
        display: block;
        font-size: 1.5rem;
        font-weight: bold;
        color: #e90052;
        margin-bottom: 5px;
    }

    .overview-stat .stat-label, .goals-stat .stat-label {
        display: block;
        font-size: 0.8rem;
        color: rgba(255, 255, 255, 0.7);
        text-transform: uppercase;
        letter-spacing: 0.5px;
    }

    .seasons-breakdown {
        margin-top: 25px;
    }

    .seasons-breakdown h4 {
        color: #e90052;
        font-size: 1.1rem;
        margin-bottom: 15px;
        border-bottom: 1px solid rgba(233, 0, 82, 0.3);
        padding-bottom: 8px;
    }

    .seasons-list {
        display: flex;
        flex-direction: column;
        gap: 12px;
    }

    .season-item {
        background: rgba(255, 255, 255, 0.05);
        border-radius: 8px;
        padding: 15px;
        border: 1px solid rgba(255, 255, 255, 0.1);
        transition: all 0.3s ease;
    }

    .season-item:hover {
        background: rgba(255, 255, 255, 0.08);
        transform: translateY(-1px);
    }

    .season-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 10px;
    }

    .season-name {
        font-weight: 600;
        color: #ffffff;
        font-size: 1rem;
    }

    .season-group {
        background: rgba(233, 0, 82, 0.2);
        color: #e90052;
        padding: 4px 8px;
        border-radius: 4px;
        font-size: 0.8rem;
        font-weight: 500;
    }

    .season-stats {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
        gap: 10px;
    }

    .season-stat {
        text-align: center;
    }

    .season-stat .stat-value {
        display: block;
        font-size: 1rem;
        font-weight: 600;
        color: #ffffff;
        margin-bottom: 2px;
    }

    .season-stat .stat-label {
        display: block;
        font-size: 0.7rem;
        color: rgba(255, 255, 255, 0.6);
        text-transform: uppercase;
        letter-spacing: 0.3px;
    }

    @media (max-width: 768px) {
        .overview-stats, .goals-overview {
            grid-template-columns: repeat(2, 1fr);
        }
        
        .season-stats {
            grid-template-columns: repeat(2, 1fr);
        }
        
        .season-header {
            flex-direction: column;
            align-items: flex-start;
            gap: 5px;
        }
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
        color: #e90052;
        font-size: 1.3rem;
        margin-bottom: 20px;
        border-bottom: 2px solid #e90052;
        padding-bottom: 10px;
    }

    .fixtures-section .collapsible-header, .form-section .collapsible-header, .performance-section .collapsible-header {
        border-bottom: 2px solid #e90052;
        padding-bottom: 10px;
        margin-bottom: 20px;
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
        border-left: 4px solid #e90052;
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
        border-left: 4px solid #e90052;
        backdrop-filter: blur(5px);
    }

    .performance-card h4 {
        color: #e90052;
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

    /* Performance Stats Card Styles */
    .performance-stats-card {
        background: rgba(255, 255, 255, 0.05);
        border-radius: 12px;
        padding: 20px;
        border: 1px solid rgba(255, 255, 255, 0.1);
    }

    .performance-stats-grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 20px;
    }

    .perf-stat-item {
        display: flex;
        align-items: center;
        background: rgba(255, 255, 255, 0.03);
        border-radius: 10px;
        padding: 15px;
        border: 1px solid rgba(255, 255, 255, 0.1);
        transition: all 0.3s ease;
    }

    .perf-stat-item:hover {
        background: rgba(255, 255, 255, 0.06);
        transform: translateY(-2px);
    }

    .home-stat {
        border-left: 3px solid #e90052;
    }

    .away-stat {
        border-left: 3px solid #8a2be2;
    }

    .perf-icon {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        margin-right: 15px;
        flex-shrink: 0;
    }

    .home-stat .perf-icon {
        background: rgba(233, 0, 82, 0.2);
        color: #e90052;
    }

    .away-stat .perf-icon {
        background: rgba(138, 43, 226, 0.2);
        color: #8a2be2;
    }

    .perf-icon i {
        font-size: 1.2rem;
    }

    .perf-content {
        flex: 1;
    }

    .perf-title {
        font-size: 1rem;
        font-weight: 600;
        color: #ffffff;
        margin-bottom: 8px;
    }

    .perf-numbers {
        display: flex;
        align-items: center;
        margin-bottom: 4px;
    }

    .perf-numbers:last-child {
        margin-bottom: 0;
    }

    .perf-number {
        font-size: 1.1rem;
        font-weight: bold;
        color: #ffffff;
        margin-right: 8px;
        min-width: 20px;
    }

    .perf-label {
        font-size: 0.85rem;
        color: rgba(255, 255, 255, 0.7);
        font-weight: 500;
    }

    @media (max-width: 768px) {
        .performance-stats-grid {
            grid-template-columns: 1fr;
            gap: 15px;
        }
        
        .perf-stat-item {
            padding: 12px;
        }
        
        .perf-icon {
            width: 35px;
            height: 35px;
            margin-right: 12px;
        }
        
        .perf-icon i {
            font-size: 1rem;
        }
        
        .perf-title {
            font-size: 0.9rem;
        }
        
        .perf-number {
            font-size: 1rem;
        }
        
        .perf-label {
            font-size: 0.8rem;
        }
    }

    /* Team Comparison Card Styles */
    .team-comparison-card {
        grid-column: 1 / -1;
    }

    .team-comparison-grid {
        display: grid;
        grid-template-columns: 1fr auto 1fr;
        gap: 20px;
        align-items: center;
    }

    .team-comparison-item {
        background: rgba(255, 255, 255, 0.05);
        border-radius: 12px;
        padding: 20px;
        border: 2px solid rgba(255, 255, 255, 0.1);
        transition: all 0.3s ease;
    }

    .team-comparison-item:hover {
        background: rgba(255, 255, 255, 0.08);
        border-color: rgba(233, 0, 82, 0.3);
        transform: translateY(-2px);
    }

    .team-comparison-item.home-team {
        border-left: 4px solid #e90052;
    }

    .team-comparison-item.away-team {
        border-right: 4px solid #e90052;
    }

    .team-header {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-bottom: 15px;
        text-align: center;
    }

    .team-header i {
        font-size: 1.5rem;
        color: #e90052;
        margin-bottom: 8px;
    }

    .team-name {
        font-size: 1.1rem;
        font-weight: 600;
        color: #ffffff;
        margin-bottom: 4px;
    }

    .team-group {
        font-size: 0.9rem;
        color: rgba(255, 255, 255, 0.7);
        background: rgba(233, 0, 82, 0.2);
        padding: 4px 8px;
        border-radius: 4px;
    }

    .team-stats-compact {
        display: grid;
        gap: 8px;
    }

    .stat-row {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 6px 0;
        border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    }

    .stat-row:last-child {
        border-bottom: none;
    }

    .stat-label {
        font-size: 0.9rem;
        color: rgba(255, 255, 255, 0.8);
        font-weight: 500;
    }

    .stat-value {
        font-size: 0.9rem;
        font-weight: 600;
        color: #ffffff;
    }

    .stat-value.positive {
        color: #28a745;
    }

    .stat-value.negative {
        color: #dc3545;
    }

    .vs-divider {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 60px;
        height: 60px;
        background: linear-gradient(135deg, #e90052, #8a2be2);
        border-radius: 50%;
        box-shadow: 0 4px 12px rgba(233, 0, 82, 0.3);
    }

    .vs-text {
        font-size: 1.2rem;
        font-weight: bold;
        color: #ffffff;
        text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
    }

    @media (max-width: 768px) {
        .team-comparison-grid {
            grid-template-columns: 1fr;
            gap: 15px;
        }
        
        .vs-divider {
            order: -1;
            width: 50px;
            height: 50px;
        }
        
        .vs-text {
            font-size: 1rem;
        }
        
        .team-comparison-item {
            padding: 15px;
        }
    }

    /* Complete Match Card Styles */
    .complete-match-card {
        grid-column: 1 / -1;
    }

    .match-header-section {
        margin-bottom: 25px;
        padding-bottom: 20px;
        border-bottom: 2px solid rgba(233, 0, 82, 0.3);
    }

    .match-teams {
        display: grid;
        grid-template-columns: 1fr auto 1fr;
        gap: 20px;
        align-items: center;
    }

    .team-display {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
    }

    .team-display i {
        font-size: 1.5rem;
        color: #e90052;
        margin-bottom: 8px;
    }

    .team-display .team-name {
        font-size: 1.1rem;
        font-weight: 600;
        color: #ffffff;
        margin-bottom: 4px;
    }

    .team-display .team-group {
        font-size: 0.9rem;
        color: rgba(255, 255, 255, 0.7);
        background: rgba(233, 0, 82, 0.2);
        padding: 4px 8px;
        border-radius: 4px;
    }

    .match-score-section {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .final-score {
        text-align: center;
    }

    .final-score .score {
        font-size: 2rem;
        font-weight: bold;
        color: #ffffff;
        text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
    }

    .final-score .penalties {
        font-size: 0.9rem;
        color: #e90052;
        margin-top: 4px;
        font-weight: 600;
    }

    .match-score-section .vs-text {
        font-size: 1.5rem;
        font-weight: bold;
        color: #e90052;
        text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
    }

    .match-info-section {
        margin-bottom: 25px;
    }

    .info-row {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        gap: 15px;
        margin-bottom: 15px;
    }

    .info-row:last-child {
        margin-bottom: 0;
    }

    .team-stats-section {
        border-top: 2px solid rgba(233, 0, 82, 0.3);
        padding-top: 20px;
    }

    .team-stats-section h4 {
        color: #e90052;
        font-size: 1.1rem;
        margin-bottom: 15px;
        text-align: center;
    }

    .stats-comparison {
        display: grid;
        grid-template-columns: 1fr auto 1fr;
        gap: 20px;
        align-items: start;
    }

    .team-stats {
        background: rgba(255, 255, 255, 0.05);
        border-radius: 8px;
        padding: 15px;
        border: 1px solid rgba(255, 255, 255, 0.1);
    }

    .team-stats.home-stats {
        border-left: 3px solid #e90052;
    }

    .team-stats.away-stats {
        border-right: 3px solid #e90052;
    }

    .stat-item {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 8px 0;
        border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    }

    .stat-item:last-child {
        border-bottom: none;
    }

    .stat-item .stat-label {
        font-size: 0.9rem;
        color: rgba(255, 255, 255, 0.8);
        font-weight: 500;
    }

    .stat-item .stat-value {
        font-size: 0.9rem;
        font-weight: 600;
        color: #ffffff;
    }

    .stat-item .stat-value.positive {
        color: #28a745;
    }

    .stat-item .stat-value.negative {
        color: #dc3545;
    }

    .stats-divider {
        width: 2px;
        background: linear-gradient(to bottom, transparent, #e90052, transparent);
        height: 100%;
        min-height: 120px;
    }

    @media (max-width: 768px) {
        .match-teams {
            grid-template-columns: 1fr;
            gap: 15px;
        }
        
        .match-score-section {
            order: -1;
        }
        
        .stats-comparison {
            grid-template-columns: 1fr;
            gap: 15px;
        }
        
        .stats-divider {
            width: 100%;
            height: 2px;
            background: linear-gradient(to right, transparent, #e90052, transparent);
            order: -1;
        }
        
        .info-row {
            grid-template-columns: 1fr;
            gap: 10px;
        }
    }

    /* Head to Head Section Styles */
    .head-to-head-section {
        border-top: 2px solid rgba(233, 0, 82, 0.3);
        padding-top: 20px;
        margin-top: 20px;
    }

    .head-to-head-section h4 {
        color: #e90052;
        font-size: 1.1rem;
        margin-bottom: 15px;
        text-align: center;
    }

    .head-to-head-section h5 {
        color: #ffffff;
        font-size: 1rem;
        margin-bottom: 12px;
        text-align: center;
    }

    .no-head-to-head {
        text-align: center;
        padding: 20px;
        color: rgba(255, 255, 255, 0.7);
    }

    .no-head-to-head i {
        font-size: 2rem;
        color: #e90052;
        margin-bottom: 10px;
        display: block;
    }

    .head-to-head-stats {
        margin-bottom: 20px;
    }

    .h2h-summary {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
        gap: 15px;
        margin-bottom: 15px;
    }

    .h2h-stat {
        background: rgba(255, 255, 255, 0.05);
        border-radius: 8px;
        padding: 12px;
        text-align: center;
        border: 1px solid rgba(255, 255, 255, 0.1);
    }

    .h2h-label {
        display: block;
        font-size: 0.8rem;
        color: rgba(255, 255, 255, 0.7);
        margin-bottom: 4px;
    }

    .h2h-value {
        display: block;
        font-size: 1.2rem;
        font-weight: bold;
        color: #ffffff;
    }

    .h2h-value.team1-color {
        color: #e90052;
    }

    .h2h-value.team2-color {
        color: #8a2be2;
    }

    .h2h-matches-list {
        display: grid;
        gap: 10px;
        max-height: 300px;
        overflow-y: auto;
        padding-right: 5px;
    }

    .h2h-match {
        background: rgba(255, 255, 255, 0.05);
        border-radius: 8px;
        padding: 12px;
        border-left: 4px solid rgba(255, 255, 255, 0.3);
        transition: all 0.3s ease;
    }

    .h2h-match:hover {
        background: rgba(255, 255, 255, 0.08);
        transform: translateX(5px);
    }

    .h2h-match.team1-win {
        border-left-color: #e90052;
    }

    .h2h-match.team2-win {
        border-left-color: #8a2be2;
    }

    .h2h-match.draw {
        border-left-color: #ffc107;
    }

    .h2h-teams {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 8px;
    }

    .h2h-home, .h2h-away {
        font-weight: 600;
        color: #ffffff;
        flex: 1;
    }

    .h2h-home {
        text-align: left;
    }

    .h2h-away {
        text-align: right;
    }

    .h2h-score {
        font-size: 1.1rem;
        font-weight: bold;
        color: #e90052;
        margin: 0 15px;
        text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
    }

    .h2h-match-details {
        display: flex;
        flex-wrap: wrap;
        gap: 8px;
        font-size: 0.8rem;
        color: rgba(255, 255, 255, 0.7);
    }

    .h2h-season {
        background: rgba(233, 0, 82, 0.2);
        padding: 2px 6px;
        border-radius: 4px;
        color: #e90052;
        font-weight: 600;
    }

    .h2h-date {
        color: rgba(255, 255, 255, 0.8);
    }

    .h2h-type {
        padding: 2px 6px;
        border-radius: 4px;
        font-weight: 600;
    }

    .h2h-type.knockout {
        background: rgba(138, 43, 226, 0.2);
        color: #8a2be2;
    }

    .h2h-type.group {
        background: rgba(40, 167, 69, 0.2);
        color: #28a745;
    }

    .h2h-round {
        background: rgba(255, 193, 7, 0.2);
        color: #ffc107;
        padding: 2px 6px;
        border-radius: 4px;
        font-weight: 600;
    }

    .h2h-penalties {
        color: #e90052;
        font-weight: 600;
    }

    /* Custom scrollbar for h2h matches list */
    .h2h-matches-list::-webkit-scrollbar {
        width: 6px;
    }

    .h2h-matches-list::-webkit-scrollbar-track {
        background: rgba(255, 255, 255, 0.1);
        border-radius: 3px;
    }

    .h2h-matches-list::-webkit-scrollbar-thumb {
        background: #e90052;
        border-radius: 3px;
    }

    .h2h-matches-list::-webkit-scrollbar-thumb:hover {
        background: #c70042;
    }

    @media (max-width: 768px) {
        .h2h-summary {
            grid-template-columns: repeat(2, 1fr);
            gap: 10px;
        }
        
        .h2h-teams {
            flex-direction: column;
            gap: 8px;
        }
        
        .h2h-home, .h2h-away {
            text-align: center;
        }
        
        .h2h-score {
            margin: 0;
        }
        
        .h2h-match-details {
            justify-content: center;
        }
    }

    .fixtures-list, .knockouts-list {
        display: grid;
        gap: 15px;
    }

    .fixture-item, .knockout-item {
        background: rgba(255, 255, 255, 0.1);
        border-radius: 10px;
        padding: 15px;
        border-left: 4px solid #e90052;
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
        color: #1e0021;
        font-weight: bold;
    }

    .fixture-details, .knockout-details {
        display: flex;
        justify-content: space-between;
        color: rgba(255, 255, 255, 0.8);
        font-size: 0.9rem;
        flex-wrap: wrap;
        gap: 10px;
        margin-top: 10px;
        padding-top: 10px;
        border-top: 1px solid rgba(255, 255, 255, 0.1);
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
        gap: 20px;
        margin-top: 10px;
        flex-wrap: nowrap;
    }

    @media (max-width: 768px) {
        .fixture-teams-large, .knockout-teams-large {
            flex-direction: row;
            gap: 15px;
            flex-wrap: nowrap;
        }
        
        .team-side {
            text-align: center;
            flex: 1;
        }
        
        .fixture-vs, .knockout-vs {
            order: 0;
            margin: 0;
            flex: 0 0 auto;
        }

        .fixture-teams-large .team-name,
        .knockout-teams-large .team-name {
            font-size: 0.7rem;
            max-width: 80px;
        }

        .fixture-teams-large .team-logo-large,
        .knockout-teams-large .team-logo-large {
            width: 30px;
            height: 30px;
            font-size: 0.8rem;
        }

        .match-result {
            font-size: 0.6rem;
            padding: 2px 6px;
        }
    }

    .team-side {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 8px;
        flex: 1;
        min-width: 0;
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
        color: #e90052;
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
        overflow-x: hidden; /* Prevent horizontal scrolling */
        touch-action: pan-y; /* Only allow vertical panning, prevent horizontal */
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
        border-bottom: 3px solid #e90052;
        padding-bottom: 15px;
        text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
        font-family: 'EFootballStencil', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    }

    /* Home Page Styles */
    .hero-section {
        text-align: center;
        margin-bottom: 40px;
        background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('images/football-stadium.jpg');
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        padding: 80px 20px;
        margin: 0 -20px 40px -20px;
        width: calc(100% + 40px);
    }

    .hero-title {
        font-size: 3rem;
        color: #ffffff;
        margin-bottom: 20px;
        text-shadow: 3px 3px 6px rgba(0, 0, 0, 0.8);
        font-family: 'EFootballStencil', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        font-weight: bold;
    }

    .hero-subtitle {
        font-size: 1.2rem;
        color: #ffffff;
        margin-bottom: 30px;
        text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8);
        font-weight: 500;
        opacity: 0.95;
    }

    .hero-actions {
        display: flex;
        gap: 15px;
        justify-content: center;
        flex-wrap: wrap;
        margin-top: 30px;
    }

    /* Sponsors Section */
    .sponsors-section {
        background: linear-gradient(135deg, #1e0021 0%, #37003c 100%);
        padding: 40px 20px;
        margin: 60px -20px 0 -20px;
        width: calc(100% + 40px);
        border-top: 1px solid rgba(255, 255, 255, 0.1);
    }

    .sponsors-container {
        max-width: 1200px;
        margin: 0 auto;
        text-align: center;
    }

    .sponsors-title {
        color: rgba(255, 255, 255, 0.7);
        font-size: 0.9rem;
        font-weight: 500;
        text-transform: uppercase;
        letter-spacing: 2px;
        margin-bottom: 30px;
    }

    .sponsors-grid {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 60px;
        flex-wrap: wrap;
    }

    .sponsor-item {
        display: flex;
        align-items: center;
        justify-content: center;
        opacity: 0.6;
        transition: all 0.3s ease;
        filter: grayscale(100%) brightness(0.8);
    }

    .sponsor-item:hover {
        opacity: 1;
        filter: grayscale(0%) brightness(1);
        transform: scale(1.05);
    }

    /* Keep LinkMedia in original colors */
    .sponsor-item:first-child {
        filter: none;
        opacity: 0.8;
    }

    .sponsor-item:first-child:hover {
        filter: none;
        opacity: 1;
    }

    /* Apply silver/white colors to YTY and ThorVisual */
    .sponsor-item:nth-child(2) .sponsor-logo,
    .sponsor-item:nth-child(3) .sponsor-logo {
        filter: brightness(0) saturate(100%) invert(100%) brightness(0.9) contrast(1.1);
    }

    .sponsor-item:nth-child(2):hover .sponsor-logo,
    .sponsor-item:nth-child(3):hover .sponsor-logo {
        filter: brightness(0) saturate(100%) invert(100%) brightness(1) contrast(1.2);
    }

    .sponsor-logo {
        height: 60px;
        width: auto;
        max-width: 180px;
    }

    /* Certificates Section */
    .certificates-section {
        background: rgba(255, 255, 255, 0.05);
        border-radius: 15px;
        padding: 30px;
        margin: 40px 0;
        border: 1px solid rgba(255, 255, 255, 0.1);
        backdrop-filter: blur(10px);
    }

    .certificates-title {
        color: #ffffff;
        font-size: 1.5rem;
        font-weight: bold;
        margin-bottom: 20px;
        text-align: center;
        text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
    }

    .certificates-subtitle {
        color: rgba(255, 255, 255, 0.8);
        font-size: 1rem;
        text-align: center;
        margin-bottom: 30px;
    }

    .certificates-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        gap: 20px;
        margin-top: 20px;
    }

    .certificate-item {
        background: rgba(255, 255, 255, 0.1);
        border-radius: 12px;
        padding: 20px;
        text-align: center;
        border: 1px solid rgba(255, 255, 255, 0.2);
        transition: all 0.3s ease;
        cursor: pointer;
    }

    .certificate-item:hover {
        background: rgba(255, 255, 255, 0.15);
        transform: translateY(-2px);
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
    }

    .certificate-icon {
        font-size: 2.5rem;
        margin-bottom: 15px;
        color: #e90052;
    }

    .certificate-position {
        color: #ffffff;
        font-size: 1.2rem;
        font-weight: bold;
        margin-bottom: 10px;
    }

    .certificate-description {
        color: rgba(255, 255, 255, 0.8);
        font-size: 0.9rem;
        margin-bottom: 15px;
    }

    .certificate-actions {
        display: flex;
        gap: 10px;
        justify-content: center;
        flex-wrap: wrap;
    }

    .certificate-btn {
        padding: 8px 16px;
        border: none;
        border-radius: 20px;
        font-size: 0.8rem;
        font-weight: 500;
        cursor: pointer;
        transition: all 0.3s ease;
        text-decoration: none;
        display: inline-flex;
        align-items: center;
        gap: 5px;
    }

    .certificate-btn.download {
        background: #e90052;
        color: white;
    }

    .certificate-btn.download:hover {
        background: #c70046;
        transform: translateY(-1px);
    }

    .certificate-btn.view {
        background: rgba(255, 255, 255, 0.2);
        color: white;
        border: 1px solid rgba(255, 255, 255, 0.3);
    }

    .certificate-btn.view:hover {
        background: rgba(255, 255, 255, 0.3);
        transform: translateY(-1px);
    }

    /* Certificate Preview Modal */
    .certificate-modal {
        display: none;
        position: fixed;
        z-index: 1000;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.8);
        backdrop-filter: blur(5px);
    }

    .certificate-modal-content {
        position: relative;
        margin: 2% auto;
        padding: 20px;
        width: 90%;
        max-width: 800px;
        background: linear-gradient(135deg, #1e0021 0%, #37003c 100%);
        border-radius: 15px;
        border: 1px solid rgba(255, 255, 255, 0.2);
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
    }

    .certificate-modal-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 20px;
        padding-bottom: 15px;
        border-bottom: 1px solid rgba(255, 255, 255, 0.2);
    }

    .certificate-modal-title {
        color: #ffffff;
        font-size: 1.5rem;
        font-weight: bold;
        margin: 0;
    }

    .certificate-modal-close {
        color: #ffffff;
        font-size: 2rem;
        font-weight: bold;
        cursor: pointer;
        transition: color 0.3s ease;
        background: none;
        border: none;
        padding: 0;
        width: 40px;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
    }

    .certificate-modal-close:hover {
        color: #e90052;
        background: rgba(255, 255, 255, 0.1);
    }

    .certificate-preview {
        width: 100%;
        height: auto;
        max-height: 70vh;
        border-radius: 10px;
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
        object-fit: contain;
    }

    .certificate-modal-actions {
        display: flex;
        gap: 15px;
        justify-content: center;
        margin-top: 20px;
        padding-top: 20px;
        border-top: 1px solid rgba(255, 255, 255, 0.2);
    }

    .certificate-modal-btn {
        padding: 10px 20px;
        border: none;
        border-radius: 25px;
        font-size: 0.9rem;
        font-weight: 500;
        cursor: pointer;
        transition: all 0.3s ease;
        text-decoration: none;
        display: inline-flex;
        align-items: center;
        gap: 8px;
    }

    .certificate-modal-btn.download {
        background: #e90052;
        color: white;
    }

    .certificate-modal-btn.download:hover {
        background: #c70046;
        transform: translateY(-1px);
    }

    .certificate-modal-btn.close {
        background: rgba(255, 255, 255, 0.2);
        color: white;
        border: 1px solid rgba(255, 255, 255, 0.3);
    }

    .certificate-modal-btn.close:hover {
        background: rgba(255, 255, 255, 0.3);
        transform: translateY(-1px);
    }

    /* Season Filter Section */
    .season-filter-section {
        background: rgba(255, 255, 255, 0.05);
        border-radius: 15px;
        padding: 30px;
        margin: 40px 0;
        border: 1px solid rgba(255, 255, 255, 0.1);
        backdrop-filter: blur(10px);
    }

    .season-filter-section h2 {
        color: #ffffff;
        font-size: 1.5rem;
        margin-bottom: 20px;
        text-align: center;
    }

    .season-selector-container {
        position: relative;
        max-width: 400px;
        margin: 20px auto 0;
    }

    .certificate-season-select {
        width: 100%;
        padding: 15px 50px 15px 20px;
        background: rgba(255, 255, 255, 0.1);
        border: 2px solid rgba(255, 255, 255, 0.2);
        border-radius: 12px;
        color: #ffffff;
        font-size: 1rem;
        font-weight: 500;
        cursor: pointer;
        transition: all 0.3s ease;
        appearance: none;
        -webkit-appearance: none;
        -moz-appearance: none;
        backdrop-filter: blur(10px);
    }

    .certificate-season-select:hover {
        background: rgba(255, 255, 255, 0.15);
        border-color: rgba(255, 255, 255, 0.3);
        transform: translateY(-1px);
    }

    .certificate-season-select:focus {
        outline: none;
        background: rgba(255, 255, 255, 0.15);
        border-color: #e90052;
        box-shadow: 0 0 0 3px rgba(233, 0, 82, 0.2);
        transform: translateY(-1px);
    }

    .certificate-season-select option {
        background: #1a1a2e;
        color: #ffffff;
        padding: 10px;
        font-size: 1rem;
    }

    .season-selector-icon {
        position: absolute;
        right: 15px;
        top: 50%;
        transform: translateY(-50%);
        color: #e90052;
        font-size: 1.2rem;
        pointer-events: none;
        z-index: 1;
    }

    .certificates-header {
        text-align: center;
        margin-bottom: 30px;
    }

    .certificates-header h2 {
        color: #ffffff;
        font-size: 1.8rem;
        margin-bottom: 10px;
    }

    .certificates-header p {
        color: rgba(255, 255, 255, 0.8);
        font-size: 1rem;
    }

    /* No Certificates Message */
    .no-certificates-message {
        text-align: center;
        padding: 60px 40px;
        background: rgba(255, 255, 255, 0.03);
        border-radius: 15px;
        border: 2px dashed rgba(255, 255, 255, 0.1);
        margin: 20px 0;
    }

    .no-certificates-icon {
        font-size: 4rem;
        color: #ffc107;
        margin-bottom: 20px;
    }

    .no-certificates-message h3 {
        color: #ffffff;
        font-size: 1.5rem;
        margin-bottom: 15px;
        font-weight: 600;
    }

    .no-certificates-message p {
        color: rgba(255, 255, 255, 0.8);
        font-size: 1rem;
        margin-bottom: 20px;
        line-height: 1.6;
    }

    .season-status-info {
        background: rgba(255, 255, 255, 0.05);
        border-radius: 10px;
        padding: 20px;
        margin: 20px 0;
        border: 1px solid rgba(255, 255, 255, 0.1);
    }

    .status-badge {
        display: inline-block;
        padding: 8px 16px;
        border-radius: 25px;
        font-size: 0.9rem;
        font-weight: 600;
        text-transform: uppercase;
        margin-bottom: 10px;
    }

    .status-badge.completed {
        background: rgba(0, 255, 133, 0.2);
        color: #00ff85;
        border: 1px solid rgba(0, 255, 133, 0.3);
    }

    .status-badge.upcoming {
        background: rgba(255, 193, 7, 0.2);
        color: #ffc107;
        border: 1px solid rgba(255, 193, 7, 0.3);
    }

    .status-badge.planned {
        background: rgba(108, 117, 125, 0.2);
        color: #6c757d;
        border: 1px solid rgba(108, 117, 125, 0.3);
    }

    .status-description {
        color: rgba(255, 255, 255, 0.7);
        font-size: 0.9rem;
        margin: 0;
        font-style: italic;
    }

    .suggestion-text {
        background: rgba(233, 0, 82, 0.1);
        border-radius: 10px;
        padding: 15px;
        margin-top: 20px;
        border-left: 4px solid #e90052;
    }

    .suggestion-text p {
        color: rgba(255, 255, 255, 0.9);
        font-size: 0.9rem;
        margin: 0;
        display: flex;
        align-items: center;
        gap: 8px;
    }

    .suggestion-text i {
        color: #e90052;
    }

    /* Certificate Loading Spinner */
    .certificate-loading {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 60px 20px;
        color: rgba(255, 255, 255, 0.9);
        background: rgba(0, 0, 0, 0.3);
        border-radius: 10px;
        margin: 20px;
    }

    .certificate-spinner {
        width: 60px;
        height: 60px;
        border: 5px solid rgba(255, 255, 255, 0.2);
        border-top: 5px solid #e90052;
        border-radius: 50%;
        animation: spin 1s linear infinite;
        margin-bottom: 20px;
        box-shadow: 0 0 20px rgba(233, 0, 82, 0.3);
    }

    @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }

    .certificate-loading-text {
        font-size: 1.2rem;
        font-weight: 600;
        margin-bottom: 10px;
        color: #ffffff;
        text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
    }

    .certificate-loading-subtext {
        font-size: 1rem;
        opacity: 0.8;
        color: rgba(255, 255, 255, 0.9);
        text-align: center;
    }




    /* Mobile Season Selector */
    @media (max-width: 768px) {
        .nav-container {
            flex-direction: row;
            height: 70px;
            padding: 0 20px;
            gap: 10px;
        }
        
        .nav-logo {
            order: 1;
            flex: 1;
            text-align: left;
        }
        
        .season-selector {
            order: 2;
            margin: 0;
            flex: 1;
            justify-content: center;
            display: flex;
            align-items: center;
        }
        
        .season-select {
            min-width: 100%;
            max-width: 200px;
            width: 100%;
            font-size: 0.9rem;
            padding: 8px 35px 8px 12px;
            border-radius: 8px;
            text-align: center;
            margin: 0;
            box-sizing: border-box;
        }

        .season-select-arrow {
            right: 10px;
            font-size: 0.8rem;
        }
        
        .nav-menu {
            order: 3;
            display: none;
        }
        
        /* Adjust search container margin for mobile */
        .search-container {
            margin-top: 90px;
        }
    }

    /* Small Mobile Season Selector */
    @media (max-width: 480px) {
        .nav-container {
            padding: 0 15px;
            gap: 8px;
        }
        
        
        .nav-logo-text {
            font-size: 0.9rem;
        }
    }

    /* Important Message Styles */
    .important-message {
        padding: 8px 16px;
        margin: 0 auto 15px auto;
        max-width: 1200px;
        font-size: 12px;
    }

    .message-content {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 6px;
        font-weight: 700;
        color: #dc3545;
        text-transform: uppercase;
        letter-spacing: 0.5px;
    }

    .message-content i {
        font-size: 12px;
        color: #dc3545;
    }


    /* Responsive Important Message */
    @media (max-width: 768px) {
        .important-message {
            margin: 0 15px 10px 15px;
            padding: 6px 12px;
            font-size: 11px;
        }
        
        .message-content {
            text-align: center;
            letter-spacing: 0.3px;
        }
        
        .message-content i {
            font-size: 11px;
        }
    }

    /* Unavailable Season Message Styles (Planned/Upcoming) */
    .unavailable-season-message {
        display: none;
        max-width: 1200px;
        margin: 0 auto;
        padding: 60px 20px;
        text-align: center;
        min-height: calc(100vh - 200px);
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .unavailable-message-content {
        background: linear-gradient(135deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.05));
        backdrop-filter: blur(20px);
        border: 1px solid rgba(255, 255, 255, 0.2);
        border-radius: 24px;
        padding: 60px 60px;
        max-width: 1000px;
        margin: 0 auto;
        box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
        position: relative;
        overflow: hidden;
    }

    .unavailable-message-content::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 4px;
        background: linear-gradient(90deg, #e90052, #00ff85, #e90052);
        background-size: 200% 100%;
        animation: gradient-shift 3s ease-in-out infinite;
    }

    @keyframes gradient-shift {
        0%, 100% { background-position: 0% 50%; }
        50% { background-position: 100% 50%; }
    }

    .unavailable-message-content i {
        font-size: 64px;
        margin-bottom: 30px;
        display: block;
        animation: pulse-glow 2s ease-in-out infinite;
    }

    .unavailable-message-content i.fa-calendar-plus {
        color: #ffc107;
        text-shadow: 0 0 20px rgba(255, 193, 7, 0.5);
    }

    .unavailable-message-content i.fa-clock {
        color: #17a2b8;
        text-shadow: 0 0 20px rgba(23, 162, 184, 0.5);
    }

    .unavailable-message-content i.fa-info-circle {
        color: #6c757d;
        text-shadow: 0 0 20px rgba(108, 117, 125, 0.5);
    }

    @keyframes pulse-glow {
        0%, 100% { 
            transform: scale(1);
            opacity: 1;
        }
        50% { 
            transform: scale(1.1);
            opacity: 0.8;
        }
    }

    .unavailable-message-content h3 {
        color: #ffffff;
        font-size: 32px;
        font-weight: 700;
        margin-bottom: 20px;
        text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
        letter-spacing: 1px;
    }

    .unavailable-message-content p {
        color: rgba(255, 255, 255, 0.9);
        font-size: 18px;
        line-height: 1.6;
        margin-bottom: 15px;
        text-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
    }

    .unavailable-message-content p:last-of-type {
        color: rgba(255, 255, 255, 0.7);
        font-size: 16px;
        margin-bottom: 0;
    }

    .unavailable-actions {
        margin-top: 40px;
    }

    .btn-view-available {
        background: linear-gradient(135deg, #e90052, #c70039);
        color: white;
        border: none;
        padding: 16px 32px;
        border-radius: 50px;
        font-size: 16px;
        font-weight: 700;
        cursor: pointer;
        transition: all 0.4s ease;
        display: inline-flex;
        align-items: center;
        gap: 12px;
        text-transform: uppercase;
        letter-spacing: 1px;
        box-shadow: 0 8px 25px rgba(233, 0, 82, 0.3);
        position: relative;
        overflow: hidden;
    }

    .btn-view-available::before {
        content: '';
        position: absolute;
        top: 0;
        left: -100%;
        width: 100%;
        height: 100%;
        background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
        transition: left 0.5s ease;
    }

    .btn-view-available:hover::before {
        left: 100%;
    }

    .btn-view-available:hover {
        background: linear-gradient(135deg, #c70039, #a0002e);
        transform: translateY(-3px) scale(1.05);
        box-shadow: 0 12px 35px rgba(233, 0, 82, 0.4);
    }

    .btn-view-available:active {
        transform: translateY(-1px) scale(1.02);
    }

    .btn-view-available i {
        font-size: 16px;
        margin: 0;
        transition: transform 0.3s ease;
    }

    .btn-view-available:hover i {
        transform: rotate(5deg);
    }

    /* Responsive Unavailable Season Message */
    @media (max-width: 768px) {
        .unavailable-season-message {
            margin: 0 15px;
            padding: 40px 15px;
            min-height: calc(100vh - 150px);
        }
        
        .unavailable-message-content {
            padding: 40px 35px;
            max-width: 98%;
            border-radius: 20px;
        }
        
        .unavailable-message-content i {
            font-size: 48px;
            margin-bottom: 20px;
        }
        
        .unavailable-message-content h3 {
            font-size: 24px;
            margin-bottom: 15px;
            letter-spacing: 0.5px;
        }
        
        .unavailable-message-content p {
            font-size: 16px;
            line-height: 1.5;
        }
        
        .unavailable-message-content p:last-of-type {
            font-size: 14px;
        }
        
        .unavailable-actions {
            margin-top: 30px;
        }
        
        .btn-view-available {
            padding: 14px 28px;
            font-size: 14px;
            border-radius: 40px;
        }
    }

    @media (max-width: 480px) {
        .unavailable-season-message {
            padding: 30px 10px;
        }
        
        .unavailable-message-content {
            padding: 30px 30px;
            max-width: 98%;
            border-radius: 16px;
        }
        
        .unavailable-message-content i {
            font-size: 40px;
            margin-bottom: 15px;
        }
        
        .unavailable-message-content h3 {
            font-size: 20px;
            margin-bottom: 12px;
        }
        
        .unavailable-message-content p {
            font-size: 15px;
        }
        
        .unavailable-message-content p:last-of-type {
            font-size: 13px;
        }
        
        .btn-view-available {
            padding: 12px 24px;
            font-size: 13px;
        }
    }

    /* Season Selector Styles */
    .season-selector {
        display: flex;
        align-items: center;
        margin: 0 20px;
        position: relative;
    }

    .season-select-wrapper {
        position: relative;
        display: inline-block;
    }

    .season-select {
        background: linear-gradient(135deg, rgba(233, 0, 82, 0.2), rgba(138, 43, 226, 0.2));
        border: 2px solid transparent;
        border-radius: 12px;
        color: #ffffff;
        padding: 12px 45px 12px 20px;
        font-size: 0.95rem;
        font-weight: 600;
        cursor: pointer;
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        outline: none;
        min-width: 180px;
        position: relative;
        backdrop-filter: blur(10px);
        box-shadow: 
            0 4px 15px rgba(0, 0, 0, 0.2),
            inset 0 1px 0 rgba(255, 255, 255, 0.1);
        text-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);
        appearance: none;
        -webkit-appearance: none;
        -moz-appearance: none;
    }

    .season-select-arrow {
        position: absolute;
        right: 15px;
        top: 50%;
        transform: translateY(-50%);
        color: #e90052;
        font-size: 0.9rem;
        pointer-events: none;
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        z-index: 2;
    }

    .season-select:hover + .season-select-arrow {
        color: #ff6b9d;
        transform: translateY(-50%) scale(1.1);
    }

    .season-select:focus + .season-select-arrow {
        color: #ff6b9d;
        transform: translateY(-50%) scale(1.1);
    }

    .season-select:hover {
        background: linear-gradient(135deg, rgba(233, 0, 82, 0.3), rgba(138, 43, 226, 0.3));
        border-color: rgba(233, 0, 82, 0.6);
        transform: translateY(-2px) scale(1.02);
        box-shadow: 
            0 8px 25px rgba(233, 0, 82, 0.3),
            inset 0 1px 0 rgba(255, 255, 255, 0.2);
    }

    .season-select:focus {
        border-color: rgba(233, 0, 82, 0.8);
        box-shadow: 
            0 0 0 3px rgba(233, 0, 82, 0.3),
            0 8px 25px rgba(233, 0, 82, 0.3),
            inset 0 1px 0 rgba(255, 255, 255, 0.2);
        transform: translateY(-2px) scale(1.02);
    }

    .season-select:active {
        transform: translateY(0) scale(0.98);
    }

    .season-select option {
        background: linear-gradient(135deg, #1a1a2e, #16213e);
        color: #ffffff;
        padding: 12px 16px;
        font-weight: 500;
        border: none;
    }

    .season-select option:hover {
        background: linear-gradient(135deg, rgba(233, 0, 82, 0.3), rgba(138, 43, 226, 0.3));
    }

    .season-select option:checked {
        background: linear-gradient(135deg, rgba(233, 0, 82, 0.4), rgba(138, 43, 226, 0.4));
        color: #ffffff;
    }

    /* Season Selector Animations */
    .season-select.updating {
        opacity: 0.5;
        transform: scale(0.98);
        transition: all 0.3s ease;
    }

    .season-select.updated {
        animation: seasonSuccess 0.6s ease-out;
    }

    @keyframes seasonSuccess {
        0% {
            transform: scale(1);
        }
        50% {
            transform: scale(1.05);
            box-shadow: 
                0 8px 25px rgba(76, 175, 80, 0.4),
                inset 0 1px 0 rgba(255, 255, 255, 0.2);
        }
        100% {
            transform: scale(1);
        }
    }

    .season-select.changing {
        background: linear-gradient(135deg, rgba(255, 193, 7, 0.3), rgba(255, 152, 0, 0.3));
        border-color: rgba(255, 193, 7, 0.6);
        transform: scale(0.95);
        transition: all 0.3s ease;
    }

    .season-select.changed {
        animation: seasonSuccess 0.6s ease-out;
    }

    .season-select.error {
        background: linear-gradient(135deg, rgba(244, 67, 54, 0.3), rgba(211, 47, 47, 0.3));
        border-color: rgba(244, 67, 54, 0.6);
        animation: seasonError 0.6s ease-out;
    }

    @keyframes seasonError {
        0% {
            transform: translateX(0);
        }
        25% {
            transform: translateX(-5px);
        }
        75% {
            transform: translateX(5px);
        }
        100% {
            transform: translateX(0);
        }
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
        background: #e90052;
        color: #1e0021;
    }

    .hero-btn.primary:hover {
        background:rgb(198, 3, 71);
        transform: translateY(-2px);
        box-shadow: 0 5px 15px rgba(255, 0, 157, 0.5);
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
        grid-template-columns: repeat(4, 1fr);
        gap: 15px;
        margin-bottom: 40px;
    }

    .stat-card {
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        color: white;
        padding: 20px;
        border-radius: 15px;
        text-align: center;
        box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
        transition: all 0.3s ease;
        position: relative;
        overflow: hidden;
        aspect-ratio: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
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
        font-size: 2rem;
        font-weight: bold;
        margin-bottom: 8px;
    }

    .stat-label {
        font-size: 0.9rem;
        opacity: 0.9;
        margin-bottom: 5px;
    }

    .stat-icon {
        font-size: 1.2rem;
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
        border-bottom: 2px solid rgba(255, 93, 182, 0.3);
    }

    .section-header h2 {
        color: #e90052;
        font-size: 1.3rem;
        margin: 0;
        display: flex;
        align-items: center;
        gap: 10px;
    }

    .view-all-btn {
        background: rgba(255, 182, 0, 0.2);
        color: #e90052;
        border: 1px solid rgba(228, 76, 160, 0.3);
        padding: 8px 16px;
        border-radius: 20px;
        font-size: 0.9rem;
        cursor: pointer;
        transition: all 0.3s ease;
    }

    .view-all-btn:hover {
        background: rgba(244, 67, 54, 0.3);
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
        border-left: 4px solid #e90052;
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
        color: #e90052;
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
        color: #e90052;
        font-size: 1.2rem;
        font-weight: bold;
        margin: 0 15px;
    }
    
    .group-label {
        color: #e90052;
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
        border: 1px solid rgba(244, 67, 54, 0.3);
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
        border: 1px solid rgba(255, 93, 182, 0.3);
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
        color: #e90052;
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
        color: #e90052;
        margin-bottom: 10px;
        display: block;
    }

    .no-data-message p {
        margin: 0;
        font-size: 1rem;
    }

    .match-divider {
        height: 1px;
        background: linear-gradient(90deg, transparent, rgba(244, 67, 54, 0.3), transparent);
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
        padding: 20px 15px 15px 15px;
        border-left: 3px solid #e90052;
        color: white;
        position: relative;
        margin-bottom: 15px;
        backdrop-filter: blur(10px);
        transition: all 0.3s ease;
        margin-top: 15px;
    }

    /* Completed Match Styling */
    .fixture-item.completed {
        border-left: 4px solid #4CAF50;
        background: rgba(55, 0, 60, 0.3);
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
        box-shadow: 0 2px 8px rgba(244, 67, 54, 0.3);
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
        color: #e90052;
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
        border-color: #e90052;
        background: rgba(0, 0, 0, 0.8);
    }

    .sort-dropdown:focus {
        outline: none;
        border-color: #e90052;
        box-shadow: 0 0 10px rgba(244, 67, 54, 0.3);
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
        color: #e90052;
        margin-bottom: 15px;
        display: block;
    }

    .no-matches-message h3 {
        color: #e90052;
        font-size: 1.2rem;
        margin: 0 0 10px 0;
    }

    .no-matches-message p {
        color: rgba(255, 255, 255, 0.8);
        font-size: 0.9rem;
        margin: 0;
    }

    .section-title {
        color: #e90052;
        font-size: 1.5rem;
        margin: 30px 0 20px 0;
        padding-bottom: 10px;
        border-bottom: 2px solid rgba(244, 67, 54, 0.3);
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
        color: #e90052;
        font-size: 1.8rem;
        margin-bottom: 20px;
        text-align: center;
        text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
    }

    .matchday-badge {
        background: linear-gradient(135deg, #e90052, rgb(198, 3, 71));
        color: #1e0021;
        padding: 5px 12px;
        border-radius: 20px;
        font-size: 0.8rem;
        font-weight: bold;
        position: absolute;
        top: -10px;
        right: 20px;
        box-shadow: 0 2px 8px rgba(244, 67, 54, 0.3);
        z-index: 10;
    }

    .group-table-section {
        margin-bottom: 40px;
    }

    .qualified {
        border-left: 4px solid #28a745;
        background: rgba(55, 0, 60, 0.3);
    }

    .qualified:hover {
        background: rgba(233, 0, 82, 0.1);
    }

    .eliminated {
        border-left: 4px solid #dc3545;
        background: rgba(220, 53, 69, 0.1);
    }

    .eliminated:hover {
        background: rgba(220, 53, 69, 0.15);
    }

    .fixture-teams {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 15px;
        margin-top: 10px;
        gap: 15px;
    }

    .team {
        display: flex;
        align-items: center;
        gap: 10px;
        flex: 1;
        min-width: 0;
    }
    
    .team span {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        max-width: 120px;
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
        border-color: #e90052;
        box-shadow: 0 4px 12px rgba(244, 67, 54, 0.3);
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
        margin-top: 10px;
        padding-top: 10px;
        border-top: 1px solid rgba(255, 255, 255, 0.1);
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
        background: rgba(55, 0, 60, 0.8);
        color: white;
        padding: 15px;
        text-align: left;
        font-weight: 600;
        border-bottom: 2px solid #e90052;
    }

    .league-table td {
        padding: 12px 15px;
        border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        background: rgba(255, 255, 255, 0.05);
    }

    .league-table tr:hover {
        background: rgba(233, 0, 82, 0.1);
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
        text-align: center;
    }

    /* Clubs Styles */
    .clubs-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
        gap: 25px;
    }

    .club-card {
        background: rgba(255, 255, 255, 0.05);
        border-radius: 15px;
        overflow: hidden;
        transition: all 0.3s ease;
        color: white;
        position: relative;
        border: 1px solid rgba(255, 255, 255, 0.1);
        backdrop-filter: blur(10px);
    }

    .club-card:hover {
        transform: translateY(-5px);
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
        border-color: rgba(255, 255, 255, 0.2);
    }

    .club-header {
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        color: white;
        padding: 20px;
        text-align: center;
        border-bottom: 1px solid rgba(255, 255, 255, 0.2);
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
        color: white;
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
        color: rgba(255, 255, 255, 0.7);
    }

    .stat-value {
        font-size: 1rem;
        font-weight: bold;
        color: white;
    }

    .stat-value.positive {
        color: #00ff85;
    }

    .stat-value.negative {
        color: #ff6b6b;
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
        color: rgba(255, 255, 255, 0.7);
    }

    .click-indicator {
        background: rgba(255, 182, 0, 0.1);
        padding: 12px;
        text-align: center;
        border-top: 1px solid rgba(244, 67, 54, 0.3);
        font-size: 0.9rem;
        color: #e90052;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 8px;
    }

    .click-indicator i {
        font-size: 0.8rem;
    }

    /* Club Trophies Styles */
    .club-trophies {
        background: rgba(255, 255, 255, 0.03);
        border-top: 1px solid rgba(255, 255, 255, 0.1);
        padding: 15px 20px;
    }

    .trophies-header {
        display: flex;
        align-items: center;
        gap: 8px;
        margin-bottom: 12px;
        color: #ffd700;
        font-weight: 600;
        font-size: 0.9rem;
    }

    .trophies-header i {
        font-size: 1rem;
    }

    .trophies-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(80px, 1fr));
        gap: 10px;
        margin-bottom: 12px;
    }

    .trophy-item {
        background: rgba(255, 255, 255, 0.05);
        border-radius: 8px;
        padding: 8px;
        text-align: center;
        border: 1px solid rgba(255, 255, 255, 0.1);
        transition: all 0.3s ease;
    }

    .trophy-item:hover {
        background: rgba(255, 255, 255, 0.08);
        transform: translateY(-2px);
    }

    .trophy-item.champion {
        border-color: rgba(255, 215, 0, 0.3);
        background: rgba(255, 215, 0, 0.1);
    }

    .trophy-item.runner-up {
        border-color: rgba(192, 192, 192, 0.3);
        background: rgba(192, 192, 192, 0.1);
    }

    .trophy-item.third-place {
        border-color: rgba(205, 127, 50, 0.3);
        background: rgba(205, 127, 50, 0.1);
    }

    .trophy-item i {
        display: block;
        font-size: 1.2rem;
        margin-bottom: 4px;
    }

    .trophy-item.champion i {
        color: #ffd700;
    }

    .trophy-item.runner-up i {
        color: #c0c0c0;
    }

    .trophy-item.third-place i {
        color: #cd7f32;
    }

    .trophy-count {
        display: block;
        font-size: 1.1rem;
        font-weight: bold;
        color: #ffffff;
        margin-bottom: 2px;
    }

    .trophy-label {
        display: block;
        font-size: 0.7rem;
        color: rgba(255, 255, 255, 0.8);
        line-height: 1.2;
    }

    .trophy-seasons {
        border-top: 1px solid rgba(255, 255, 255, 0.1);
        padding-top: 10px;
    }

    .seasons-label {
        font-size: 0.8rem;
        color: rgba(255, 255, 255, 0.7);
        margin-bottom: 6px;
    }

    .seasons-list {
        display: flex;
        flex-wrap: wrap;
        gap: 4px;
    }

    .season-badge {
        background: rgba(233, 0, 82, 0.2);
        color: #e90052;
        padding: 2px 6px;
        border-radius: 4px;
        font-size: 0.7rem;
        border: 1px solid rgba(233, 0, 82, 0.3);
    }

    .season-badge.champion {
        background: rgba(255, 215, 0, 0.2);
        color: #ffd700;
        border-color: rgba(255, 215, 0, 0.3);
    }

    .season-badge.runner-up {
        background: rgba(192, 192, 192, 0.2);
        color: #c0c0c0;
        border-color: rgba(192, 192, 192, 0.3);
    }

    .season-badge.third-place {
        background: rgba(205, 127, 50, 0.2);
        color: #cd7f32;
        border-color: rgba(205, 127, 50, 0.3);
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
        color: #e90052;
        border-radius: 15px;
        font-size: 0.9rem;
        font-weight: bold;
    }

    .penalties-display {
        margin-top: 8px;
        padding: 6px 12px;
        background: rgba(244, 67, 54, 0.3);
        color: #e90052;
        border-radius: 15px;
        font-size: 0.9rem;
        font-weight: bold;
        border: 1px solid #e90052;
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
        color: #e90052;
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

        .knockouts-not-started {
            padding: 40px 20px;
        }

        .not-started-icon {
            font-size: 3rem;
            margin-bottom: 15px;
        }

        .knockouts-not-started h2 {
            font-size: 1.5rem;
        }

        .knockouts-not-started p {
            font-size: 1rem;
        }

        .group-stage-info {
            grid-template-columns: 1fr;
            gap: 15px;
        }

        .info-card {
            padding: 20px;
        }

        .info-card i {
            font-size: 1.5rem;
            margin-bottom: 10px;
        }

        .info-card h3 {
            font-size: 1.1rem;
        }

        .info-card p {
            font-size: 0.9rem;
        }

        .suggestion-text {
            padding: 12px;
        }

        .suggestion-text p {
            font-size: 0.8rem;
            flex-direction: column;
            text-align: center;
            gap: 5px;
        }

    }
    
    /* Knockouts Not Started Message */
    .knockouts-not-started {
        background: rgba(255, 255, 255, 0.05);
        border-radius: 15px;
        padding: 60px 40px;
        margin-bottom: 30px;
        border: 1px solid rgba(255, 255, 255, 0.1);
        backdrop-filter: blur(10px);
        text-align: center;
    }

    .not-started-icon {
        font-size: 4rem;
        color: #ffc107;
        margin-bottom: 20px;
    }

    .knockouts-not-started h2 {
        color: #ffffff;
        font-size: 1.8rem;
        margin-bottom: 15px;
        font-weight: 600;
    }

    .knockouts-not-started p {
        color: rgba(255, 255, 255, 0.8);
        font-size: 1.1rem;
        margin-bottom: 30px;
        line-height: 1.6;
    }

    .group-stage-info {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        gap: 20px;
        margin: 30px 0;
    }

    .info-card {
        background: rgba(255, 255, 255, 0.08);
        border-radius: 12px;
        padding: 25px;
        border: 1px solid rgba(255, 255, 255, 0.1);
        transition: all 0.3s ease;
    }

    .info-card:hover {
        background: rgba(255, 255, 255, 0.12);
        transform: translateY(-2px);
    }

    .info-card i {
        font-size: 2rem;
        color: #e90052;
        margin-bottom: 15px;
    }

    .info-card h3 {
        color: #ffffff;
        font-size: 1.2rem;
        margin-bottom: 10px;
        font-weight: 600;
    }

    .info-card p {
        color: rgba(255, 255, 255, 0.7);
        font-size: 0.95rem;
        margin: 0;
        line-height: 1.5;
    }

    .suggestion-text {
        background: rgba(233, 0, 82, 0.1);
        border-radius: 10px;
        padding: 15px;
        margin-top: 20px;
        border-left: 4px solid #e90052;
    }

    .suggestion-text p {
        color: rgba(255, 255, 255, 0.9);
        font-size: 0.9rem;
        margin: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 8px;
    }

    .suggestion-text i {
        color: #e90052;
    }

    .suggestion-text a:hover {
        text-decoration: underline !important;
    }


    /* Knockout Tabs Styles */
    .knockout-tabs {
        display: flex;
        gap: 10px;
        margin-bottom: 30px;
        border-bottom: 2px solid rgba(255, 93, 182, 0.3);
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
        border-color: rgba(244, 67, 54, 0.3);
    }

    .tab-button.active {
        background: rgba(255, 182, 0, 0.2);
        border-color: #e90052;
        color: #e90052;
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
        color: #e90052;
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
        background: rgba(55, 0, 60, 0.3);
        border: 2px solid #e90052;
        font-weight: bold;
        border-radius: 8px;
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
        background: #e90052;
        color: #1e0021;
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
        color: #1e0021;
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
        border-bottom: 2px solid #e90052;
        padding-bottom: 10px;
        text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
    }

    .match-card {
        background: rgba(255, 255, 255, 0.05);
        border-radius: 10px;
        padding: 5px;
        margin-bottom: 15px;
        border-left: 4px solid #e90052;
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
        color: #e90052;
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
        border: 2px solid rgba(244, 67, 54, 0.3);
        background: rgba(255, 182, 0, 0.1);
    }
    
    .team-logo.club-badge:hover {
        border-color: #e90052;
        background: rgba(255, 182, 0, 0.2);
    }

    /* Footer Styles */
    .footer {
        background: rgba(0, 0, 0, 0.9);
        backdrop-filter: blur(10px);
        border-top: 1px solid rgba(255, 255, 255, 0.1);
        padding: 20px 0;
        margin-top: auto; /* Push to bottom */
        width: 100%;
    }

    .footer-content {
        max-width: 1200px;
        margin: 0 auto;
        padding: 0 20px;
        text-align: center;
    }

    .footer-content p {
        color: rgba(255, 255, 255, 0.7);
        font-size: 14px;
        font-weight: 500;
        margin: 0;
        letter-spacing: 0.5px;
    }

    /* Responsive Footer */
    @media (max-width: 768px) {
        .footer {
            padding: 15px 0;
        }
        
        .footer-content {
            padding: 0 15px;
        }
        
        .footer-content p {
            font-size: 13px;
        }
    }

    @media (max-width: 480px) {
        .footer {
            padding: 12px 0;
        }
        
        .footer-content p {
            font-size: 12px;
        }
    }

    /* Responsive Design */
    @media (max-width: 768px) {
        .hero-section {
            padding: 60px 15px;
            margin: 0 -15px 30px -15px;
            width: calc(100% + 30px);
        }
        
        .hero-title {
            font-size: 2.2rem;
        }
        
        .hero-subtitle {
            font-size: 1rem;
        }
        
        .sponsors-section {
            padding: 30px 15px;
            margin: 40px -15px 0 -15px;
            width: calc(100% + 30px);
        }
        
        .sponsors-grid {
            gap: 40px;
        }
        
        .sponsor-logo {
            height: 45px;
            max-width: 140px;
        }
        
        .sponsors-title {
            font-size: 0.8rem;
            margin-bottom: 20px;
        }
        
        .certificates-section {
            padding: 20px;
            margin: 30px 0;
        }
        
        .certificates-title {
            font-size: 1.3rem;
        }
        
        .certificates-subtitle {
            font-size: 0.9rem;
        }

        .season-filter-section {
            padding: 20px;
            margin: 30px 0;
        }

        .season-filter-section h2 {
            font-size: 1.3rem;
        }

        .season-selector-container {
            max-width: 100%;
            margin: 15px 0 0;
        }

        .certificate-season-select {
            padding: 12px 45px 12px 15px;
            font-size: 0.9rem;
        }

        .season-selector-icon {
            right: 12px;
            font-size: 1rem;
        }

        .no-certificates-message {
            padding: 40px 20px;
        }

        .no-certificates-icon {
            font-size: 3rem;
            margin-bottom: 15px;
        }

        .no-certificates-message h3 {
            font-size: 1.3rem;
        }

        .no-certificates-message p {
            font-size: 0.9rem;
        }

        .season-status-info {
            padding: 15px;
        }

        .status-badge {
            font-size: 0.8rem;
            padding: 6px 12px;
        }

        .suggestion-text {
            padding: 12px;
        }

        .suggestion-text p {
            font-size: 0.8rem;
            flex-direction: column;
            text-align: center;
            gap: 5px;
        }
        
        .certificates-grid {
            grid-template-columns: 1fr;
            gap: 15px;
        }
        
        .certificate-item {
            padding: 15px;
        }
        
        .certificate-icon {
            font-size: 2rem;
        }
        
        .certificate-position {
            font-size: 1.1rem;
        }
        
        .certificate-actions {
            flex-direction: column;
            gap: 8px;
        }
        
        .certificate-btn {
            width: 100%;
            justify-content: center;
        }
        
        .certificate-modal-content {
            width: 95%;
            margin: 5% auto;
            padding: 15px;
        }
        
        .certificate-modal-title {
            font-size: 1.2rem;
        }
        
        .certificate-modal-close {
            font-size: 1.5rem;
            width: 35px;
            height: 35px;
        }
        
        .certificate-preview {
            max-height: 60vh;
        }
        
        .certificate-modal-actions {
            flex-direction: column;
            gap: 10px;
        }
        
        .certificate-modal-btn {
            width: 100%;
            justify-content: center;
        }
        
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
            grid-template-columns: repeat(4, 1fr);
            gap: 8px;
        }
        
        .stat-card {
            padding: 10px;
        }
        
        .stat-number {
            font-size: 1.2rem;
        }
        
        .stat-label {
            font-size: 0.7rem;
        }
        
        .stat-icon {
            font-size: 0.9rem;
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
            flex-direction: row;
            gap: 10px;
            text-align: center;
            margin-top: 20px;
            justify-content: space-between;
        }
        
        .matchday-badge {
            position: relative;
            top: 0;
            right: 0;
            margin-bottom: 10px;
            display: inline-block;
        }
        
        .team span {
            max-width: 80px;
            font-size: 0.8rem;
        }
        
        .team {
            flex-direction: column;
            align-items: center;
            gap: 5px;
        }
        
        .team-logo {
            width: 30px;
            height: 30px;
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
    },
    'yunusu': {
        name: 'Yunusu',
        stadium: 'Yunusu Arena',
        manager: 'Yunusu Manager',
        capacity: 27000,
        founded: 2021,
        titles: 0,
        colors: ['#b71c1c', '#ef5350'],
        shortName: 'YUN',
        logo: 'YUN'
    },
    'lardker': {
        name: 'Lardker',
        stadium: 'Lardker Feild',
        manager: 'Lardker Manager',
        capacity: 3000,
        founded: 2024,
        titles: 0,
        colors: ['#b71c1c', '#4a148c'],
        shortName: 'LAD',
        logo: 'LAD'
    },
    'delvin': {
        name: 'Delvin Rash',
        stadium: 'Rash Feild',
        manager: 'Delvin Manager',
        capacity: 3000,
        founded: 2024,
        titles: 0,
        colors: ['#4a148c', '#4caf50'],
        shortName: 'DEL',
        logo: 'DEL'
    },
    'brioz': {
        name: 'Brioz',
        stadium: 'Brioz Stadium',
        manager: 'Brioz Manager',
        capacity: 13000,
        founded: 2025,
        titles: 0,
        colors: ['#bf360c', '#4caf50'],
        shortName: 'BRI',
        logo: 'BRI'
    },
    
};

// Multi-Season Data Structure
const seasonsData = {
    season1: {
        id: 'season1',
        name: 'Season 1',
        year: 'August 2025',
        status: 'completed',
        startDate: '2025-08-01',
        endDate: '2025-08-31',
        groups: {
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
        }
    },
    season2: {
        id: 'season2',
        name: 'Season 2',
        year: 'September 2025',
        status: 'ongoing',
        startDate: '2025-09-01',
        endDate: '2025-09-30',
        groups: {
            groupA: [
                { id: 'dav_lil7', name: 'Dav-Lil7', shortName: 'DAV' },
                { id: 'phenom', name: 'Phenom', shortName: 'PHE' },
                { id: 'yunusu', name: 'Yunusu', shortName: 'YUN' },
                { id: 'mignon', name: 'Mignon', shortName: 'MIG' },
                { id: 'ghost', name: 'ghost', shortName: 'GHO' }
            ],
            groupB: [
                { id: 'dandizzo', name: 'Dandizzo', shortName: 'DAN' },
                { id: 'elton', name: 'Elton', shortName: 'ELT' },
                { id: 'yotah', name: 'Yotah', shortName: 'YOT' },
                { id: 'wato', name: 'Wato', shortName: 'WAT' },
                { id: 'volts', name: 'Volts', shortName: 'VOL' }
            ],
            groupC: [
                { id: 'its_lyta23', name: 'Its_Lyta23', shortName: 'LYT' },
                { id: 'lardker', name: 'Lardker', shortName: 'LAD' },
                { id: 'kenno', name: 'Kenno', shortName: 'KEN' },
                { id: 'thorvisual', name: 'ThorVisual', shortName: 'THO' },
                { id: 'offer_art', name: 'Offer Art', shortName: 'OFF' }
            ],
            groupD: [
                { id: 'ghazi', name: 'Ghazi', shortName: 'GHA' },
                { id: 'delvin', name: 'Delvin Rash', shortName: 'DEL' },
                { id: 'brioz', name: 'Brioz', shortName: 'BRI' },
                { id: 'thDrksid', name: 'ThDrksid', shortName: 'DARK' },
                { id: 'maria', name: 'Aka The Kraven', shortName: 'AFC' }
            ]
        }
    },
    season3: {
        id: 'season3',
        name: 'Season 3',
        year: 'October 2025',
        status: 'planned',
        startDate: '2025-10-01',
        endDate: '2025-10-31',
        groups: {
            groupA: [
                { id: 'dav_lil7', name: 'Dav-Lil7', shortName: 'DAV' },
                { id: 'dyno', name: 'Dyno', shortName: 'DYN' },
                { id: 'kenno', name: 'Kenno', shortName: 'KEN' },
                { id: 'thorvisual', name: 'ThorVisual', shortName: 'THO' },
                { id: 'ghost', name: 'ghost', shortName: 'GHO' }
            ],
            groupB: [
                { id: 'phenom', name: 'Phenom', shortName: 'PHE' },
                { id: 'its_lyta23', name: 'Its_Lyta23', shortName: 'LYT' },
                { id: 'offer_art', name: 'Offer Art', shortName: 'OFF' },
                { id: 'thDrksid', name: 'ThDrksid', shortName: 'DARK' },
                { id: 'volts', name: 'Volts', shortName: 'VOL' }
            ],
            groupC: [
                { id: 'elton', name: 'Elton', shortName: 'ELT' },
                { id: 'dandizzo', name: 'Dandizzo', shortName: 'DAN' },
                { id: 'emjay', name: 'Emjay', shortName: 'EMJ' },
                { id: 'wato', name: 'Wato', shortName: 'WAT' },
                { id: 'newton', name: 'Newton', shortName: 'NEW' }
            ],
            groupD: [
                { id: 'ghazi', name: 'Ghazi', shortName: 'GHA' },
                { id: 'tonny', name: 'Tonny', shortName: 'TON' },
                { id: 'yotah', name: 'Yotah', shortName: 'YOT' },
                { id: 'mignon', name: 'Mignon', shortName: 'MIG' },
                { id: 'maria', name: 'Aka The Kraven', shortName: 'AFC' }
            ]
        }
    }
};


// Function to find the season with status 'ongoing'
function findOngoingSeason() {
    try {
        for (const [seasonId, seasonData] of Object.entries(seasonsData)) {
            if (seasonData.status === 'ongoing') {
                console.log(`Found ongoing season: ${seasonId}`);
                return seasonId;
            }
        }
        console.log('No ongoing season found, defaulting to season1');
        return 'season1';
    } catch (error) {
        console.error('Error finding ongoing season:', error);
        return 'season1';
    }
}

// Function to check if current season is planned
function isCurrentSeasonPlanned() {
    try {
        const currentSeasonData = seasonsData[currentSeason];
        return currentSeasonData && currentSeasonData.status === 'planned';
    } catch (error) {
        console.error('Error checking if current season is planned:', error);
        return false;
    }
}

// Function to check if current season is upcoming
function isCurrentSeasonUpcoming() {
    try {
        const currentSeasonData = seasonsData[currentSeason];
        return currentSeasonData && currentSeasonData.status === 'upcoming';
    } catch (error) {
        console.error('Error checking if current season is upcoming:', error);
        return false;
    }
}

// Function to check if current season is not available (planned or upcoming)
function isCurrentSeasonNotAvailable() {
    return isCurrentSeasonPlanned() || isCurrentSeasonUpcoming();
}

// Function to display unavailable season message (planned or upcoming)
function displayUnavailableSeasonMessage() {
    try {
        const currentSeasonData = seasonsData[currentSeason];
        const seasonName = currentSeasonData ? currentSeasonData.name : currentSeason;
        const seasonStatus = currentSeasonData ? currentSeasonData.status : 'unknown';
        
        // Hide ALL content - main content, navigation, everything except the message
        const mainContent = document.getElementById('mainContent');
        if (mainContent) {
            mainContent.style.display = 'none';
        }
        
        // Hide all content sections
        const contentSections = document.querySelectorAll('.content-section');
        contentSections.forEach(section => {
            section.style.display = 'none';
        });
        
        // Create or update unavailable season message
        let unavailableMessage = document.getElementById('unavailableSeasonMessage');
        if (!unavailableMessage) {
            unavailableMessage = document.createElement('div');
            unavailableMessage.id = 'unavailableSeasonMessage';
            unavailableMessage.className = 'unavailable-season-message';
            
            // Insert after the important message
            const importantMessage = document.querySelector('.important-message');
            if (importantMessage) {
                importantMessage.insertAdjacentElement('afterend', unavailableMessage);
            } else {
                // Insert after search container if no important message
                const searchContainer = document.querySelector('.search-container');
                if (searchContainer) {
                    searchContainer.insertAdjacentElement('afterend', unavailableMessage);
                }
            }
        }
        
        // Determine message content based on status
        let icon, title, description;
        if (seasonStatus === 'planned') {
            icon = 'fas fa-calendar-plus';
            title = 'Season Coming Soon';
            description = `${seasonName} is currently in planning phase.`;
        } else if (seasonStatus === 'upcoming') {
            icon = 'fas fa-clock';
            title = 'Season Starting Soon';
            description = `${seasonName} is scheduled to begin soon.`;
        } else {
            icon = 'fas fa-info-circle';
            title = 'Season Not Available';
            description = `${seasonName} is not currently available.`;
        }
        
        unavailableMessage.innerHTML = `
            <div class="unavailable-message-content">
                <i class="${icon}"></i>
                <h3>${title}</h3>
                <p><strong>${description}</strong></p>
                <p>Data will be available once the season begins.</p>
                <div class="unavailable-actions">
                    <button onclick="switchToAvailableSeason()" class="btn-view-available">
                        <i class="fas fa-eye"></i>
                        View Available Season
                    </button>
                </div>
            </div>
        `;
        
        unavailableMessage.style.display = 'block';
        console.log(`Displaying unavailable season message for: ${seasonName} (${seasonStatus}) - All other content hidden`);
        
    } catch (error) {
        console.error('Error displaying unavailable season message:', error);
    }
}

// Function to switch to an available season (not planned)
function switchToAvailableSeason() {
    try {
        // First, try to find an ongoing season
        let targetSeasonId = null;
        
        // Look for ongoing season first
        for (const [seasonId, seasonData] of Object.entries(seasonsData)) {
            if (seasonData.status === 'ongoing') {
                targetSeasonId = seasonId;
                console.log(`Found ongoing season: ${seasonId}`);
                break;
            }
        }
        
        // If no ongoing season, fall back to completed season
        if (!targetSeasonId) {
            for (const [seasonId, seasonData] of Object.entries(seasonsData)) {
                if (seasonData.status === 'completed') {
                    targetSeasonId = seasonId;
                    console.log(`No ongoing season found, using completed season: ${seasonId}`);
                    break;
                }
            }
        }
        
        if (targetSeasonId) {
            console.log(`Switching to available season: ${targetSeasonId}`);
            
            // Hide unavailable season message
            const unavailableMessage = document.getElementById('unavailableSeasonMessage');
            if (unavailableMessage) {
                unavailableMessage.style.display = 'none';
            }
            
            // Restore main content
            const mainContent = document.getElementById('mainContent');
            if (mainContent) {
                mainContent.style.display = 'block';
            }
            
            switchSeason(targetSeasonId);
            
            // Update season selector to reflect the new season
            updateSeasonSelector();
            
            loadPage('home');
            return;
        }
        
        // If no available season found, show error
        console.error('No available seasons found');
        alert('No available seasons found. Please contact support.');
        
    } catch (error) {
        console.error('Error switching to available season:', error);
    }
}

// Current season reference (automatically set to ongoing season)
let currentSeason = findOngoingSeason();

// Log the current season
console.log('Current season set to:', currentSeason);
console.log('Available seasons:', Object.keys(seasonsData));
console.log('Season statuses:', Object.entries(seasonsData).map(([id, data]) => ({ id, status: data.status })));

// Helper function to get current season data
function getCurrentSeasonData() {
    try {
        if (seasonsData && seasonsData[currentSeason]) {
            return seasonsData[currentSeason];
        } else {
            console.warn(`Season ${currentSeason} not found in seasonsData`);
            return null;
        }
    } catch (error) {
        console.error('Error getting current season data:', error);
        return null;
    }
}

// Helper function to get unique team IDs from current season
function getCurrentSeasonTeamIds() {
    try {
        console.log('getCurrentSeasonTeamIds called with currentSeason:', currentSeason);
        console.log('seasonsData available:', Object.keys(seasonsData || {}));
        
        const currentSeasonData = getCurrentSeasonData();
        console.log('currentSeasonData:', currentSeasonData);
        
        if (!currentSeasonData || !currentSeasonData.groups) {
            console.warn('No current season data or groups found');
            console.log('Falling back to all teams:', Object.keys(teamsData));
            return Object.keys(teamsData); // Fallback to all teams
        }
        
        console.log('Current season groups:', currentSeasonData.groups);
        
        const allTeams = [];
        
        // Collect all teams from all groups in current season
        Object.values(currentSeasonData.groups).forEach(group => {
            console.log('Processing group:', group);
            if (Array.isArray(group)) {
                group.forEach(team => {
                    console.log('Adding team:', team);
                    allTeams.push(team.id);
                });
            } else {
                console.warn('Group is not an array:', group);
            }
        });
        
        // Return unique team IDs
        const uniqueTeamIds = [...new Set(allTeams)];
        console.log(`Current season (${currentSeason}) has ${uniqueTeamIds.length} unique teams:`, uniqueTeamIds);
        return uniqueTeamIds;
    } catch (error) {
        console.warn('Error getting current season team IDs:', error);
        return Object.keys(teamsData); // Fallback to all teams
    }
}

// Function to calculate all-seasons stats for a team
function calculateAllSeasonsStats(teamId) {
    const allSeasonsStats = {
        totalMatches: 0,
        totalWins: 0,
        totalDraws: 0,
        totalLosses: 0,
        totalGoalsFor: 0,
        totalGoalsAgainst: 0,
        totalGoalDifference: 0,
        seasonsPlayed: 0,
        seasons: []
    };

    // Process each season
    Object.entries(seasonsFixtures).forEach(([seasonId, seasonFixtures]) => {
        // Get team's group stage fixtures for this season
        const teamSeasonFixtures = seasonFixtures.filter(f => 
            f.homeTeam === teamId || f.awayTeam === teamId
        );

        // Get team's knockout matches for this season
        const seasonKnockouts = seasonsKnockouts[seasonId];
        let teamKnockoutMatches = [];
        
        if (seasonKnockouts) {
            const allKnockoutMatches = [
                ...seasonKnockouts.roundOf16,
                ...seasonKnockouts.quarterFinals,
                ...seasonKnockouts.semiFinals,
                ...seasonKnockouts.final,
                ...seasonKnockouts.thirdPlacePlayoff
            ];
            
            teamKnockoutMatches = allKnockoutMatches.filter(match => 
                match.homeTeam === teamId || match.awayTeam === teamId
            );
        }

        // Combine all matches for this season
        const allSeasonMatches = [...teamSeasonFixtures, ...teamKnockoutMatches];

        if (allSeasonMatches.length > 0) {
            // Calculate stats for this season (including both group and knockout)
            const seasonStats = calculateTeamStats(teamId, allSeasonMatches);
            
            allSeasonsStats.totalMatches += seasonStats.played;
            allSeasonsStats.totalWins += seasonStats.won;
            allSeasonsStats.totalDraws += seasonStats.drawn;
            allSeasonsStats.totalLosses += seasonStats.lost;
            allSeasonsStats.totalGoalsFor += seasonStats.goalsFor;
            allSeasonsStats.totalGoalsAgainst += seasonStats.goalsAgainst;
            allSeasonsStats.seasonsPlayed++;
            
            // Add season details
            allSeasonsStats.seasons.push({
                seasonId: seasonId,
                seasonName: seasonsData[seasonId]?.name || seasonId,
                seasonYear: seasonsData[seasonId]?.year || '2025',
                group: findTeamGroupInSeason(teamId, seasonId),
                matches: seasonStats.played,
                wins: seasonStats.won,
                draws: seasonStats.drawn,
                losses: seasonStats.lost,
                goalsFor: seasonStats.goalsFor,
                goalsAgainst: seasonStats.goalsAgainst,
                goalDifference: seasonStats.goalDifference,
                points: seasonStats.points,
                groupMatches: teamSeasonFixtures.length,
                knockoutMatches: teamKnockoutMatches.length
            });
        }
    });

    // Calculate total goal difference
    allSeasonsStats.totalGoalDifference = allSeasonsStats.totalGoalsFor - allSeasonsStats.totalGoalsAgainst;

    return allSeasonsStats;
}

// Function to calculate historical records from all seasons
function calculateHistoricalRecords() {
    const teamRecords = {};
    
    // Initialize all teams with empty records
    Object.keys(teamsData).forEach(teamId => {
        teamRecords[teamId] = {
            leagueWins: 0,
            runnerUp: 0,
            thirdPlace: 0,
            totalTrophies: 0,
            seasons: []
        };
    });
    
    // Process each season
    Object.entries(seasonsKnockouts).forEach(([seasonId, seasonData]) => {
        console.log(`Processing ${seasonId} for historical records...`);
        
        // Check if season has completed final
        if (seasonData.final && seasonData.final.length > 0) {
            const finalMatch = seasonData.final[0];
            
            if (finalMatch.status === 'completed' && finalMatch.score) {
                const homeTeam = finalMatch.homeTeam;
                const awayTeam = finalMatch.awayTeam;
                const homeScore = finalMatch.score.home;
                const awayScore = finalMatch.score.away;
                
                // Determine winner and runner-up based on final match score
                let winner, runnerUp;
                if (homeScore > awayScore) {
                    winner = homeTeam;
                    runnerUp = awayTeam;
                } else if (awayScore > homeScore) {
                    winner = awayTeam;
                    runnerUp = homeTeam;
                } else {
                    // Handle penalties if available
                    if (finalMatch.penalties) {
                        if (finalMatch.penalties.home > finalMatch.penalties.away) {
                            winner = homeTeam;
                            runnerUp = awayTeam;
                        } else {
                            winner = awayTeam;
                            runnerUp = homeTeam;
                        }
                    }
                }
                
                // Update records for winner (Champion)
                if (winner && teamRecords[winner]) {
                    teamRecords[winner].leagueWins++;
                    teamRecords[winner].totalTrophies++;
                    teamRecords[winner].seasons.push({
                        season: seasonId,
                        achievement: 'Champion',
                        year: seasonsData[seasonId]?.year || '2025'
                    });
                    console.log(`${winner} won ${seasonId} - League Wins: ${teamRecords[winner].leagueWins}`);
                }
                
                // Update records for runner-up
                if (runnerUp && teamRecords[runnerUp]) {
                    teamRecords[runnerUp].runnerUp++;
                    teamRecords[runnerUp].seasons.push({
                        season: seasonId,
                        achievement: 'Runner-up',
                        year: seasonsData[seasonId]?.year || '2025'
                    });
                    console.log(`${runnerUp} was runner-up in ${seasonId}`);
                }
                
                // Check for third place playoff
                if (seasonData.thirdPlacePlayoff && seasonData.thirdPlacePlayoff.length > 0) {
                    const thirdPlaceMatch = seasonData.thirdPlacePlayoff[0];
                    if (thirdPlaceMatch.status === 'completed' && thirdPlaceMatch.score) {
                        const thirdPlaceWinner = thirdPlaceMatch.score.home > thirdPlaceMatch.score.away 
                            ? thirdPlaceMatch.homeTeam 
                            : thirdPlaceMatch.awayTeam;
                        
                        if (thirdPlaceWinner && teamRecords[thirdPlaceWinner]) {
                            teamRecords[thirdPlaceWinner].thirdPlace++;
                            teamRecords[thirdPlaceWinner].totalTrophies++;
                            teamRecords[thirdPlaceWinner].seasons.push({
                                season: seasonId,
                                achievement: 'Third Place',
                                year: seasonsData[seasonId]?.year || '2025'
                            });
                            console.log(`${thirdPlaceWinner} won third place in ${seasonId}`);
                        }
                    }
                }
            }
        }
    });
    
    console.log('Historical records calculated:', teamRecords);
    return teamRecords;
}

// Helper function to get group data for current season
function getCurrentGroupData() {
    try {
        const seasonData = getCurrentSeasonData();
        if (seasonData && seasonData.groups) {
            return seasonData.groups;
        } else {
            console.warn('No groups data available for current season');
            return {};
        }
    } catch (error) {
        console.error('Error getting current group data:', error);
        return {};
    }
}

// Legacy support - keep the old groupData for backward compatibility
let groupData = {};

// Season management functions
function switchSeason(seasonId) {
    if (seasonsData[seasonId]) {
        currentSeason = seasonId;
        
        // CRITICAL FIX: Replace groupData completely instead of mutating it
        const newGroupData = seasonsData[seasonId].groups;
        // Clear existing groupData and replace with new season's data
        Object.keys(groupData).forEach(key => delete groupData[key]);
        Object.assign(groupData, newGroupData);
        
        // Update the legacy groupFixtures reference
        const newFixtures = seasonsFixtures[seasonId] || [];
        groupFixtures.length = 0;
        groupFixtures.push(...newFixtures);
        
        // Update leagueData.groupFixtures to match
        leagueData.groupFixtures = groupFixtures;
        // Update leagueData.groups to match - use a fresh copy
        leagueData.groups = JSON.parse(JSON.stringify(newGroupData));
        // Update the legacy knockouts reference
        const currentKnockouts = getCurrentSeasonKnockouts();
        leagueData.knockouts = currentKnockouts;
        
        // Update leagueData teams with current season's teams
        const currentSeasonTeamIds = getCurrentSeasonTeamIds();
        leagueData.teams = currentSeasonTeamIds.map((teamId, index) => {
            const team = teamsData[teamId];
            if (!team) {
                console.error(`Team data not found for teamId: ${teamId}`);
                return null;
            }
            
            // Get team fixtures for this season
            const teamFixtures = groupFixtures.filter(fixture => 
                fixture.homeTeam === teamId || fixture.awayTeam === teamId
            );
            
            // Calculate actual stats from fixtures instead of random numbers
            const stats = calculateTeamStats(teamId, teamFixtures);
            
            return {
                id: index + 1,
                name: team.name,
                country: "Pro League",
                logo: team.logo,
                points: stats.points,
                played: stats.played,
                won: stats.won,
                drawn: stats.drawn,
                lost: stats.lost,
                goalsFor: stats.goalsFor,
                goalsAgainst: stats.goalsAgainst,
                stadium: team.stadium,
                manager: team.manager,
                capacity: team.capacity,
                founded: team.founded,
                titles: team.titles,
                colors: team.colors,
                shortName: team.shortName
            };
        }).filter(team => team !== null); // Remove null entries
        
        console.log(`Switched to ${seasonsData[seasonId].name} and set as current season`);
        
        // Check if the new season is not available and show message if needed
        if (isCurrentSeasonNotAvailable()) {
            console.log('Switched to unavailable season, showing unavailable season message');
            displayUnavailableSeasonMessage();
        } else {
            // Hide unavailable season message if switching to available season
            const unavailableMessage = document.getElementById('unavailableSeasonMessage');
            if (unavailableMessage) {
                unavailableMessage.style.display = 'none';
            }
            
            // Restore main content
            const mainContent = document.getElementById('mainContent');
            if (mainContent) {
                mainContent.style.display = 'block';
            }
        }
        
        return true;
    }
    console.error(`Season ${seasonId} not found`);
    return false;
}

function getSeasonList() {
    return Object.values(seasonsData).map(season => ({
        id: season.id,
        name: season.name,
        year: season.year,
        status: season.status,
        startDate: season.startDate,
        endDate: season.endDate
    }));
}

function getCurrentSeason() {
    try {
        if (seasonsData && seasonsData[currentSeason]) {
            return seasonsData[currentSeason];
        } else {
            console.warn(`Current season ${currentSeason} not found in seasonsData`);
            return null;
        }
    } catch (error) {
        console.error('Error in getCurrentSeason:', error);
        return null;
    }
}

function getSeasonById(seasonId) {
    return seasonsData[seasonId] || null;
}

// Function to update season selector options
function updateSeasonSelector() {
    try {
        const seasonSelect = document.getElementById('seasonSelect');
        if (!seasonSelect) {
            console.warn('Season selector element not found');
            return;
        }
        
        // Add visual feedback during update
        seasonSelect.classList.add('updating');
        
        // Clear existing options with fade effect
        seasonSelect.style.opacity = '0.5';
        
        setTimeout(() => {
            seasonSelect.innerHTML = '';
            
            // Add options for each season
            if (seasonsData && Object.keys(seasonsData).length > 0) {
                Object.values(seasonsData).forEach((season, index) => {
                    const option = document.createElement('option');
                    option.value = season.id;
                    
                    option.textContent = `${season.name} (${season.year})`;
                    option.selected = season.id === currentSeason;
                    option.dataset.status = season.status;
                    seasonSelect.appendChild(option);
                });
                console.log('Season selector updated successfully');
            } else {
                console.warn('No seasons data available, adding fallback option');
                // Add fallback option
                const option = document.createElement('option');
                option.value = 'season1';
                option.textContent = 'Season 1 (August 2025)';
                option.selected = true;
                seasonSelect.appendChild(option);
            }
            
            // Restore opacity and add success animation
            seasonSelect.style.opacity = '1';
            seasonSelect.classList.remove('updating');
            seasonSelect.classList.add('updated');
            
            // Remove success class after animation
            setTimeout(() => {
                seasonSelect.classList.remove('updated');
            }, 1000);
            
        }, 200);
        
    } catch (error) {
        console.error('Error updating season selector:', error);
        // Restore opacity on error
        const seasonSelect = document.getElementById('seasonSelect');
        if (seasonSelect) {
            seasonSelect.style.opacity = '1';
            seasonSelect.classList.remove('updating');
        }
    }
}


// Function to add a new season
function addSeason(seasonId, seasonData) {
    if (seasonsData[seasonId]) {
        console.warn(`Season ${seasonId} already exists`);
        return false;
    }
    
    seasonsData[seasonId] = seasonData;
    seasonsFixtures[seasonId] = seasonData.fixtures || [];
    console.log(`Added new season: ${seasonData.name}`);
    return true;
}

// Function to remove a season
function removeSeason(seasonId) {
    if (!seasonsData[seasonId]) {
        console.warn(`Season ${seasonId} does not exist`);
        return false;
    }
    
    if (currentSeason === seasonId) {
        console.warn(`Cannot remove current season ${seasonId}`);
        return false;
    }
    
    delete seasonsData[seasonId];
    delete seasonsFixtures[seasonId];
    console.log(`Removed season: ${seasonId}`);
    return true;
}

// Multi-Season Fixtures Structure
const seasonsFixtures = {
    season1: [
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
    ],
    season2: [
        // Season 2 fixtures - Sample data for upcoming season
        { id: 'S2GA1', group: 'A', matchday: 1, date: '2025-09-01', time: '20:00', homeTeam: 'dav_lil7', awayTeam: 'phenom', status: 'completed', score: { home: 1, away: 2 } },
        { id: 'S2GA2', group: 'A', matchday: 1, date: '2025-09-01', time: '22:00', homeTeam: 'yunusu', awayTeam: 'mignon', status: 'completed', score: { home: 7, away: 2 } },
        { id: 'S2GA3', group: 'A', matchday: 1, date: '2025-09-02', time: '20:00', homeTeam: 'ghost', awayTeam: 'dav_lil7', status: 'completed', score: { home: 1, away: 0 } },
        { id: 'S2GA4', group: 'A', matchday: 1, date: '2025-09-02', time: '22:00', homeTeam: 'phenom', awayTeam: 'yunusu', status: 'completed', score: { home: 0, away: 2 } },
        { id: 'S2GA5', group: 'A', matchday: 1, date: '2025-09-03', time: '20:00', homeTeam: 'mignon', awayTeam: 'ghost', status: 'completed', score: { home: 9, away: 8 } },
        
        { id: 'S2GB1', group: 'B', matchday: 1, date: '2025-09-01', time: '20:00', homeTeam: 'dandizzo', awayTeam: 'elton', status: 'completed', score: { home: 1, away: 2 } },
        { id: 'S2GB2', group: 'B', matchday: 1, date: '2025-09-01', time: '22:00', homeTeam: 'yotah', awayTeam: 'wato', status: 'completed', score: { home: 5, away: 2 } },
        { id: 'S2GB3', group: 'B', matchday: 1, date: '2025-09-02', time: '20:00', homeTeam: 'volts', awayTeam: 'dandizzo', status: 'completed', score: { home: 1, away: 2 } },
        { id: 'S2GB4', group: 'B', matchday: 1, date: '2025-09-02', time: '22:00', homeTeam: 'elton', awayTeam: 'yotah', status: 'completed', score: { home: 1, away: 5 } },
        { id: 'S2GB5', group: 'B', matchday: 1, date: '2025-09-03', time: '20:00', homeTeam: 'wato', awayTeam: 'volts', status: 'completed', score: { home: 1, away: 2 } },
        
        { id: 'S2GC1', group: 'C', matchday: 1, date: '2025-09-01', time: '20:00', homeTeam: 'its_lyta23', awayTeam: 'lardker', status: 'completed', score: { home: 1, away: 2 } },
        { id: 'S2GC2', group: 'C', matchday: 1, date: '2025-09-01', time: '22:00', homeTeam: 'kenno', awayTeam: 'thorvisual', status: 'completed', score: { home: 1, away: 9 } },
        { id: 'S2GC3', group: 'C', matchday: 1, date: '2025-09-02', time: '20:00', homeTeam: 'offer_art', awayTeam: 'its_lyta23', status: 'scheduled', score: { home: 8, away: 2 } },
        { id: 'S2GC4', group: 'C', matchday: 1, date: '2025-09-02', time: '22:00', homeTeam: 'lardker', awayTeam: 'kenno', status: 'completed', score: { home: 6, away: 2 } },
        { id: 'S2GC5', group: 'C', matchday: 1, date: '2025-09-03', time: '20:00', homeTeam: 'thorvisual', awayTeam: 'offer_art', status: 'completed', score: { home: 5, away: 2 } },
        
        { id: 'S2GD1', group: 'D', matchday: 1, date: '2025-09-01', time: '20:00', homeTeam: 'ghazi', awayTeam: 'brioz', status: 'completed', score: { home: 1, away: 2 } },
        { id: 'S2GD2', group: 'D', matchday: 1, date: '2025-09-01', time: '22:00', homeTeam: 'delvin', awayTeam: 'thDrksid', status: 'completed', score: { home: 6, away: 2 } },
        { id: 'S2GD3', group: 'D', matchday: 1, date: '2025-09-02', time: '20:00', homeTeam: 'maria', awayTeam: 'ghazi', status: 'completed', score: { home: 1, away: 2 } },
        { id: 'S2GD4', group: 'D', matchday: 1, date: '2025-09-02', time: '22:00', homeTeam: 'brioz', awayTeam: 'delvin', status: 'completed', score: { home: 1, away: 2 } },
        { id: 'S2GD5', group: 'D', matchday: 1, date: '2025-09-03', time: '20:00', homeTeam: 'thDrksid', awayTeam: 'maria', status: 'completed', score: { home: 8, away: 2 } }
    ],
    season3: [
        // Season 3 fixtures - Sample data for planned season
        { id: 'S3GA1', group: 'A', matchday: 1, date: '2025-10-01', time: '20:00', homeTeam: 'dav_lil7', awayTeam: 'dyno', status: 'pending', score: null },
        { id: 'S3GA2', group: 'A', matchday: 1, date: '2025-10-01', time: '22:00', homeTeam: 'kenno', awayTeam: 'thorvisual', status: 'pending', score: null },
        { id: 'S3GA3', group: 'A', matchday: 1, date: '2025-10-02', time: '20:00', homeTeam: 'ghost', awayTeam: 'dav_lil7', status: 'pending', score: null },
        { id: 'S3GA4', group: 'A', matchday: 1, date: '2025-10-02', time: '22:00', homeTeam: 'dyno', awayTeam: 'kenno', status: 'pending', score: null },
        { id: 'S3GA5', group: 'A', matchday: 1, date: '2025-10-03', time: '20:00', homeTeam: 'thorvisual', awayTeam: 'ghost', status: 'pending', score: null }
    ]
};

// Multi-Season Knockouts Structure
const seasonsKnockouts = {
    season1: {
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
        final: [
            { id: 'FINAL_1', round: 'Final', matchNumber: 1, date: '2025-09-02', time: '22:00', homeTeam: 'kenno', awayTeam: 'thDrksid', status: 'completed', score: { home: 2, away: 1 } }
        ],
        thirdPlacePlayoff: [
            { id: 'TPP_1', round: 'Third Place Playoff', matchNumber: 1, date: '2025-09-02', time: '20:00', homeTeam: 'dav_lil7', awayTeam: 'wato', status: 'completed',score: { home: 1, away: 2 } }
        ]
    },
    season2: {
        roundOf16: [
            // Season 2 knockouts - different team matchups
            { id: 'S2R16_1_1', round: 'Round of 16', tie: 1, leg: '1st', date: '2025-09-15', time: '20:00', homeTeam: 'TBD', awayTeam: 'TBD', status: 'scheduled', score: null },
            { id: 'S2R16_1_2', round: 'Round of 16', tie: 1, leg: '2nd', date: '2025-09-15', time: '22:00', homeTeam: 'TBD', awayTeam: 'TBD', status: 'scheduled', score: null },
            { id: 'S2R16_2_1', round: 'Round of 16', tie: 2, leg: '1st', date: '2025-09-15', time: '20:00', homeTeam: 'TBD', awayTeam: 'TBD', status: 'scheduled', score: null },
            { id: 'S2R16_2_2', round: 'Round of 16', tie: 2, leg: '2nd', date: '2025-09-15', time: '22:00', homeTeam: 'TBD', awayTeam: 'TBD', status: 'scheduled', score: null },
            { id: 'S2R16_3_1', round: 'Round of 16', tie: 3, leg: '1st', date: '2025-09-15', time: '20:00', homeTeam: 'TBD', awayTeam: 'TBD', status: 'scheduled', score: null },
            { id: 'S2R16_3_2', round: 'Round of 16', tie: 3, leg: '2nd', date: '2025-09-15', time: '22:00', homeTeam: 'TBD', awayTeam: 'TBD', status: 'scheduled', score: null },
            { id: 'S2R16_4_1', round: 'Round of 16', tie: 4, leg: '1st', date: '2025-09-15', time: '20:00', homeTeam: 'TBD', awayTeam: 'TBD', status: 'scheduled', score: null },
            { id: 'S2R16_4_2', round: 'Round of 16', tie: 4, leg: '2nd', date: '2025-09-15', time: '22:00', homeTeam: 'TBD', awayTeam: 'TBD', status: 'scheduled', score: null },
            { id: 'S2R16_5_1', round: 'Round of 16', tie: 5, leg: '1st', date: '2025-09-15', time: '20:00', homeTeam: 'TBD', awayTeam: 'TBD', status: 'scheduled', score: null },
            { id: 'S2R16_5_2', round: 'Round of 16', tie: 5, leg: '2nd', date: '2025-09-15', time: '22:00', homeTeam: 'TBD', awayTeam: 'TBD', status: 'scheduled', score: null },
            { id: 'S2R16_6_1', round: 'Round of 16', tie: 6, leg: '1st', date: '2025-09-15', time: '20:00', homeTeam: 'TBD', awayTeam: 'TBD', status: 'scheduled', score: null },
            { id: 'S2R16_6_2', round: 'Round of 16', tie: 6, leg: '2nd', date: '2025-09-15', time: '22:00', homeTeam: 'TBD', awayTeam: 'TBD', status: 'scheduled', score: null },
            { id: 'S2R16_7_1', round: 'Round of 16', tie: 7, leg: '1st', date: '2025-09-15', time: '20:00', homeTeam: 'TBD', awayTeam: 'TBD', status: 'scheduled', score: null },
            { id: 'S2R16_7_2', round: 'Round of 16', tie: 7, leg: '2nd', date: '2025-09-15', time: '22:00', homeTeam: 'TBD', awayTeam: 'TBD', status: 'scheduled', score: null },
            { id: 'S2R16_8_1', round: 'Round of 16', tie: 8, leg: '1st', date: '2025-09-15', time: '20:00', homeTeam: 'TBD', awayTeam: 'TBD', status: 'scheduled', score: null },
            { id: 'S2R16_8_2', round: 'Round of 16', tie: 8, leg: '2nd', date: '2025-09-15', time: '22:00', homeTeam: 'TBD', awayTeam: 'TBD', status: 'scheduled', score: null }
        ],
        quarterFinals: [
            { id: 'S2QF_1_1', round: 'Quarter Finals', tie: 1, leg: '1st', date: '2025-09-20', time: '20:00', homeTeam: 'TBD', awayTeam: 'TBD', status: 'pending', score: null },
            { id: 'S2QF_1_2', round: 'Quarter Finals', tie: 1, leg: '2nd', date: '2025-09-20', time: '22:00', homeTeam: 'TBD', awayTeam: 'TBD', status: 'pending', score: null },
            { id: 'S2QF_2_1', round: 'Quarter Finals', tie: 2, leg: '1st', date: '2025-09-20', time: '20:00', homeTeam: 'TBD', awayTeam: 'TBD', status: 'pending', score: null },
            { id: 'S2QF_2_2', round: 'Quarter Finals', tie: 2, leg: '2nd', date: '2025-09-20', time: '22:00', homeTeam: 'TBD', awayTeam: 'TBD', status: 'pending', score: null },
            { id: 'S2QF_3_1', round: 'Quarter Finals', tie: 3, leg: '1st', date: '2025-09-20', time: '20:00', homeTeam: 'TBD', awayTeam: 'TBD', status: 'pending', score: null },
            { id: 'S2QF_3_2', round: 'Quarter Finals', tie: 3, leg: '2nd', date: '2025-09-20', time: '22:00', homeTeam: 'TBD', awayTeam: 'TBD', status: 'pending', score: null },
            { id: 'S2QF_4_1', round: 'Quarter Finals', tie: 4, leg: '1st', date: '2025-09-20', time: '20:00', homeTeam: 'TBD', awayTeam: 'TBD', status: 'pending', score: null },
            { id: 'S2QF_4_2', round: 'Quarter Finals', tie: 4, leg: '2nd', date: '2025-09-20', time: '22:00', homeTeam: 'TBD', awayTeam: 'TBD', status: 'pending', score: null }
        ],
        semiFinals: [
            { id: 'S2SF_1_1', round: 'Semi Finals', tie: 1, leg: '1st', date: '2025-09-25', time: '20:00', homeTeam: 'TBD', awayTeam: 'TBD', status: 'pending', score: null },
            { id: 'S2SF_1_2', round: 'Semi Finals', tie: 1, leg: '2nd', date: '2025-09-25', time: '22:00', homeTeam: 'TBD', awayTeam: 'TBD', status: 'pending', score: null },
            { id: 'S2SF_2_1', round: 'Semi Finals', tie: 2, leg: '1st', date: '2025-09-25', time: '20:00', homeTeam: 'TBD', awayTeam: 'TBD', status: 'pending', score: null },
            { id: 'S2SF_2_2', round: 'Semi Finals', tie: 2, leg: '2nd', date: '2025-09-25', time: '22:00', homeTeam: 'TBD', awayTeam: 'TBD', status: 'pending', score: null }
        ],
        final: [
            { id: 'S2FINAL_1', round: 'Final', matchNumber: 1, date: '2025-09-30', time: '20:00', homeTeam: 'TBD', awayTeam: 'TBD', status: 'pending', score: null }
        ],
        thirdPlacePlayoff: [
            { id: 'S2TPP_1', round: 'Third Place Playoff', matchNumber: 1, date: '2025-09-30', time: '17:00', homeTeam: 'TBD', awayTeam: 'TBD', status: 'pending', score: null }
        ]
    },
    season3: {
        roundOf16: [
            { id: 'S3R16_1_1', round: 'Round of 16', tie: 1, leg: '1st', date: '2025-10-15', time: '20:00', homeTeam: 'TBD', awayTeam: 'TBD', status: 'pending', score: null },
            { id: 'S3R16_1_2', round: 'Round of 16', tie: 1, leg: '2nd', date: '2025-10-15', time: '22:00', homeTeam: 'TBD', awayTeam: 'TBD', status: 'pending', score: null }
        ],
        quarterFinals: [
            { id: 'S3QF_1_1', round: 'Quarter Finals', tie: 1, leg: '1st', date: '2025-10-20', time: '20:00', homeTeam: 'TBD', awayTeam: 'TBD', status: 'pending', score: null },
            { id: 'S3QF_1_2', round: 'Quarter Finals', tie: 1, leg: '2nd', date: '2025-10-20', time: '22:00', homeTeam: 'TBD', awayTeam: 'TBD', status: 'pending', score: null }
        ],
        semiFinals: [
            { id: 'S3SF_1_1', round: 'Semi Finals', tie: 1, leg: '1st', date: '2025-10-25', time: '20:00', homeTeam: 'TBD', awayTeam: 'TBD', status: 'pending', score: null },
            { id: 'S3SF_1_2', round: 'Semi Finals', tie: 1, leg: '2nd', date: '2025-10-25', time: '22:00', homeTeam: 'TBD', awayTeam: 'TBD', status: 'pending', score: null }
        ],
        final: [
            { id: 'S3FINAL_1', round: 'Final', matchNumber: 1, date: '2025-10-30', time: '20:00', homeTeam: 'TBD', awayTeam: 'TBD', status: 'pending', score: null }
        ],
        thirdPlacePlayoff: [
            { id: 'S3TPP_1', round: 'Third Place Playoff', matchNumber: 1, date: '2025-10-30', time: '17:00', homeTeam: 'TBD', awayTeam: 'TBD', status: 'pending', score: null }
        ]
    },
    season4: {
        id: 'season4',
        current: false,
        name: 'Season 4',
        year: 'November 2025',
        status: 'planned',
        startDate: '2025-11-01',
        endDate: '2025-11-30',
        groups: {
            groupA: [
                { id: 'dav_lil7', name: 'Dav-Lil7', shortName: 'DAV' },
                { id: 'phenom', name: 'Phenom', shortName: 'PHE' },
                { id: 'newton', name: 'Newton', shortName: 'NEW' },
                { id: 'mignon', name: 'Mignon', shortName: 'MIG' },
                { id: 'ghost', name: 'ghost', shortName: 'GHO' }
            ],
            groupB: [
                { id: 'dandizzo', name: 'Dandizzo', shortName: 'DAN' },
                { id: 'elton', name: 'Elton', shortName: 'ELT' },
                { id: 'yotah', name: 'Yotah', shortName: 'YOT' },
                { id: 'wato', name: 'Wato', shortName: 'WAT' },
                { id: 'volts', name: 'Volts', shortName: 'VOL' }
            ],
            groupC: [
                { id: 'its_lyta23', name: 'Its Lyta23', shortName: 'LYT' },
                { id: 'dyno', name: 'Dyno', shortName: 'DYN' },
                { id: 'kenno', name: 'Kenno', shortName: 'KEN' },
                { id: 'thorvisual', name: 'ThorVisual', shortName: 'THO' },
                { id: 'offer_art', name: 'Offer Art', shortName: 'ART' }
            ],
            groupD: [
                { id: 'ghazi', name: 'Ghazi', shortName: 'GHA' },
                { id: 'thDrksid', name: 'ThDrksid', shortName: 'DARK' },
                { id: 'maria', name: 'Aka The Kraven', shortName: 'AFC' }
            ]
        }
    },
    season5: {
        id: 'season5',
        current: false,
        name: 'Season 5',
        year: 'December 2025',
        status: 'planned',
        startDate: '2025-12-01',
        endDate: '2025-12-31',
        groups: {
            groupA: [
                { id: 'dav_lil7', name: 'Dav-Lil7', shortName: 'DAV' },
                { id: 'phenom', name: 'Phenom', shortName: 'PHE' },
                { id: 'newton', name: 'Newton', shortName: 'NEW' },
                { id: 'mignon', name: 'Mignon', shortName: 'MIG' },
                { id: 'ghost', name: 'ghost', shortName: 'GHO' }
            ],
            groupB: [
                { id: 'dandizzo', name: 'Dandizzo', shortName: 'DAN' },
                { id: 'elton', name: 'Elton', shortName: 'ELT' },
                { id: 'yotah', name: 'Yotah', shortName: 'YOT' },
                { id: 'wato', name: 'Wato', shortName: 'WAT' },
                { id: 'volts', name: 'Volts', shortName: 'VOL' }
            ],
            groupC: [
                { id: 'its_lyta23', name: 'Its Lyta23', shortName: 'LYT' },
                { id: 'dyno', name: 'Dyno', shortName: 'DYN' },
                { id: 'kenno', name: 'Kenno', shortName: 'KEN' },
                { id: 'thorvisual', name: 'ThorVisual', shortName: 'THO' },
                { id: 'offer_art', name: 'Offer Art', shortName: 'ART' }
            ],
            groupD: [
                { id: 'ghazi', name: 'Ghazi', shortName: 'GHA' },
                { id: 'thDrksid', name: 'ThDrksid', shortName: 'DARK' },
                { id: 'maria', name: 'Aka The Kraven', shortName: 'AFC' }
            ]
        }
    },
    season6: {
        id: 'season6',
        current: false,
        name: 'Season 6',
        year: 'January 2026',
        status: 'planned',
        startDate: '2026-01-01',
        endDate: '2026-01-31',
        groups: {
            groupA: [
                { id: 'dav_lil7', name: 'Dav-Lil7', shortName: 'DAV' },
                { id: 'phenom', name: 'Phenom', shortName: 'PHE' },
                { id: 'newton', name: 'Newton', shortName: 'NEW' },
                { id: 'mignon', name: 'Mignon', shortName: 'MIG' },
                { id: 'ghost', name: 'ghost', shortName: 'GHO' }
            ],
            groupB: [
                { id: 'dandizzo', name: 'Dandizzo', shortName: 'DAN' },
                { id: 'elton', name: 'Elton', shortName: 'ELT' },
                { id: 'yotah', name: 'Yotah', shortName: 'YOT' },
                { id: 'wato', name: 'Wato', shortName: 'WAT' },
                { id: 'volts', name: 'Volts', shortName: 'VOL' }
            ],
            groupC: [
                { id: 'its_lyta23', name: 'Its Lyta23', shortName: 'LYT' },
                { id: 'dyno', name: 'Dyno', shortName: 'DYN' },
                { id: 'kenno', name: 'Kenno', shortName: 'KEN' },
                { id: 'thorvisual', name: 'ThorVisual', shortName: 'THO' },
                { id: 'offer_art', name: 'Offer Art', shortName: 'ART' }
            ],
            groupD: [
                { id: 'ghazi', name: 'Ghazi', shortName: 'GHA' },
                { id: 'thDrksid', name: 'ThDrksid', shortName: 'DARK' },
                { id: 'maria', name: 'Aka The Kraven', shortName: 'AFC' }
            ]
        }
    }
};

// Helper function to get current season fixtures
function getCurrentSeasonFixtures() {
    return seasonsFixtures[currentSeason] || [];
}

// Helper function to get current season knockouts
function getCurrentSeasonKnockouts() {
    return seasonsKnockouts[currentSeason] || {
        roundOf16: [],
        quarterFinals: [],
        semiFinals: [],
        final: [],
        thirdPlacePlayoff: []
    };
}

// Function to populate season1 fixtures from current groupFixtures
function populateSeason1Fixtures() {
    try {
        if (groupFixtures && Array.isArray(groupFixtures)) {
            seasonsFixtures.season1 = [...groupFixtures];
            console.log(`Populated season1 with ${groupFixtures.length} fixtures`);
        } else {
            console.warn('groupFixtures is not available or not an array');
            seasonsFixtures.season1 = [];
        }
    } catch (error) {
        console.error('Error populating season1 fixtures:', error);
        seasonsFixtures.season1 = [];
    }
}

// Group stage fixtures - Will be populated dynamically based on current season
let groupFixtures = [];

// Initialize season1 fixtures after groupFixtures is defined
// populateSeason1Fixtures(); // Commented out - will be handled by initializeCurrentSeasonData()

// Function to update current season based on ongoing status
function updateCurrentSeasonFromStatus() {
    try {
        const ongoingSeason = findOngoingSeason();
        if (ongoingSeason !== currentSeason) {
            console.log(`Updating current season from ${currentSeason} to ${ongoingSeason} (ongoing status)`);
            currentSeason = ongoingSeason;
            return true; // Season changed
        }
        return false; // No change
    } catch (error) {
        console.error('Error updating current season from status:', error);
        return false;
    }
}

// Initialize data for the current season
function initializeCurrentSeasonData() {
    try {
        // Check if we need to update current season based on ongoing status
        updateCurrentSeasonFromStatus();
        
        console.log(`Initializing data for current season: ${currentSeason}`);
        
        // Initialize groupData with current season's data
        groupData = getCurrentGroupData();
        
        // Update leagueData.groups to match - use a deep copy
        leagueData.groups = JSON.parse(JSON.stringify(groupData));
        
        // Initialize groupFixtures with current season's fixtures
        const currentFixtures = getCurrentSeasonFixtures();
        groupFixtures.length = 0;
        groupFixtures.push(...currentFixtures);
        
        // Update leagueData.groupFixtures to match
        leagueData.groupFixtures = groupFixtures;
        
        // Also populate season1 fixtures for backward compatibility
        if (currentSeason === 'season1') {
            seasonsFixtures.season1 = [...groupFixtures];
        }
        
        // Initialize knockouts with current season's data
        const currentKnockouts = getCurrentSeasonKnockouts();
        leagueData.knockouts = currentKnockouts;
        
        // Update leagueData teams with current season's teams
        const currentSeasonTeamIds = getCurrentSeasonTeamIds();
        leagueData.teams = currentSeasonTeamIds.map((teamId, index) => {
            const team = teamsData[teamId];
            if (!team) {
                console.error(`Team data not found for teamId: ${teamId}`);
                return null;
            }
            
            // Get team fixtures for this season
            const teamFixtures = groupFixtures.filter(fixture => 
                fixture.homeTeam === teamId || fixture.awayTeam === teamId
            );
            
            // Calculate actual stats from fixtures instead of random numbers
            const stats = calculateTeamStats(teamId, teamFixtures);
            
            return {
                id: index + 1,
                name: team.name,
                country: "Pro League",
                logo: team.logo,
                points: stats.points,
                played: stats.played,
                won: stats.won,
                drawn: stats.drawn,
                lost: stats.lost,
                goalsFor: stats.goalsFor,
                goalsAgainst: stats.goalsAgainst,
                stadium: team.stadium,
                manager: team.manager,
                capacity: team.capacity,
                founded: team.founded,
                titles: team.titles,
                colors: team.colors,
                shortName: team.shortName
            };
        }).filter(team => team !== null); // Remove null entries
        
        console.log(`Initialized data for ${currentSeason}:`, {
            teams: leagueData.teams.length,
            groups: Object.keys(groupData).length,
            fixtures: groupFixtures.length,
            knockouts: Object.keys(currentKnockouts).length
        });
        
        // Debug: Log some sample data to verify it's from the correct season
        console.log('Sample team IDs from current season:', leagueData.teams.slice(0, 3).map(t => t.name));
        console.log('Sample fixtures from current season:', groupFixtures.slice(0, 2).map(f => `${f.homeTeam} vs ${f.awayTeam}`));
        console.log('Current season fixtures count:', groupFixtures.length);
        console.log('Current season teams count:', leagueData.teams.length);
    } catch (error) {
        console.error('Error initializing current season data:', error);
        // Fallback to season1
        currentSeason = 'season1';
        groupData = getCurrentGroupData();
    }
}

// Initialize data for the current season
initializeCurrentSeasonData();

// Set up periodic check for ongoing seasons (every 5 minutes)
setInterval(() => {
    const seasonChanged = updateCurrentSeasonFromStatus();
    if (seasonChanged) {
        console.log('Season changed to ongoing, updating UI...');
        initializeCurrentSeasonData();
        updateSeasonSelector();
        // Reload current page to reflect changes
        const currentPage = document.querySelector('.nav-link.active')?.dataset.page || 'home';
        loadPage(currentPage);
    }
}, 5 * 60 * 1000); // Check every 5 minutes

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
                <img src="images/club-logos/${teamId}.svg" alt="${getTeamName(teamId)}" class="team-logo club-badge" style="width: ${size}; height: ${size}; object-fit: contain; border-radius: ${borderRadius}; background: ${background}; position: absolute; top: 0; left: 0; border: 2px solid rgba(244, 67, 54, 0.3); display: none;" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';" />
                <div class="team-logo-fallback" style="width: ${size}; height: ${size}; display: none; align-items: center; justify-content: center; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); border-radius: ${borderRadius}; font-weight: bold; color: #ffffff; text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5); position: absolute; top: 0; left: 0; border: 2px solid rgba(255, 255, 255, 0.3); font-size: ${parseInt(size) * 0.4}px; letter-spacing: 1px;">${teamsData[teamId] ? teamsData[teamId].shortName : teamId.substring(0, 3).toUpperCase()}</div>
            </div>`;
}

// Function to find which group a team belongs to (for current season)
function findTeamGroup(teamId) {
    const currentGroupData = getCurrentGroupData();
    
    for (const [group, teams] of Object.entries(currentGroupData)) {
        const teamIds = teams.map(team => team.id);
        if (teamIds.includes(teamId)) {
            return group.replace('group', '').toUpperCase();
        }
    }
    return 'Unknown';
}

// Function to find which group a team belongs to in a specific season
function findTeamGroupInSeason(teamId, seasonId) {
    const seasonData = seasonsData[seasonId];
    if (!seasonData) return 'Unknown';
    
    for (const [group, teams] of Object.entries(seasonData.groups)) {
        const teamIds = teams.map(team => team.id);
        if (teamIds.includes(teamId)) {
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
                        ${getTeamLogo(fixture.awayTeam, '50px', false)}
                        <span>${getTeamName(fixture.awayTeam)}</span>
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

// Function to create leagueData with current season's teams
function createLeagueData() {
    const currentSeasonTeamIds = getCurrentSeasonTeamIds();
    return {
        teams: currentSeasonTeamIds.map((teamId, index) => {
            const team = teamsData[teamId];
            if (!team) {
                console.error(`Team data not found for teamId: ${teamId}`);
                return null;
            }
            
            // Get team fixtures for this season
            const teamFixtures = groupFixtures.filter(fixture => 
                fixture.homeTeam === teamId || fixture.awayTeam === teamId
            );
            
            // Calculate actual stats from fixtures instead of random numbers
            const stats = calculateTeamStats(teamId, teamFixtures);
        
        return {
            id: index + 1,
            name: team.name,
            country: "Pro League",
            logo: team.logo,
                points: stats.points,
                played: stats.played,
                won: stats.won,
                drawn: stats.drawn,
                lost: stats.lost,
                goalsFor: stats.goalsFor,
                goalsAgainst: stats.goalsAgainst,
            stadium: team.stadium,
            manager: team.manager,
            capacity: team.capacity,
            founded: team.founded,
            titles: team.titles,
            colors: team.colors,
            shortName: team.shortName
        };
        }).filter(team => team !== null), // Remove null entries
    groups: groupData,
    groupFixtures: groupFixtures,
    knockouts: getCurrentSeasonKnockouts()
    };
}

// Create leagueData with current season's data
const leagueData = createLeagueData();

// Function to calculate group standings
function calculateGroupStandings() {
    // Validate that group data exists
    if (!leagueData || !leagueData.groups) {
        console.error('Cannot calculate group standings: leagueData or groups not found');
        return;
    }
    
    // Create stats objects for each team based on fixtures
    const teamStats = {};
    
    // Initialize stats for all teams
    Object.keys(leagueData.groups).forEach(groupKey => {
        const group = leagueData.groups[groupKey];
        if (Array.isArray(group)) {
            group.forEach(team => {
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
        }
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
        const group = leagueData.groups[groupKey];
        if (Array.isArray(group)) {
            leagueData.groups[groupKey] = group.map(team => {
                return teamStats[team.id] || team;
            });

            // Sort teams by points, goal difference, goals scored
            leagueData.groups[groupKey].sort((a, b) => {
                if (b.points !== a.points) return b.points - a.points;
                if (b.goalDifference !== a.goalDifference) return b.goalDifference - a.goalDifference;
                return b.goalsFor - a.goalsFor;
            });
        }
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
        try {
        // Debug: Check if seasonsData is properly initialized
        console.log('Seasons data:', seasonsData);
        console.log('Current season:', currentSeason);
        console.log('Current season data:', getCurrentSeason());
        
        // Ensure data is properly initialized before loading the page
        console.log('Re-initializing current season data before page load...');
        initializeCurrentSeasonData();
        
        // Debug: Verify the data after initialization
        console.log('After initialization:');
        console.log('- Current season:', currentSeason);
        console.log('- leagueData.teams length:', leagueData.teams.length);
        console.log('- leagueData.groupFixtures length:', leagueData.groupFixtures.length);
        console.log('- leagueData.groups keys:', Object.keys(leagueData.groups));
        console.log('- First few team names:', leagueData.teams.slice(0, 3).map(t => t.name));
        
        // Load the home page
        loadPage('home');
        setupEventListeners();
        updateSeasonSelector();
        
        // Hide loader and show main content
        pageLoader.classList.add('hidden');
        mainContent.style.display = 'block';
        
        // Remove loader after transition
        setTimeout(() => {
            pageLoader.style.display = 'none';
        }, 500);
        } catch (error) {
            console.error('Error during page initialization:', error);
            // Force hide loader even if there's an error
            pageLoader.style.display = 'none';
            mainContent.style.display = 'block';
        }
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

    // Season Selector
    const seasonSelect = document.getElementById('seasonSelect');
    if (seasonSelect) {
        seasonSelect.addEventListener('change', (e) => {
            const selectedSeason = e.target.value;
            const seasonSelectElement = e.target;
            
            // Add visual feedback
            seasonSelectElement.classList.add('changing');
            
            // Add loading state
            seasonSelectElement.style.opacity = '0.7';
            seasonSelectElement.style.pointerEvents = 'none';
            
            // Switch season with smooth transition
            setTimeout(() => {
                if (switchSeason(selectedSeason)) {
                    // Success feedback
                    seasonSelectElement.classList.remove('changing');
                    seasonSelectElement.classList.add('changed');
                    
                    // Restore normal state
                    seasonSelectElement.style.opacity = '1';
                    seasonSelectElement.style.pointerEvents = 'auto';
                    
                    // Remove success class after animation
                    setTimeout(() => {
                        seasonSelectElement.classList.remove('changed');
                    }, 1000);
                    
                    // Reload current page to reflect season change
                    const currentPage = document.querySelector('.nav-link.active')?.dataset.page || 'home';
                    
                    // Force a small delay to ensure data is fully updated
                    setTimeout(() => {
                        loadPage(currentPage);
                    }, 50);
                    
                    console.log(`Season switched to: ${seasonsData[selectedSeason]?.name}`);
                } else {
                    // Error feedback
                    seasonSelectElement.classList.remove('changing');
                    seasonSelectElement.classList.add('error');
                    
                    // Restore normal state
                    seasonSelectElement.style.opacity = '1';
                    seasonSelectElement.style.pointerEvents = 'auto';
                    
                    // Remove error class after animation
                    setTimeout(() => {
                        seasonSelectElement.classList.remove('error');
                    }, 1000);
                    
                    console.error('Failed to switch season');
                }
            }, 300);
        });
    }

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

    // Check if current season is not available (planned or upcoming)
    if (isCurrentSeasonNotAvailable()) {
        console.log('Current season is not available, showing unavailable season message');
        displayUnavailableSeasonMessage();
        updateActiveNavigation(page);
        return;
    }

    // Hide unavailable season message if it exists and restore main content
    const unavailableMessage = document.getElementById('unavailableSeasonMessage');
    if (unavailableMessage) {
        unavailableMessage.style.display = 'none';
    }
    
    // Restore main content
    const mainContent = document.getElementById('mainContent');
    if (mainContent) {
        mainContent.style.display = 'block';
    }

    // Show quick loader for page transitions
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
            console.log('Loading knockouts page...');
            content = generateKnockoutsPage();
            console.log('Knockouts page generated successfully');
            break;
        case 'clubs':
            content = generateClubsPage();
            break;
        case 'certificates':
            content = generateCertificatesPage();
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
    const totalTeams = getCurrentSeasonTeamIds().length;
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
                                <div class="fixture-item completed" onclick="loadDetailedFixturePage('${matchId}')" style="cursor: pointer;">
                                    <div class="matchday-badge">${matchType}${isKnockout && fixture.leg ? ` - ${fixture.leg} Leg` : ''}</div>
                                    <div class="fixture-teams">
                                        <div class="team">
                                            ${getTeamLogo(fixture.homeTeam, '50px', false)}
                                            <span>${getTeamName(fixture.homeTeam)}</span>
                                        </div>
                                        <div class="vs completed">
                                            ${fixture.status === 'completed' && fixture.score ? `${fixture.score.home} - ${fixture.score.away}` : 'vs'}
                                        </div>
                                        <div class="team">
                                            ${getTeamLogo(fixture.awayTeam, '50px', false)}
                                            <span>${getTeamName(fixture.awayTeam)}</span>
                                        </div>
                                    </div>
                                    <div class="fixture-details">
                                        <span><i class="fas fa-calendar"></i> ${fixture.date}</span>
                                        <span><i class="fas fa-clock"></i> ${fixture.time}</span>
                                        <span class="status-badge completed">
                                            <i class="fas fa-check-circle"></i>
                                            completed
                                        </span>
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
                                <div class="fixture-item scheduled" onclick="loadDetailedFixturePage('${matchId}')" style="cursor: pointer;">
                                    <div class="matchday-badge">${matchType}${isKnockout && fixture.leg ? ` - ${fixture.leg} Leg` : ''}</div>
                                    <div class="fixture-teams">
                                        <div class="team">
                                            ${getTeamLogo(fixture.homeTeam, '50px', false)}
                                            <span>${getTeamName(fixture.homeTeam)}</span>
                                        </div>
                                        <div class="vs scheduled">vs</div>
                                        <div class="team">
                                            ${getTeamLogo(fixture.awayTeam, '50px', false)}
                                            <span>${getTeamName(fixture.awayTeam)}</span>
                                        </div>
                                    </div>
                                    <div class="fixture-details">
                                        <span><i class="fas fa-calendar"></i> ${fixture.date}</span>
                                        <span><i class="fas fa-clock"></i> ${fixture.time}</span>
                                        <span class="status-badge scheduled">
                                            <i class="fas fa-calendar"></i>
                                            scheduled
                                        </span>
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
                                        <h3>
                                            ${team.name}
                                            <img src="images/icons/verified-badge.svg" alt="Verified" class="verified-badge" style="width: 14px; height: 14px; margin-left: 6px; vertical-align: middle;">
                                        </h3>
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
                        <div class="quick-nav-card" onclick="loadPage('certificates')">
                            <i class="fas fa-certificate"></i>
                            <h3>Certificates</h3>
                            <p>Download championship certificates</p>
                        </div>
                    </div>
                </div>
            </div>
            
            
            <!-- Sponsors Section -->
            <div class="sponsors-section">
                <div class="sponsors-container">
                    <div class="sponsors-title">Our Partners</div>
                    <div class="sponsors-grid">
                        <div class="sponsor-item">
                            <img src="images/sponsors/linkmedia.svg" alt="LinkMedia" class="sponsor-logo">
                        </div>
                        <div class="sponsor-item">
                            <img src="images/sponsors/thorvisual.svg" alt="ThorVisual" class="sponsor-logo">
                        </div>
                        <div class="sponsor-item">
                            <img src="images/sponsors/yty.svg" alt="YTY" class="sponsor-logo">
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
                                        ${getTeamLogo(fixture.awayTeam, '50px', false)}
                                        <span>${getTeamName(fixture.awayTeam)}</span>
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
                                        ${getTeamLogo(fixture.awayTeam, '50px', false)}
                                        <span>${getTeamName(fixture.awayTeam)}</span>
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
                                        ${getTeamLogo(fixture.awayTeam, '50px', false)}
                                        <span>${getTeamName(fixture.awayTeam)}</span>
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
                                        ${getTeamLogo(fixture.awayTeam, '50px', false)}
                                        <span>${getTeamName(fixture.awayTeam)}</span>
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
        
        // Debug: Log the current group data
        console.log('Current leagueData.groups:', leagueData.groups);
        console.log('Group A data:', leagueData.groups?.groupA);
        console.log('Group A length:', leagueData.groups?.groupA?.length);
        
        // Validate that group data exists
        if (!leagueData || !leagueData.groups) {
            console.error('League data or groups not found');
            return `
                <div class="page-container">
                    <h1 class="page-title">Group Tables</h1>
                    <div class="error-message">
                        <p>No group data available. Please try refreshing the page.</p>
                    </div>
                </div>
            `;
        }

        // Check if all groups are empty (no teams)
        const hasTeams = (leagueData.groups.groupA && leagueData.groups.groupA.length > 0) ||
                        (leagueData.groups.groupB && leagueData.groups.groupB.length > 0) ||
                        (leagueData.groups.groupC && leagueData.groups.groupC.length > 0);
        
        if (!hasTeams) {
            console.error('No teams found in any group');
            return `
                <div class="page-container">
                    <h1 class="page-title">Group Tables</h1>
                    <div class="error-message">
                        <p>No teams found for the current season. Please try refreshing the page.</p>
                    </div>
                </div>
            `;
        }
    
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
                                ${(leagueData.groups.groupA || []).map((team, index) => `
                                    <tr class="${index < 4 ? 'qualified' : index >= 4 ? 'eliminated' : ''}">
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
                                ${(leagueData.groups.groupB || []).map((team, index) => `
                                    <tr class="${index < 4 ? 'qualified' : index >= 4 ? 'eliminated' : ''}">
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
                                ${(leagueData.groups.groupC || []).map((team, index) => `
                                    <tr class="${index < 4 ? 'qualified' : index >= 4 ? 'eliminated' : ''}">
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
                                ${(leagueData.groups.groupD || []).map((team, index) => `
                                    <tr class="${index < 4 ? 'qualified' : index >= 4 ? 'eliminated' : ''}">
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

// Helper function to check if knockout stages have started
function checkIfKnockoutsStarted() {
    // Check if any knockout matches have been played or are scheduled
    const roundOf16Matches = leagueData.knockouts.roundOf16 || [];
    const quarterFinalsMatches = leagueData.knockouts.quarterFinals || [];
    const semiFinalsMatches = leagueData.knockouts.semiFinals || [];
    const finalMatches = leagueData.knockouts.final || [];
    
    // Check if any knockout match has been completed (not just scheduled with TBD teams)
    const allMatches = [
        ...roundOf16Matches,
        ...quarterFinalsMatches,
        ...semiFinalsMatches,
        ...finalMatches
    ];
    console.log('All knockout matches:', allMatches.length);
    console.log('Sample matches:', allMatches.slice(0, 3).map(m => ({ id: m.id, status: m.status, homeTeam: m.homeTeam, awayTeam: m.awayTeam })));
    
    const hasStartedMatches = allMatches.some(match => match.status === 'completed');
    console.log('Has started matches:', hasStartedMatches);
    
    // Check if ALL teams in knockout matches are TBD
    const allTeamsAreTBD = allMatches.length > 0 && allMatches.every(match => 
        (match.homeTeam === 'TBD' || 
         match.homeTeam === 'TBA' || 
         match.homeTeam === 'To Be Determined' ||
         match.homeTeam === '') &&
        (match.awayTeam === 'TBD' || 
         match.awayTeam === 'TBA' || 
         match.awayTeam === 'To Be Determined' ||
         match.awayTeam === '')
    );
    console.log('All teams are TBD:', allTeamsAreTBD);
    
    // Also check if group stage is complete (all group matches finished)
    const groupMatches = leagueData.groupFixtures || [];
    const allGroupMatchesComplete = groupMatches.length > 0 && groupMatches.every(match => match.status === 'completed');
    console.log('Group matches count:', groupMatches.length);
    console.log('All group matches complete:', allGroupMatchesComplete);
    
    // Knockouts have started if:
    // 1. Any knockout match has been completed (actual matches played), OR
    // 2. All group matches are complete (knockouts should start)
    // BUT NOT if all teams are still TBD
    return (hasStartedMatches || allGroupMatchesComplete) && !allTeamsAreTBD;
}

function generateKnockoutsPage() {
    try {
        const currentSeasonData = getCurrentSeason();
        const seasonName = currentSeasonData ? currentSeasonData.name : 'Current Season';
        const seasonYear = currentSeasonData ? currentSeasonData.year : '2025';
        
        console.log('Generating knockouts page for:', seasonName, seasonYear);
        
        // Check if knockout stages have started
        const knockoutsStarted = checkIfKnockoutsStarted();
        console.log('Knockouts started:', knockoutsStarted);
        console.log('Current season:', currentSeason);
        console.log('Knockout data:', leagueData.knockouts);
    
    return `
        <div class="page-container">
            <h1 class="page-title">Knockout Stages - ${seasonName}</h1>
            <div class="season-info" style="text-align: center; margin-bottom: 20px; color: rgba(255, 255, 255, 0.8);">
                <span style="background: rgba(233, 0, 82, 0.2); padding: 5px 15px; border-radius: 20px; border: 1px solid rgba(233, 0, 82, 0.3);">
                    <i class="fas fa-calendar"></i> ${seasonYear}
                </span>
            </div>
            
            ${knockoutsStarted ? `
            <!-- Tournament Bracket Visualization -->
            <div class="brackets-visualization">
                <div class="brackets-header">
                    <h2><i class="fas fa-sitemap"></i> Tournament Bracket - ${seasonName}</h2>
                    <p>Visual representation of the ${seasonName.toLowerCase()} knockout tournament structure</p>
                </div>
                <div class="brackets-container">
                    <img src="images/brackets/brackets-${currentSeason}.svg" alt="${seasonName} Tournament Bracket" class="brackets-svg" onerror="this.src='images/brackets/brackets.svg'">
                </div>
            </div>
            ` : `
            <!-- Knockouts Not Started Message -->
            <div class="knockouts-not-started">
                <div class="not-started-icon">
                    <i class="fas fa-clock"></i>
                </div>
                <h2>Knockout Stages Not Yet Started</h2>
                <p>The knockout stages for <strong>${seasonName}</strong> will begin once the group stage is completed.</p>
                <div class="group-stage-info">
                    <div class="info-card">
                        <i class="fas fa-users"></i>
                        <h3>Group Stage</h3>
                        <p>Teams are currently competing in group matches to qualify for the knockout rounds.</p>
                    </div>
                    <div class="info-card">
                        <i class="fas fa-trophy"></i>
                        <h3>Qualification</h3>
                        <p>Top teams from each group will advance to the Round of 16.</p>
                    </div>
                </div>
                <div class="suggestion-text">
                    <p><i class="fas fa-lightbulb"></i> <strong>Tip:</strong> Check the <a href="#" onclick="loadPage('fixtures')" style="color: #e90052; text-decoration: none;">Fixtures</a> page to follow the group stage matches, or visit the <a href="#" onclick="loadPage('certificates')" style="color: #e90052; text-decoration: none;">Certificates</a> page to download championship certificates.</p>
                </div>
            </div>
            `}
            
            ${knockoutsStarted ? `
            <!-- Tab Navigation -->
            <div class="knockout-tabs">
                <button class="tab-button active" onclick="switchKnockoutTab('bracket')">
                    <i class="fas fa-sitemap"></i> Tournament Bracket
                </button>
                <button class="tab-button" onclick="switchKnockoutTab('details')">
                    <i class="fas fa-list"></i> Match Details
                </button>
                <button class="tab-button" onclick="loadPage('certificates')">
                    <i class="fas fa-certificate"></i> Certificates
                </button>
            </div>
            ` : ''}
            
            ${knockoutsStarted ? `
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
                <div class="season-details-header" style="text-align: center; margin-bottom: 30px; padding: 20px; background: rgba(255, 255, 255, 0.05); border-radius: 10px; border: 1px solid rgba(255, 255, 255, 0.1);">
                    <h3 style="color: #ffffff; margin-bottom: 10px; font-size: 1.3rem;">
                        <i class="fas fa-trophy"></i> ${seasonName} Knockout Matches
                    </h3>
                    <p style="color: rgba(255, 255, 255, 0.7); margin: 0;">
                        Complete match details for the ${seasonYear} tournament
                    </p>
                </div>
                <div class="fixtures-container">
                <div class="round-card">
                    <h2 class="round-title">Round of 16 - ${seasonName}</h2>
                    ${groupMatchesByTie(leagueData.knockouts.roundOf16).map(tie => `
                        <div class="tie-container">
                            <h3 class="tie-title">Tie ${tie.tie}</h3>
                            ${tie.matches.map(match => `
                                <div class="fixture-item ${match.status}" onclick="loadDetailedKnockoutPage('${match.round}_${match.tie || match.matchNumber}')" style="cursor: pointer;">
                                    <div class="matchday-badge">${match.round} - Tie ${match.tie || match.matchNumber} - ${match.leg} Leg</div>
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
                                            ${getTeamLogo(match.awayTeam, '50px', false)}
                                            <span>${match.awayTeam === 'TBD' ? 'TBD' : getTeamName(match.awayTeam)}</span>
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
                    <h2 class="round-title">Quarter Finals - ${seasonName}</h2>
                    ${groupMatchesByTie(leagueData.knockouts.quarterFinals).map(tie => `
                        <div class="tie-container">
                            <h3 class="tie-title">Tie ${tie.tie}</h3>
                            ${tie.matches.map(match => `
                                <div class="fixture-item ${match.status}" onclick="loadDetailedKnockoutPage('${match.round}_${match.tie || match.matchNumber}')" style="cursor: pointer;">
                                    <div class="matchday-badge">${match.round} - Tie ${match.tie || match.matchNumber} - ${match.leg} Leg</div>
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
                                            ${getTeamLogo(match.awayTeam, '50px', false)}
                                            <span>${match.awayTeam === 'TBD' ? 'TBD' : getTeamName(match.awayTeam)}</span>
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
                    <h2 class="round-title">Semi Finals - ${seasonName}</h2>
                    ${groupMatchesByTie(leagueData.knockouts.semiFinals).map(tie => `
                        <div class="tie-container">
                            <h3 class="tie-title">Tie ${tie.tie}</h3>
                            ${tie.matches.map(match => `
                                <div class="fixture-item ${match.status}" onclick="loadDetailedKnockoutPage('${match.round}_${match.tie || match.matchNumber}')" style="cursor: pointer;">
                                    <div class="matchday-badge">${match.round} - Tie ${match.tie || match.matchNumber} - ${match.leg} Leg</div>
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
                                            ${getTeamLogo(match.awayTeam, '50px', false)}
                                            <span>${match.awayTeam === 'TBD' ? 'TBD' : getTeamName(match.awayTeam)}</span>
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
                    <h2 class="round-title">Third Place Playoff - ${seasonName}</h2>
                    ${leagueData.knockouts.thirdPlacePlayoff.map(match => `
                        <div class="fixture-item ${match.status}" onclick="loadDetailedKnockoutPage('${match.round}_${match.tie || match.matchNumber}')" style="cursor: pointer;">
                            <div class="matchday-badge">${match.round}</div>
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
                                    ${getTeamLogo(match.awayTeam, '50px', false)}
                                    <span>${match.awayTeam === 'TBD' ? 'TBD' : getTeamName(match.awayTeam)}</span>
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
                    <h2 class="round-title">Final - ${seasonName}</h2>
                    ${leagueData.knockouts.final.map(match => `
                        <div class="fixture-item ${match.status}" onclick="loadDetailedKnockoutPage('${match.round}_${match.tie || match.matchNumber}')" style="cursor: pointer;">
                            <div class="matchday-badge">${match.round}</div>
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
                                    ${getTeamLogo(match.awayTeam, '50px', false)}
                                    <span>${match.awayTeam === 'TBD' ? 'TBD' : getTeamName(match.awayTeam)}</span>
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
            ` : ''}
        </div>
    `;
    } catch (error) {
        console.error('Error generating knockouts page:', error);
        return `
            <div class="page-container">
                <h1 class="page-title">Knockout Stages</h1>
                <div class="error-message" style="text-align: center; padding: 40px; color: #ff6b6b;">
                    <i class="fas fa-exclamation-triangle" style="font-size: 3rem; margin-bottom: 20px;"></i>
                    <h2>Error Loading Knockout Data</h2>
                    <p>There was an error loading the knockout stages. Please try refreshing the page.</p>
                    <button onclick="loadPage('knockouts')" class="btn primary" style="margin-top: 20px;">
                        <i class="fas fa-refresh"></i> Retry
                    </button>
            </div>
        </div>
    `;
    }
}

function generateClubsPage() {
    try {
        // Get teams participating in the current season
        const currentSeasonTeamIds = getCurrentSeasonTeamIds();
        
        // Debug: Log the current season team IDs
        console.log('Current season team IDs:', currentSeasonTeamIds);
        console.log('Current season:', currentSeason);
        console.log('Teams data available:', Object.keys(teamsData).length);
        
        // Validate that we have team IDs
        if (!currentSeasonTeamIds || currentSeasonTeamIds.length === 0) {
            console.error('No team IDs found for current season');
            return `
                <div class="page-container">
                    <h1 class="page-title">Clubs</h1>
                    <div class="error-message">
                        <p>No teams found for the current season. Please try refreshing the page.</p>
                    </div>
                </div>
            `;
        }
        
        return `
            <div class="page-container">
                <h1 class="page-title">Clubs</h1>
                <div class="clubs-grid">
                    ${currentSeasonTeamIds.map(teamId => {
                        const team = teamsData[teamId];
                        if (!team) {
                            console.error(`Team data not found for teamId: ${teamId}`);
                            return ''; // Skip if team data not found
                        }
                    
                    // Get team's group for current season
                    const teamGroup = findTeamGroupInSeason(teamId, currentSeason);
                    // Get team's current stats from group fixtures
                    const teamFixtures = (leagueData.groupFixtures || []).filter(f => 
                        f.homeTeam === teamId || f.awayTeam === teamId
                    );
                    const teamStats = calculateTeamStats(teamId, teamFixtures);
                    
                    return `
                        <div class="club-card" onclick="loadDetailedTeamPage(${JSON.stringify(team).replace(/"/g, '&quot;')})" style="cursor: pointer;">
                            <div class="club-header">
                                ${getTeamLogo(teamId, '80px', false)}
                                <div class="club-name">
                                    ${team.name}
                                    <img src="images/icons/verified-badge.svg" alt="Verified" class="verified-badge" style="width: 16px; height: 16px; margin-left: 8px; vertical-align: middle;">
                                </div>
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
    } catch (error) {
        console.error('Error in generateClubsPage:', error);
        return `
            <div class="page-container">
                <h1 class="page-title">Clubs</h1>
                <div class="error-message">
                    <p>There was an error loading the clubs page. Please try refreshing the page.</p>
                    <p>Error: ${error.message}</p>
                </div>
            </div>
        `;
    }
}

function generateCertificatesPage() {
    // Get all available seasons
    const availableSeasons = Object.entries(seasonsData).map(([seasonId, season]) => ({
        id: seasonId,
        name: season.name,
        year: season.year,
        status: season.status
    }));

    // Check if current season has certificates available
    const currentSeasonData = seasonsData[currentSeason];
    const certificatesAvailable = currentSeasonData && currentSeasonData.status === 'completed';

    return `
        <div class="page-container">
            <h1 class="page-title">Championship Certificates</h1>
            <p class="page-subtitle">Download and review official certificates for all seasons</p>
            
            <!-- Season Filter -->
            <div class="season-filter-section">
                <h2>Select Season</h2>
                <div class="season-selector-container">
                    <select id="certificateSeasonSelect" class="certificate-season-select" onchange="filterCertificatesBySeason(this.value)">
                        ${availableSeasons.map(season => `
                            <option value="${season.id}" ${season.id === currentSeason ? 'selected' : ''}>
                                ${season.name} (${season.year}) - ${season.status}
                            </option>
                        `).join('')}
                    </select>
                    <div class="season-selector-icon">
                        <i class="fas fa-trophy"></i>
                    </div>
                </div>
            </div>
            
            <!-- Certificates Section -->
            <div class="certificates-section" id="certificatesContent">
                <div class="certificates-header">
                    <h2 id="certificatesTitle">🏆 ${seasonsData[currentSeason]?.name || 'Current Season'} Certificates</h2>
                    <p id="certificatesSubtitle">Download and review the official certificates for our top 3 teams</p>
                </div>
                ${certificatesAvailable ? `
                    <div class="certificates-grid">
                        <div class="certificate-item">
                            <div class="certificate-icon">🥇</div>
                            <div class="certificate-position">1st Place</div>
                            <div class="certificate-description">Championship Winner Certificate</div>
                            <div class="certificate-actions">
                                <a href="images/certificates/${currentSeason}-first.jpeg" download="Championship_Winner_Certificate_${seasonsData[currentSeason]?.name?.replace(' ', '_') || 'Current_Season'}.jpeg" class="certificate-btn download">
                                    <i class="fas fa-download"></i> Download
                                </a>
                                <button onclick="viewCertificate('${currentSeason}-first', 'Championship Winner Certificate - ${seasonsData[currentSeason]?.name || 'Current Season'}')" class="certificate-btn view">
                                    <i class="fas fa-eye"></i> View
                                </button>
                            </div>
                        </div>
                        <div class="certificate-item">
                            <div class="certificate-icon">🥈</div>
                            <div class="certificate-position">2nd Place</div>
                            <div class="certificate-description">Runner-up Certificate</div>
                            <div class="certificate-actions">
                                <a href="images/certificates/${currentSeason}-second.jpeg" download="Runner_up_Certificate_${seasonsData[currentSeason]?.name?.replace(' ', '_') || 'Current_Season'}.jpeg" class="certificate-btn download">
                                    <i class="fas fa-download"></i> Download
                                </a>
                                <button onclick="viewCertificate('${currentSeason}-second', 'Runner-up Certificate - ${seasonsData[currentSeason]?.name || 'Current Season'}')" class="certificate-btn view">
                                    <i class="fas fa-eye"></i> View
                                </button>
                            </div>
                        </div>
                        <div class="certificate-item">
                            <div class="certificate-icon">🥉</div>
                            <div class="certificate-position">3rd Place</div>
                            <div class="certificate-description">Third Place Certificate</div>
                            <div class="certificate-actions">
                                <a href="images/certificates/${currentSeason}-third.jpeg" download="Third_Place_Certificate_${seasonsData[currentSeason]?.name?.replace(' ', '_') || 'Current_Season'}.jpeg" class="certificate-btn download">
                                    <i class="fas fa-download"></i> Download
                                </a>
                                <button onclick="viewCertificate('${currentSeason}-third', 'Third Place Certificate - ${seasonsData[currentSeason]?.name || 'Current Season'}')" class="certificate-btn view">
                                    <i class="fas fa-eye"></i> View
                                </button>
                            </div>
                        </div>
                    </div>
                ` : `
                    <div class="no-certificates-message">
                        <div class="no-certificates-icon">
                            <i class="fas fa-clock"></i>
                        </div>
                        <h3>Certificates Not Yet Available</h3>
                        <p>The certificates for <strong>${seasonsData[currentSeason]?.name || 'this season'}</strong> will be available once the season is completed.</p>
                        <div class="season-status-info">
                            <span class="status-badge ${currentSeasonData?.status || 'planned'}">${currentSeasonData?.status || 'planned'}</span>
                            <p class="status-description">
                                ${currentSeasonData?.status === 'upcoming' ? 'This season is scheduled to begin soon.' : 
                                  currentSeasonData?.status === 'planned' ? 'This season is in the planning phase.' : 
                                  'This season is currently in progress.'}
                            </p>
                        </div>
                        <div class="suggestion-text">
                            <p><i class="fas fa-lightbulb"></i> <strong>Tip:</strong> Select a completed season from the dropdown above to view available certificates.</p>
                        </div>
                    </div>
                `}
            </div>
            
            <!-- Certificate Modal -->
            <div id="certificateModal" class="certificate-modal">
                <div class="certificate-modal-content">
                    <div class="certificate-modal-header">
                        <h3 class="certificate-modal-title" id="modalTitle">Certificate Preview</h3>
                        <button class="certificate-modal-close" onclick="closeCertificateModal()">&times;</button>
                    </div>
                    <!-- Loading Spinner -->
                    <div id="certificateLoading" class="certificate-loading">
                        <div class="certificate-spinner"></div>
                        <div class="certificate-loading-text">Loading Certificate...</div>
                        <div class="certificate-loading-subtext">Please wait while we load the certificate image</div>
                    </div>
                    
                    <!-- Certificate Image -->
                    <img id="certificatePreview" class="certificate-preview" src="" alt="Certificate Preview" style="display: none;" onerror="showFallbackMessage()">
                    
                    <!-- Fallback Message -->
                    <div id="fallbackMessage" style="display: none; text-align: center; padding: 40px; color: rgba(255, 255, 255, 0.8);">
                        <i class="fas fa-exclamation-triangle" style="font-size: 3rem; margin-bottom: 20px; color: #e90052;"></i>
                        <h3>Image Preview Not Available</h3>
                        <p>Unable to load the certificate image. Please use the download button to get the certificate.</p>
                        <button onclick="downloadCertificate()" class="certificate-modal-btn download" style="margin-top: 20px;">
                            <i class="fas fa-download"></i> Download Certificate
                        </button>
                    </div>
                    <div class="certificate-modal-actions">
                        <a id="modalDownload" href="" download="" class="certificate-modal-btn download">
                            <i class="fas fa-download"></i> Download Certificate
                        </a>
                        <button onclick="closeCertificateModal()" class="certificate-modal-btn close">
                            <i class="fas fa-times"></i> Close
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `;
}

function filterCertificatesBySeason(seasonId) {
    // Update the current season
    switchSeason(seasonId);
    
    // Check if certificates are available for this season
    const seasonData = seasonsData[seasonId];
    const certificatesAvailable = seasonData && seasonData.status === 'completed';
    
    // Update the certificates page content
    const certificatesTitle = document.getElementById('certificatesTitle');
    const certificatesSubtitle = document.getElementById('certificatesSubtitle');
    const seasonSelect = document.getElementById('certificateSeasonSelect');
    const certificatesContent = document.getElementById('certificatesContent');
    
    if (certificatesTitle) {
        certificatesTitle.textContent = `🏆 ${seasonsData[seasonId]?.name || 'Current Season'} Certificates`;
    }
    
    if (certificatesSubtitle) {
        certificatesSubtitle.textContent = `Download and review the official certificates for our top 3 teams`;
    }
    
    // Update the dropdown selection
    if (seasonSelect) {
        seasonSelect.value = seasonId;
    }
    
    // Update the certificates content based on availability
    if (certificatesContent) {
        if (certificatesAvailable) {
            // Show certificates
            certificatesContent.innerHTML = `
                <div class="certificates-header">
                    <h2 id="certificatesTitle">🏆 ${seasonsData[seasonId]?.name || 'Current Season'} Certificates</h2>
                    <p id="certificatesSubtitle">Download and review the official certificates for our top 3 teams</p>
                </div>
                <div class="certificates-grid">
                    <div class="certificate-item">
                        <div class="certificate-icon">🥇</div>
                        <div class="certificate-position">1st Place</div>
                        <div class="certificate-description">Championship Winner Certificate</div>
                        <div class="certificate-actions">
                            <a href="images/certificates/${seasonId}-first.jpeg" download="Championship_Winner_Certificate_${seasonsData[seasonId]?.name?.replace(' ', '_') || 'Current_Season'}.jpeg" class="certificate-btn download">
                                <i class="fas fa-download"></i> Download
                            </a>
                            <button onclick="viewCertificate('${seasonId}-first', 'Championship Winner Certificate - ${seasonsData[seasonId]?.name || 'Current Season'}')" class="certificate-btn view">
                                <i class="fas fa-eye"></i> View
                            </button>
                        </div>
                    </div>
                    <div class="certificate-item">
                        <div class="certificate-icon">🥈</div>
                        <div class="certificate-position">2nd Place</div>
                        <div class="certificate-description">Runner-up Certificate</div>
                        <div class="certificate-actions">
                            <a href="images/certificates/${seasonId}-second.jpeg" download="Runner_up_Certificate_${seasonsData[seasonId]?.name?.replace(' ', '_') || 'Current_Season'}.jpeg" class="certificate-btn download">
                                <i class="fas fa-download"></i> Download
                            </a>
                            <button onclick="viewCertificate('${seasonId}-second', 'Runner-up Certificate - ${seasonsData[seasonId]?.name || 'Current Season'}')" class="certificate-btn view">
                                <i class="fas fa-eye"></i> View
                            </button>
                        </div>
                    </div>
                    <div class="certificate-item">
                        <div class="certificate-icon">🥉</div>
                        <div class="certificate-position">3rd Place</div>
                        <div class="certificate-description">Third Place Certificate</div>
                        <div class="certificate-actions">
                            <a href="images/certificates/${seasonId}-third.jpeg" download="Third_Place_Certificate_${seasonsData[seasonId]?.name?.replace(' ', '_') || 'Current_Season'}.jpeg" class="certificate-btn download">
                                <i class="fas fa-download"></i> Download
                            </a>
                            <button onclick="viewCertificate('${seasonId}-third', 'Third Place Certificate - ${seasonsData[seasonId]?.name || 'Current Season'}')" class="certificate-btn view">
                                <i class="fas fa-eye"></i> View
                            </button>
                        </div>
                    </div>
                </div>
            `;
        } else {
            // Show no certificates message
            certificatesContent.innerHTML = `
                <div class="certificates-header">
                    <h2 id="certificatesTitle">🏆 ${seasonsData[seasonId]?.name || 'Current Season'} Certificates</h2>
                    <p id="certificatesSubtitle">Download and review the official certificates for our top 3 teams</p>
                </div>
                <div class="no-certificates-message">
                    <div class="no-certificates-icon">
                        <i class="fas fa-clock"></i>
                    </div>
                    <h3>Certificates Not Yet Available</h3>
                    <p>The certificates for <strong>${seasonsData[seasonId]?.name || 'this season'}</strong> will be available once the season is completed.</p>
                    <div class="season-status-info">
                        <span class="status-badge ${seasonData?.status || 'planned'}">${seasonData?.status || 'planned'}</span>
                        <p class="status-description">
                            ${seasonData?.status === 'upcoming' ? 'This season is scheduled to begin soon.' : 
                              seasonData?.status === 'planned' ? 'This season is in the planning phase.' : 
                              'This season is currently in progress.'}
                        </p>
                    </div>
                    <div class="suggestion-text">
                        <p><i class="fas fa-lightbulb"></i> <strong>Tip:</strong> Select a completed season from the dropdown above to view available certificates.</p>
                    </div>
                </div>
            `;
        }
    }
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
    
    // Calculate team statistics from ALL matches (group + knockout)
    const allCurrentSeasonMatches = [...teamGroupFixtures, ...teamKnockouts];
    const teamStats = calculateTeamStats(teamId, allCurrentSeasonMatches);
    
    // Get team's group for current season
    const teamGroup = findTeamGroupInSeason(teamId, currentSeason);
    
    // Get historical records
    const historicalRecords = calculateHistoricalRecords();
    const teamRecords = historicalRecords[teamId] || {
        leagueWins: 0,
        runnerUp: 0,
        thirdPlace: 0,
        totalTrophies: 0,
        seasons: []
    };
    
    // Get all-seasons stats
    const allSeasonsStats = calculateAllSeasonsStats(teamId);

    const content = `
        <div class="page-container">
            <!-- Navigation Header -->
            <div class="page-navigation">
                <div class="back-button" onclick="loadPage('clubs')" style="cursor: pointer; color: #e90052; font-weight: bold; display: flex; align-items: center; gap: 10px; padding: 10px 0;">
                    <i class="fas fa-arrow-left"></i>
                    Back to Clubs
                </div>
                <div class="page-title" style="color: #ffffff; font-size: 1.5rem; font-weight: bold; margin: 10px 0; text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);">
                    Team Profile
                </div>
            </div>

            <!-- Team Header Section -->
            <div class="detailed-header">
                <div class="team-banner">
                    ${getTeamLogo(teamId, '80px')}
                    <div class="team-info">
                        <h1 class="team-name">
                            ${team.name}
                            <img src="images/icons/verified-badge.svg" alt="Verified" class="verified-badge" style="width: 20px; height: 20px; margin-left: 10px; vertical-align: middle;">
                        </h1>
                        <p class="team-subtitle">${teamGroup} • ${team.stadium}</p>
                        <div class="team-stats-overview">
                            <span class="stat-badge">Group: ${teamGroup}</span>
                            <span class="stat-badge">Matches: ${teamGroupFixtures.length}G ${teamKnockouts.length}K</span>
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
                        <h3 class="collapsible-header" onclick="toggleSection(this)">
                            <i class="fas fa-info-circle"></i> Club Information
                            <i class="fas fa-chevron-down toggle-icon"></i>
                        </h3>
                        <div class="collapsible-content collapsed" style="display: none;">
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
                            <span class="value">
                                ${teamRecords.leagueWins > 0 ? `${teamRecords.leagueWins} Championship${teamRecords.leagueWins > 1 ? 's' : ''}` : '0 Championships'}
                                ${teamRecords.runnerUp > 0 ? `, ${teamRecords.runnerUp} Runner-up${teamRecords.runnerUp > 1 ? 's' : ''}` : ''}
                                ${teamRecords.thirdPlace > 0 ? `, ${teamRecords.thirdPlace} Third Place${teamRecords.thirdPlace > 1 ? 's' : ''}` : ''}
                            </span>
                        </div>
                        <div class="info-item">
                            <span class="label"><i class="fas fa-tag"></i> Short Name:</span>
                            <span class="value">${team.shortName}</span>
                        </div>
                        </div>
                    </div>

                    <div class="info-card">
                        <h3 class="collapsible-header" onclick="toggleSection(this)">
                            <i class="fas fa-chart-bar"></i> Season Statistics
                            <i class="fas fa-chevron-down toggle-icon"></i>
                        </h3>
                        <div class="collapsible-content collapsed" style="display: none;">
                        <div class="info-item">
                            <span class="label"><i class="fas fa-gamepad"></i> Total Matches:</span>
                            <span class="value">${teamStats.played}</span>
                        </div>
                        <div class="info-item">
                            <span class="label"><i class="fas fa-users"></i> Group Matches:</span>
                            <span class="value">${teamGroupFixtures.length}</span>
                        </div>
                        <div class="info-item">
                            <span class="label"><i class="fas fa-trophy"></i> Knockout Matches:</span>
                            <span class="value">${teamKnockouts.length}</span>
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
                </div>

                <!-- All Seasons Statistics Section -->
                <div class="info-card all-seasons-stats">
                    <h3 class="collapsible-header" onclick="toggleSection(this)">
                        <i class="fas fa-chart-line"></i> All Seasons Statistics
                        <i class="fas fa-chevron-down toggle-icon"></i>
                    </h3>
                    <div class="collapsible-content" style="display: none;">
                    <div class="all-seasons-overview">
                        <div class="overview-stats">
                            <div class="overview-stat">
                                <span class="stat-value">${allSeasonsStats.seasonsPlayed}</span>
                                <span class="stat-label">Seasons Played</span>
                            </div>
                            <div class="overview-stat">
                                <span class="stat-value">${allSeasonsStats.totalMatches}</span>
                                <span class="stat-label">Total Matches</span>
                            </div>
                            <div class="overview-stat">
                                <span class="stat-value">${allSeasonsStats.totalWins}</span>
                                <span class="stat-label">Total Wins</span>
                            </div>
                            <div class="overview-stat">
                                <span class="stat-value">${allSeasonsStats.totalDraws}</span>
                                <span class="stat-label">Total Draws</span>
                            </div>
                            <div class="overview-stat">
                                <span class="stat-value">${allSeasonsStats.totalLosses}</span>
                                <span class="stat-label">Total Losses</span>
                            </div>
                        </div>
                        <div class="goals-overview">
                            <div class="goals-stat">
                                <span class="stat-value">${allSeasonsStats.totalGoalsFor}</span>
                                <span class="stat-label">Goals For</span>
                            </div>
                            <div class="goals-stat">
                                <span class="stat-value">${allSeasonsStats.totalGoalsAgainst}</span>
                                <span class="stat-label">Goals Against</span>
                            </div>
                            <div class="goals-stat">
                                <span class="stat-value" style="color: ${allSeasonsStats.totalGoalDifference >= 0 ? '#28a745' : '#dc3545'};">
                                    ${allSeasonsStats.totalGoalDifference >= 0 ? '+' : ''}${allSeasonsStats.totalGoalDifference}
                                </span>
                                <span class="stat-label">Goal Difference</span>
                            </div>
                        </div>
                    </div>
                    
                    ${allSeasonsStats.seasons.length > 0 ? `
                    <div class="seasons-breakdown">
                        <h4><i class="fas fa-list"></i> Season Breakdown</h4>
                        <div class="seasons-list">
                            ${allSeasonsStats.seasons.map(season => `
                                <div class="season-item">
                                    <div class="season-header">
                                        <span class="season-name">${season.seasonName} (${season.seasonYear})</span>
                                        <span class="season-group">Group ${season.group}</span>
                                    </div>
                                    <div class="season-stats">
                                        <div class="season-stat">
                                            <span class="stat-value">${season.matches}</span>
                                            <span class="stat-label">Total Matches</span>
                                        </div>
                                        <div class="season-stat">
                                            <span class="stat-value">${season.groupMatches || 0}G ${season.knockoutMatches || 0}K</span>
                                            <span class="stat-label">Group/Knockout</span>
                                        </div>
                                        <div class="season-stat">
                                            <span class="stat-value">${season.wins}W ${season.draws}D ${season.losses}L</span>
                                            <span class="stat-label">Record</span>
                                        </div>
                                        <div class="season-stat">
                                            <span class="stat-value">${season.points}</span>
                                            <span class="stat-label">Points</span>
                                        </div>
                                        <div class="season-stat">
                                            <span class="stat-value">${season.goalsFor}/${season.goalsAgainst}</span>
                                            <span class="stat-label">Goals</span>
                                        </div>
                                    </div>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                    ` : '<p style="text-align: center; color: #666; font-style: italic; margin-top: 20px;">No season data available.</p>'}
                    </div>
                </div>

                <!-- Match History Section -->
                <div class="fixtures-section">
                    <h3 class="collapsible-header" onclick="toggleSection(this)">
                        <i class="fas fa-history"></i> Group Stage Matches
                        <i class="fas fa-chevron-down toggle-icon"></i>
                    </h3>
                    <div class="collapsible-content" style="display: none;">
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
                </div>

                <!-- Team Form Section -->
                <div class="form-section">
                    <h3 class="collapsible-header" onclick="toggleSection(this)">
                        <i class="fas fa-chart-line"></i> Recent Form
                        <i class="fas fa-chevron-down toggle-icon"></i>
                    </h3>
                    <div class="collapsible-content" style="display: none;">
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
                    <h3 class="collapsible-header" onclick="toggleSection(this)">
                        <i class="fas fa-analytics"></i> Performance Analysis
                        <i class="fas fa-chevron-down toggle-icon"></i>
                    </h3>
                    <div class="collapsible-content" style="display: none;">
                        <div class="performance-stats-card">
                            <div class="performance-stats-grid">
                                <div class="perf-stat-item home-stat">
                                    <div class="perf-icon">
                                        <i class="fas fa-home"></i>
                                    </div>
                                    <div class="perf-content">
                                        <div class="perf-title">Home</div>
                                        <div class="perf-numbers">
                                            <span class="perf-number">${getHomeMatchesFromFixtures(teamId, teamGroupFixtures)}</span>
                                            <span class="perf-label">matches</span>
                                        </div>
                                        <div class="perf-numbers">
                                            <span class="perf-number">${getHomeWinsFromFixtures(teamId, teamGroupFixtures)}</span>
                                            <span class="perf-label">wins</span>
                                        </div>
                                        <div class="perf-numbers">
                                            <span class="perf-number">${getHomeGoalsFromFixtures(teamId, teamGroupFixtures)}</span>
                                            <span class="perf-label">goals</span>
                                        </div>
                                    </div>
                                </div>
                                
                                <div class="perf-stat-item away-stat">
                                    <div class="perf-icon">
                                        <i class="fas fa-plane"></i>
                                    </div>
                                    <div class="perf-content">
                                        <div class="perf-title">Away</div>
                                        <div class="perf-numbers">
                                            <span class="perf-number">${getAwayMatchesFromFixtures(teamId, teamGroupFixtures)}</span>
                                            <span class="perf-label">matches</span>
                                        </div>
                                        <div class="perf-numbers">
                                            <span class="perf-number">${getAwayWinsFromFixtures(teamId, teamGroupFixtures)}</span>
                                            <span class="perf-label">wins</span>
                                        </div>
                                        <div class="perf-numbers">
                                            <span class="perf-number">${getAwayGoalsFromFixtures(teamId, teamGroupFixtures)}</span>
                                            <span class="perf-label">goals</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Knockouts Section -->
                ${teamKnockouts.length > 0 ? `
                <div class="knockouts-section" style="margin-top: 20px;">
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
            </div>
        </div>
    `;

    mainContent.innerHTML = content;
    currentPage = 'team-detail';
}

// Function to toggle collapsible sections
function toggleSection(header) {
    const content = header.nextElementSibling;
    const icon = header.querySelector('.toggle-icon');
    
    if (content.style.display === 'none' || content.classList.contains('collapsed')) {
        // Expand
        content.style.display = 'block';
        content.classList.remove('collapsed');
        content.classList.add('expanded');
        icon.classList.remove('fa-chevron-down');
        icon.classList.add('fa-chevron-up');
        icon.style.transform = 'rotate(180deg)';
    } else {
        // Collapse
        content.style.display = 'none';
        content.classList.remove('expanded');
        content.classList.add('collapsed');
        icon.classList.remove('fa-chevron-up');
        icon.classList.add('fa-chevron-down');
        icon.style.transform = 'rotate(0deg)';
    }
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
                        <div class="back-button" onclick="loadPage('fixtures')" style="cursor: pointer; color: #e90052; font-weight: bold; display: flex; align-items: center; gap: 10px; padding: 10px 0;">
                            <i class="fas fa-arrow-left"></i>
                            Back to Fixtures
                        </div>
                        <div class="page-title" style="color: #ffffff; font-size: 1.5rem; font-weight: bold; margin: 10px 0; text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);">
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
                    <div class="back-button" onclick="loadPage('fixtures')" style="cursor: pointer; color: #00ff85; font-weight: bold; display: flex; align-items: center; gap: 10px; padding: 10px 0;">
                        <i class="fas fa-arrow-left"></i>
                        Back to Fixtures
                    </div>
                    <div class="page-title" style="color: #ffffff; font-size: 1.5rem; font-weight: bold; margin: 10px 0; text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);">
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
                <div class="back-button" onclick="loadPage('${fixtureData.round ? 'knockouts' : 'fixtures'}')" style="cursor: pointer; color: #e90052; font-weight: bold; display: flex; align-items: center; gap: 10px; padding: 10px 0;">
                    <i class="fas fa-arrow-left"></i>
                    Back to ${fixtureData.round ? 'Knockouts' : 'Fixtures'}
                </div>
                <div class="page-title" style="color: #ffffff; font-size: 1.5rem; font-weight: bold; margin: 10px 0; text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);">
                    Match Details
                </div>
            </div>

            <!-- Match Header Section -->
            <div class="detailed-header">
                <div class="fixture-banner">
                                            <div class="fixture-teams-large">
                            <div class="team-side">
                                ${getTeamLogo(fixtureData.homeTeam, '40px')}
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
                                ${getTeamLogo(fixtureData.awayTeam, '40px')}
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
                    <!-- Complete Match Details Card -->
                    <div class="info-card complete-match-card">
                        <h3><i class="fas fa-futbol"></i> Match Details</h3>
                        
                        <!-- Match Header with Teams and Score -->
                        <div class="match-header-section">
                            <div class="match-teams">
                                <div class="team-display home-team-display">
                                    <i class="fas fa-home"></i>
                                    <span class="team-name">${homeTeamData.name}</span>
                                    <span class="team-group">Group ${homeTeamGroup}</span>
                                </div>
                                
                                <div class="match-score-section">
                                    ${fixtureData.status === 'completed' && fixtureData.score ? `
                                        <div class="final-score">
                                            <span class="score">${fixtureData.score.home} - ${fixtureData.score.away}</span>
                                            ${fixtureData.penalties ? `
                                                <div class="penalties">(${fixtureData.penalties.home}-${fixtureData.penalties.away} pen)</div>
                                            ` : ''}
                                        </div>
                                    ` : `
                                        <div class="vs-text">VS</div>
                                    `}
                                </div>
                                
                                <div class="team-display away-team-display">
                                    <i class="fas fa-plane"></i>
                                    <span class="team-name">${awayTeamData.name}</span>
                                    <span class="team-group">Group ${awayTeamGroup}</span>
                                </div>
                            </div>
                        </div>

                        <!-- Match Information -->
                        <div class="match-info-section">
                            <div class="info-row">
                                ${fixtureData.group ? `
                                    <div class="info-item">
                                        <span class="label"><i class="fas fa-trophy"></i> Group:</span>
                                        <span class="value">Group ${fixtureData.group}</span>
                                    </div>
                                ` : ''}
                                ${fixtureData.round ? `
                                    <div class="info-item">
                                        <span class="label"><i class="fas fa-star"></i> Round:</span>
                                        <span class="value">${fixtureData.round}</span>
                                    </div>
                                ` : ''}
                                ${fixtureData.matchday ? `
                                    <div class="info-item">
                                        <span class="label"><i class="fas fa-calendar-day"></i> Matchday:</span>
                                        <span class="value">${fixtureData.matchday}</span>
                                    </div>
                                ` : ''}
                            </div>
                            <div class="info-row">
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
                            </div>
                            ${fixtureData.venue ? `
                                <div class="info-row">
                                    <div class="info-item">
                                        <span class="label"><i class="fas fa-map-marker-alt"></i> Venue:</span>
                                        <span class="value">${fixtureData.venue}</span>
                                    </div>
                                </div>
                            ` : ''}
                        </div>

                        <!-- Team Stats Comparison -->
                        <div class="team-stats-section">
                            <h4><i class="fas fa-chart-bar"></i> Team Statistics</h4>
                            <div class="stats-comparison">
                                <div class="team-stats home-stats">
                                    <div class="stat-item">
                                        <span class="stat-label">Points:</span>
                                        <span class="stat-value">${homeTeamStats.points}</span>
                                    </div>
                                    <div class="stat-item">
                                        <span class="stat-label">Record:</span>
                                        <span class="stat-value">${homeTeamStats.won}W ${homeTeamStats.drawn}D ${homeTeamStats.lost}L</span>
                                    </div>
                                    <div class="stat-item">
                                        <span class="stat-label">Goals:</span>
                                        <span class="stat-value">${homeTeamStats.goalsFor}-${homeTeamStats.goalsAgainst}</span>
                                    </div>
                                    <div class="stat-item">
                                        <span class="stat-label">GD:</span>
                                        <span class="stat-value ${homeTeamStats.goalDifference >= 0 ? 'positive' : 'negative'}">${homeTeamStats.goalDifference >= 0 ? '+' : ''}${homeTeamStats.goalDifference}</span>
                                    </div>
                                </div>
                                
                                <div class="stats-divider"></div>
                                
                                <div class="team-stats away-stats">
                                    <div class="stat-item">
                                        <span class="stat-label">Points:</span>
                                        <span class="stat-value">${awayTeamStats.points}</span>
                                    </div>
                                    <div class="stat-item">
                                        <span class="stat-label">Record:</span>
                                        <span class="stat-value">${awayTeamStats.won}W ${awayTeamStats.drawn}D ${awayTeamStats.lost}L</span>
                                    </div>
                                    <div class="stat-item">
                                        <span class="stat-label">Goals:</span>
                                        <span class="stat-value">${awayTeamStats.goalsFor}-${awayTeamStats.goalsAgainst}</span>
                                    </div>
                                    <div class="stat-item">
                                        <span class="stat-label">GD:</span>
                                        <span class="stat-value ${awayTeamStats.goalDifference >= 0 ? 'positive' : 'negative'}">${awayTeamStats.goalDifference >= 0 ? '+' : ''}${awayTeamStats.goalDifference}</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Head to Head Section -->
                        <div class="head-to-head-section">
                            <h4><i class="fas fa-history"></i> Head to Head</h4>
                            ${getHeadToHeadMatches(fixtureData.homeTeam, fixtureData.awayTeam)}
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
                                    <div class="back-button" onclick="loadPage('knockouts')" style="cursor: pointer; color: #e90052; font-weight: bold; display: flex; align-items: center; gap: 10px; padding: 10px 0;">
                    <i class="fas fa-arrow-left"></i>
                    Back to Knockouts
                </div>
                    <div class="page-title" style="color: #1e0021; font-size: 1.5rem; font-weight: bold; margin: 10px 0;">
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
                <div class="back-button" onclick="loadPage('knockouts')" style="cursor: pointer; color: #e90052; font-weight: bold; display: flex; align-items: center; gap: 10px; padding: 10px 0;">
                    <i class="fas fa-arrow-left"></i>
                    Back to Knockouts
                </div>
                <div class="page-title" style="color: #1e0021; font-size: 1.5rem; font-weight: bold; margin: 10px 0;">
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
                            ${getTeamLogo(match.homeTeam, '40px')}
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
                            ${getTeamLogo(match.awayTeam, '40px')}
                            <h2 class="team-name">${awayTeamData.name}</h2>
                            <div class="team-group">${awayTeamGroup}</div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Main Content Grid -->
            <div class="detailed-content">
                <div class="info-grid">
                    <!-- Complete Match Details Card -->
                    <div class="info-card complete-match-card">
                        <h3><i class="fas fa-futbol"></i> Match Details</h3>
                        
                        <!-- Match Header with Teams and Score -->
                        <div class="match-header-section">
                            <div class="match-teams">
                                <div class="team-display home-team-display">
                                    <i class="fas fa-home"></i>
                                    <span class="team-name">${homeTeamData.name}</span>
                                    <span class="team-group">Group ${homeTeamGroup}</span>
                                </div>
                                
                                <div class="match-score-section">
                                    ${match.status === 'completed' && match.score ? `
                                        <div class="final-score">
                                            <span class="score">${match.score.home} - ${match.score.away}</span>
                                            ${match.penalties ? `
                                                <div class="penalties">(${match.penalties.home}-${match.penalties.away} pen)</div>
                                            ` : ''}
                                        </div>
                                    ` : `
                                        <div class="vs-text">VS</div>
                                    `}
                                </div>
                                
                                <div class="team-display away-team-display">
                                    <i class="fas fa-plane"></i>
                                    <span class="team-name">${awayTeamData.name}</span>
                                    <span class="team-group">Group ${awayTeamGroup}</span>
                                </div>
                            </div>
                        </div>

                        <!-- Match Information -->
                        <div class="match-info-section">
                            <div class="info-row">
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
                            </div>
                            <div class="info-row">
                                <div class="info-item">
                                    <span class="label"><i class="fas fa-flag"></i> Status:</span>
                                    <span class="value status ${match.status}">${match.status}</span>
                                </div>
                                <div class="info-item">
                                    <span class="label"><i class="fas fa-calendar"></i> Date:</span>
                                    <span class="value">${match.date}</span>
                                </div>
                                <div class="info-item">
                                    <span class="label"><i class="fas fa-clock"></i> Time:</span>
                                    <span class="value">${match.time}</span>
                                </div>
                            </div>
                        </div>

                        <!-- Team Stats Comparison -->
                        <div class="team-stats-section">
                            <h4><i class="fas fa-chart-bar"></i> Team Statistics</h4>
                            <div class="stats-comparison">
                                <div class="team-stats home-stats">
                                    <div class="stat-item">
                                        <span class="stat-label">Points:</span>
                                        <span class="stat-value">${homeTeamStats.points}</span>
                                    </div>
                                    <div class="stat-item">
                                        <span class="stat-label">Record:</span>
                                        <span class="stat-value">${homeTeamStats.won}W ${homeTeamStats.drawn}D ${homeTeamStats.lost}L</span>
                                    </div>
                                    <div class="stat-item">
                                        <span class="stat-label">Goals:</span>
                                        <span class="stat-value">${homeTeamStats.goalsFor}-${homeTeamStats.goalsAgainst}</span>
                                    </div>
                                    <div class="stat-item">
                                        <span class="stat-label">GD:</span>
                                        <span class="stat-value ${homeTeamStats.goalDifference >= 0 ? 'positive' : 'negative'}">${homeTeamStats.goalDifference >= 0 ? '+' : ''}${homeTeamStats.goalDifference}</span>
                                    </div>
                                </div>
                                
                                <div class="stats-divider"></div>
                                
                                <div class="team-stats away-stats">
                                    <div class="stat-item">
                                        <span class="stat-label">Points:</span>
                                        <span class="stat-value">${awayTeamStats.points}</span>
                                    </div>
                                    <div class="stat-item">
                                        <span class="stat-label">Record:</span>
                                        <span class="stat-value">${awayTeamStats.won}W ${awayTeamStats.drawn}D ${awayTeamStats.lost}L</span>
                                    </div>
                                    <div class="stat-item">
                                        <span class="stat-label">Goals:</span>
                                        <span class="stat-value">${awayTeamStats.goalsFor}-${awayTeamStats.goalsAgainst}</span>
                                    </div>
                                    <div class="stat-item">
                                        <span class="stat-label">GD:</span>
                                        <span class="stat-value ${awayTeamStats.goalDifference >= 0 ? 'positive' : 'negative'}">${awayTeamStats.goalDifference >= 0 ? '+' : ''}${awayTeamStats.goalDifference}</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Head to Head Section -->
                        <div class="head-to-head-section">
                            <h4><i class="fas fa-history"></i> Head to Head</h4>
                            ${getHeadToHeadMatches(match.homeTeam, match.awayTeam)}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;

    mainContent.innerHTML = content;
    currentPage = 'knockout-detail';
}

// Head to Head function
function getHeadToHeadMatches(team1Id, team2Id) {
    try {
        // Check if required variables exist
        if (!seasonsFixtures || !seasonsKnockouts || !teamsData) {
            console.warn('Required variables not available for head-to-head analysis');
            return `
                <div class="no-head-to-head">
                    <i class="fas fa-info-circle"></i>
                    <p>Head-to-head data not available</p>
                </div>
            `;
        }

        const headToHeadMatches = [];
        
        // Search through all seasons' fixtures
        Object.entries(seasonsFixtures).forEach(([seasonId, seasonFixtures]) => {
            if (!Array.isArray(seasonFixtures)) return;
            
            const seasonMatches = seasonFixtures.filter(fixture => 
            fixture.status === 'completed' && 
            ((fixture.homeTeam === team1Id && fixture.awayTeam === team2Id) ||
             (fixture.homeTeam === team2Id && fixture.awayTeam === team1Id))
        );
        
        seasonMatches.forEach(match => {
            headToHeadMatches.push({
                ...match,
                seasonId: seasonId,
                seasonName: seasonsData[seasonId]?.name || seasonId
            });
        });
    });
    
        // Search through all seasons' knockouts
        Object.entries(seasonsKnockouts).forEach(([seasonId, seasonKnockouts]) => {
            if (!seasonKnockouts) return;
            
            const allKnockoutMatches = [
            ...seasonKnockouts.roundOf16,
            ...seasonKnockouts.quarterFinals,
            ...seasonKnockouts.semiFinals,
            ...seasonKnockouts.final,
            ...seasonKnockouts.thirdPlacePlayoff
        ];
        
        const knockoutMatches = allKnockoutMatches.filter(match => 
            match.status === 'completed' && 
            ((match.homeTeam === team1Id && match.awayTeam === team2Id) ||
             (match.homeTeam === team2Id && match.awayTeam === team1Id))
        );
        
        knockoutMatches.forEach(match => {
            headToHeadMatches.push({
                ...match,
                seasonId: seasonId,
                seasonName: seasonsData[seasonId]?.name || seasonId,
                isKnockout: true
            });
        });
    });
    
    // Sort by date (most recent first)
    headToHeadMatches.sort((a, b) => new Date(b.date) - new Date(a.date));
    
    if (headToHeadMatches.length === 0) {
        return `
            <div class="no-head-to-head">
                <i class="fas fa-info-circle"></i>
                <p>No previous meetings between these teams</p>
            </div>
        `;
    }
    
    // Calculate head-to-head statistics
    let team1Wins = 0;
    let team2Wins = 0;
    let draws = 0;
    let team1Goals = 0;
    let team2Goals = 0;
    
    headToHeadMatches.forEach(match => {
        if (match.score) {
            const isTeam1Home = match.homeTeam === team1Id;
            const team1Score = isTeam1Home ? match.score.home : match.score.away;
            const team2Score = isTeam1Home ? match.score.away : match.score.home;
            
            team1Goals += team1Score;
            team2Goals += team2Score;
            
            if (team1Score > team2Score) {
                team1Wins++;
            } else if (team2Score > team1Score) {
                team2Wins++;
            } else {
                draws++;
            }
        }
    });
    
    const team1Name = teamsData[team1Id]?.name || 'Team 1';
    const team2Name = teamsData[team2Id]?.name || 'Team 2';
    
    return `
        <div class="head-to-head-stats">
            <div class="h2h-summary">
                <div class="h2h-stat">
                    <span class="h2h-label">${team1Name} Wins:</span>
                    <span class="h2h-value team1-color">${team1Wins}</span>
                </div>
                <div class="h2h-stat">
                    <span class="h2h-label">Draws:</span>
                    <span class="h2h-value">${draws}</span>
                </div>
                <div class="h2h-stat">
                    <span class="h2h-label">${team2Name} Wins:</span>
                    <span class="h2h-value team2-color">${team2Wins}</span>
                </div>
                <div class="h2h-stat">
                    <span class="h2h-label">Total Goals:</span>
                    <span class="h2h-value">${team1Goals}-${team2Goals}</span>
                </div>
            </div>
        </div>
        
        <div class="h2h-matches">
            <h5><i class="fas fa-list"></i> Previous Meetings (${headToHeadMatches.length})</h5>
            <div class="h2h-matches-list">
                ${headToHeadMatches.map(match => {
                    const isTeam1Home = match.homeTeam === team1Id;
                    const team1Score = isTeam1Home ? match.score.home : match.score.away;
                    const team2Score = isTeam1Home ? match.score.away : match.score.home;
                    const homeTeamName = isTeam1Home ? team1Name : team2Name;
                    const awayTeamName = isTeam1Home ? team2Name : team1Name;
                    
                    let resultClass = 'draw';
                    if (team1Score > team2Score) {
                        resultClass = 'team1-win';
                    } else if (team2Score > team1Score) {
                        resultClass = 'team2-win';
                    }
                    
                    return `
                        <div class="h2h-match ${resultClass}">
                            <div class="h2h-match-info">
                                <div class="h2h-teams">
                                    <span class="h2h-home">${homeTeamName}</span>
                                    <span class="h2h-score">${team1Score} - ${team2Score}</span>
                                    <span class="h2h-away">${awayTeamName}</span>
                                </div>
                                <div class="h2h-match-details">
                                    <span class="h2h-season">${match.seasonName}</span>
                                    <span class="h2h-date">${match.date}</span>
                                    ${match.isKnockout ? `<span class="h2h-type knockout">Knockout</span>` : `<span class="h2h-type group">Group Stage</span>`}
                                    ${match.round ? `<span class="h2h-round">${match.round}</span>` : ''}
                                    ${match.penalties ? `<span class="h2h-penalties">(${match.penalties.home}-${match.penalties.away} pen)</span>` : ''}
                                </div>
                            </div>
                        </div>
                    `;
                }).join('')}
            </div>
        </div>
    `;
    } catch (error) {
        console.error('Error in getHeadToHeadMatches:', error);
        return `
            <div class="no-head-to-head">
                <i class="fas fa-exclamation-triangle"></i>
                <p>Error loading head-to-head data</p>
            </div>
        `;
    }
}

// Certificate viewing functions
function viewCertificate(certificateType, title) {
    const modal = document.getElementById('certificateModal');
    const modalTitle = document.getElementById('modalTitle');
    const certificatePreview = document.getElementById('certificatePreview');
    const modalDownload = document.getElementById('modalDownload');
    const fallbackMessage = document.getElementById('fallbackMessage');
    const certificateLoading = document.getElementById('certificateLoading');
    
    // Set modal title
    modalTitle.textContent = title;
    
    // Reset all states
    if (fallbackMessage) {
        fallbackMessage.style.display = 'none';
    }
    if (certificateLoading) {
        certificateLoading.style.display = 'flex';
        console.log('Loading spinner shown');
    }
    certificatePreview.style.display = 'none';
    
    // Set certificate image source - try both .jpeg and .jpg extensions
    const imagePath = `images/certificates/${certificateType}.jpeg`;
    console.log('Attempting to load image:', imagePath);
    testImagePath(imagePath); // Test if image exists
    certificatePreview.src = imagePath;
    
    // If .jpeg fails, try .jpg
    certificatePreview.onerror = function() {
        console.log('Trying .jpg extension...');
        certificatePreview.src = `images/certificates/${certificateType}.jpg`;
        certificatePreview.onerror = function() {
            console.log('Both .jpeg and .jpg failed, showing fallback');
            hideLoadingAndShowFallback();
        };
    };
    
    // Set download link - extract position from certificateType (e.g., "season1-first" -> "first")
    const position = certificateType.split('-').pop(); // Get the last part after the dash
    const downloadNames = {
        'first': 'Championship_Winner_Certificate.jpeg',
        'second': 'Runner_up_Certificate.jpeg',
        'third': 'Third_Place_Certificate.jpeg'
    };
    
    modalDownload.href = imagePath;
    modalDownload.download = downloadNames[position] || 'Certificate.jpeg';
    
    // Show modal
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
    
    // Add load event listener to handle successful loading
    certificatePreview.onload = function() {
        console.log('Certificate image loaded successfully');
        // Add a small delay to ensure loading spinner is visible
        setTimeout(() => {
            hideLoadingAndShowImage();
        }, 500); // Show loading for at least 500ms
    };
}

function closeCertificateModal() {
    const modal = document.getElementById('certificateModal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto'; // Restore scrolling
}

// Close modal when clicking outside of it
window.onclick = function(event) {
    const modal = document.getElementById('certificateModal');
    if (event.target === modal) {
        closeCertificateModal();
    }
}

// Close modal with Escape key
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeCertificateModal();
    }
});

// Helper functions for managing loading states
function hideLoadingAndShowImage() {
    const loading = document.getElementById('certificateLoading');
    const image = document.getElementById('certificatePreview');
    
    console.log('Hiding loading spinner and showing image');
    if (loading && image) {
        loading.style.display = 'none';
        image.style.display = 'block';
        console.log('Loading spinner hidden, image shown');
    } else {
        console.log('Loading or image element not found:', { loading: !!loading, image: !!image });
    }
}

function hideLoadingAndShowFallback() {
    const loading = document.getElementById('certificateLoading');
    const fallback = document.getElementById('fallbackMessage');
    
    if (loading && fallback) {
        loading.style.display = 'none';
        fallback.style.display = 'block';
    }
}

// Fallback functions for image viewing
function showFallbackMessage() {
    hideLoadingAndShowFallback();
}

function downloadCertificate() {
    const modalDownload = document.getElementById('modalDownload');
    if (modalDownload) {
        modalDownload.click();
    }
}

// Test function to check if images exist
function testImagePath(path) {
    const img = new Image();
    img.onload = function() {
        console.log('Image exists:', path);
    };
    img.onerror = function() {
        console.log('Image does not exist:', path);
    };
    img.src = path;
}



