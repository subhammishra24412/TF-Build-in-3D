/**
 * JavaScript: BIOMECHANICAL / MINIMALIST MONOCHROMATIC TECH
 * Architecture: STRICTLY NO 3D. Pure 2D layout mechanics and micro-interactions.
 */

document.addEventListener('DOMContentLoaded', () => {
    
    /* ----------------------------------------------------------------------
       1. MOUSE-TRACKING INTERACTIVE GLOW
       ---------------------------------------------------------------------- */
    const cursorGlow = document.getElementById('cursor-glow');
    
    document.addEventListener('mousemove', (e) => {
        // Uses requestAnimationFrame for smoother rendering
        requestAnimationFrame(() => {
            cursorGlow.style.left = `${e.clientX}px`;
            cursorGlow.style.top = `${e.clientY}px`;
        });
    });

    /* ----------------------------------------------------------------------
       2. SCROLL PROGRESS BAR INDICATOR
       ---------------------------------------------------------------------- */
    const progressBar = document.getElementById('scroll-progress');
    
    window.addEventListener('scroll', () => {
        const scrollTop = window.scrollY;
        const docHeight = document.body.scrollHeight - window.innerHeight;
        const scrollPercent = (scrollTop / docHeight) * 100;
        progressBar.style.width = `${scrollPercent}%`;
    });

    /* ----------------------------------------------------------------------
       3. NEURAL SYNC TABS (Pure JS Logic)
       ---------------------------------------------------------------------- */
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabPanes = document.querySelectorAll('.tab-pane');

    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active state from all
            tabBtns.forEach(b => b.classList.remove('active'));
            tabPanes.forEach(p => p.classList.remove('active'));

            // Add active state to clicked button and target pane
            btn.classList.add('active');
            const targetId = btn.getAttribute('data-target');
            document.getElementById(targetId).classList.add('active');
        });
    });

    /* ----------------------------------------------------------------------
       4. BIOMETRIC READOUT BLUEPRINT (SVG Hotspots)
       ---------------------------------------------------------------------- */
    const hotspots = document.querySelectorAll('.hotspot');
    const readoutText = document.getElementById('svg-readout');
    const defaultText = "Hover over vector nodes for system diagnostics";

    hotspots.forEach(spot => {
        spot.addEventListener('mouseenter', (e) => {
            const info = e.target.getAttribute('data-info');
            readoutText.textContent = info;
            readoutText.style.fill = "#00ff00"; // Flash green on hover
        });

        spot.addEventListener('mouseleave', () => {
            readoutText.textContent = defaultText;
            readoutText.style.fill = "#ffffff"; // Return to white
        });
    });

    /* ----------------------------------------------------------------------
       5. FRICTIONLESS ROADMAP (Scroll Reveal 2D Mechanics)
       ---------------------------------------------------------------------- */
    const timelineItems = document.querySelectorAll('.timeline-item');

    // Intersection Observer to detect when timeline items enter viewport
    const revealOptions = {
        threshold: 0.5, // Trigger when 50% of the item is visible
        rootMargin: "0px 0px -50px 0px"
    };

    const revealOnScroll = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            
            // Add 'revealed' class for CSS to trigger opacity and transform
            entry.target.classList.add('revealed');
            observer.unobserve(entry.target); // Stop observing once revealed
        });
    }, revealOptions);

    timelineItems.forEach(item => {
        revealOnScroll.observe(item);
    });
});