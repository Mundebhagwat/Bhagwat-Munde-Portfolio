import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { href } from "react-router-dom";

const ContactSection = () => {
  const [activeCard, setActiveCard] = useState(null);

  // Predefined styles for consistent use
  const styles = {
    container: {
      backgroundColor: "#111827", // Dark background
      minHeight: "100vh",
      color: "white",
      fontFamily: "'Inter', sans-serif",
    },
    heroSection: {
      position: "relative",
      overflow: "hidden",
      paddingTop: "80px",
      paddingBottom: "120px",
    },
    backgroundBlur1: {
      position: "absolute",
      top: "-160px",
      right: "-160px",
      width: "320px",
      height: "320px",
      borderRadius: "50%",
      background: "linear-gradient(to right, #3b82f6, #8b5cf6)",
      opacity: 0.2,
      filter: "blur(70px)",
    },
    backgroundBlur2: {
      position: "absolute",
      top: "240px",
      left: "-80px",
      width: "280px",
      height: "280px",
      borderRadius: "50%",
      background: "linear-gradient(to right, #06b6d4, #14b8a6)",
      opacity: 0.2,
      filter: "blur(70px)",
    },
    backgroundBlur3: {
      position: "absolute",
      bottom: "0",
      right: "25%",
      width: "250px",
      height: "250px",
      borderRadius: "50%",
      background: "linear-gradient(to right, #ec4899, #f43f5e)",
      opacity: 0.2,
      filter: "blur(70px)",
    },
    contentContainer: {
      maxWidth: "1200px",
      margin: "0 auto",
      padding: "0 16px",
      position: "relative",
      zIndex: 10,
    },
    title: {
      fontSize: "48px",
      fontWeight: "800",
      marginBottom: "24px",
      textAlign: "center",
      background: "linear-gradient(to right, #60a5fa, #a78bfa)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
    },
    titleBar: {
      height: "4px",
      width: "96px",
      background: "linear-gradient(to right, #3b82f6, #8b5cf6)",
      margin: "0 auto 32px auto",
    },
    subtitle: {
      fontSize: "18px",
      color: "#d1d5db",
      textAlign: "center",
      marginBottom: "48px",
      maxWidth: "700px",
      margin: "0 auto 48px auto",
    },
    cardsContainer: {
      display: "grid",
      gridTemplateColumns: "1fr",
      gap: "24px",
      marginTop: "-96px",
      position: "relative",
      zIndex: 20,
    },
    card: {
      position: "relative",
      borderRadius: "16px",
      padding: "32px",
      backgroundColor: "rgba(31, 41, 55, 0.8)",
      backdropFilter: "blur(10px)",
      border: "1px solid rgba(75, 85, 99, 0.3)",
      boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
      transition: "transform 0.3s ease, box-shadow 0.3s ease",
      overflow: "hidden",
    },
    cardHover: {
      transform: "translateY(-8px)",
      boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)",
      border: "1px solid rgba(139, 92, 246, 0.3)",
    },
    cardTopBar: {
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      height: "4px",
    },
    iconContainer: {
      width: "64px",
      height: "64px",
      borderRadius: "50%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      marginBottom: "16px",
      backgroundColor: "#374151",
      transition: "background 0.3s ease",
    },
    icon: {
      fontSize: "24px",
      color: "#d1d5db",
    },
    cardTitle: {
      fontSize: "20px",
      fontWeight: "700",
      marginBottom: "8px",
    },
    cardValue: {
      color: "#9ca3af",
    },
    cardHoverInfo: {
      position: "absolute",
      bottom: 0,
      left: 0,
      right: 0,
      padding: "16px",
      background: "linear-gradient(to top, rgba(17, 24, 39, 0.9), transparent)",
      transform: "translateY(100%)",
      opacity: 0,
      transition: "transform 0.3s ease, opacity 0.3s ease",
    },
    cardHoverInfoVisible: {
      transform: "translateY(0)",
      opacity: 1,
    },
    twoColumnGrid: {
      display: "grid",
      gridTemplateColumns: "1fr",
      gap: "48px",
      padding: "64px 0",
    },
    formSection: {
      backgroundColor: "rgba(31, 41, 55, 0.5)",
      backdropFilter: "blur(10px)",
      borderRadius: "16px",
      padding: "32px",
      border: "1px solid rgba(75, 85, 99, 0.3)",
      boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
    },
    sectionTitle: {
      fontSize: "24px",
      fontWeight: "700",
      marginBottom: "24px",
      display: "flex",
      alignItems: "center",
    },
    iconBadge: {
      background: "linear-gradient(to right, #3b82f6, #8b5cf6)",
      width: "32px",
      height: "32px",
      borderRadius: "8px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      marginRight: "12px",
    },
    formGrid: {
      display: "grid",
      gridTemplateColumns: "1fr",
      gap: "24px",
    },
    formGroup: {
      marginBottom: "24px",
    },
    label: {
      display: "block",
      marginBottom: "8px",
      fontSize: "14px",
      color: "#9ca3af",
    },
    input: {
      width: "100%",
      backgroundColor: "rgba(55, 65, 81, 0.5)",
      border: "1px solid #4b5563",
      borderRadius: "8px",
      padding: "12px 16px",
      color: "white",
      transition: "border-color 0.3s ease, box-shadow 0.3s ease",
      opacity: 0.7,
    },
    textarea: {
      width: "100%",
      backgroundColor: "rgba(55, 65, 81, 0.5)",
      border: "1px solid #4b5563",
      borderRadius: "8px",
      padding: "12px 16px",
      color: "white",
      minHeight: "150px",
      resize: "none",
      transition: "border-color 0.3s ease, box-shadow 0.3s ease",
      opacity: 0.7,
    },
    button: {
      width: "100%",
      background: "linear-gradient(to right, #2563eb, #7c3aed)",
      color: "white",
      fontWeight: "700",
      padding: "12px 0",
      borderRadius: "8px",
      border: "none",
      cursor: "not-allowed",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      transition: "transform 0.3s ease",
      opacity: 0.7,
    },
    socialLinksContainer: {
      display: "flex",
      flexWrap: "wrap",
      gap: "16px",
    },
    socialLink: {
      position: "relative",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      width: "56px",
      height: "56px",
      backgroundColor: "#374151",
      borderRadius: "50%",
      color: "#9ca3af",
      transition: "transform 0.3s ease, color 0.3s ease",
    },
    socialLinkHover: {
      transform: "scale(1.1)",
      color: "white",
    },
    faqItem: {
      borderBottom: "1px solid #374151",
      paddingBottom: "16px",
      marginBottom: "16px",
    },
    faqQuestion: {
      fontWeight: "500",
      fontSize: "18px",
      marginBottom: "8px",
      display: "flex",
      alignItems: "center",
    },
    faqIcon: {
      color: "#a78bfa",
      marginRight: "8px",
    },
    faqAnswer: {
      color: "#9ca3af",
    },
    mapPlaceholder: {
      position: "relative",
      height: "250px",
      borderRadius: "16px",
      overflow: "hidden",
      backgroundColor: "rgba(31, 41, 55, 0.5)",
      backdropFilter: "blur(10px)",
      border: "1px solid rgba(75, 85, 99, 0.3)",
      boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    footer: {
      borderTop: "1px solid #1f2937",
      padding: "32px 0",
      textAlign: "center",
    },
    footerText: {
      color: "#6b7280",
      fontSize: "14px",
    },
  };

  // For responsiveness
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      const cardsContainer = document.getElementById('cards-container');
      const twoColumnGrid = document.getElementById('two-column-grid');
      const formGrid = document.getElementById('form-grid');

      if (cardsContainer) {
        cardsContainer.style.gridTemplateColumns = width > 768 ? 'repeat(4, 1fr)' : width > 640 ? 'repeat(2, 1fr)' : '1fr';
      }

      if (twoColumnGrid) {
        twoColumnGrid.style.gridTemplateColumns = width > 1024 ? '1fr 1fr' : '1fr';
      }

      if (formGrid) {
        formGrid.style.gridTemplateColumns = width > 640 ? '1fr 1fr' : '1fr';
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const contactCards = [
    {
      id: "email",
      icon: "✉️",
      title: "Email",
      value: "bmunde031@gmail.com",
      color: "linear-gradient(to right, #3b82f6, #06b6d4)",
      hoverText: "Send me an email anytime!"
    },
    {
      id: "phone",
      icon: "📱",
      title: "Phone",
      value: "+91 **********",
      color: "linear-gradient(to right, #8b5cf6, #6366f1)",
      hoverText: "Please Contact me first on Linkedin"
    },
    {
      id: "location",
      icon: "📍",
      title: "Location",
      value: "Ambajogai, Maharashtra, pin- 431517",
      color: "linear-gradient(to right, #ef4444, #ec4899)",
      hoverText: "Open for remote collaboration"
    },
    {
      id: "hours",
      icon: "🕒",
      title: "Work Hours",
      value: "Mon - Fri: 9AM - 5PM",
      color: "linear-gradient(to right, #f59e0b, #f97316)",
      hoverText: "Flexible schedule"
    }
  ];

  const socialLinks = [
    { name: "GitHub", icon: "GitHub", symbol: "GH",  href: "https://github.com/Mundebhagwat"},
    { name: "LinkedIn", icon: "LinkedIn", symbol: "LI",  href: "https://www.linkedin.com/in/munde-bhagwat/"},
    { name: "Twitter", icon: "Twitter", symbol: "TW" },
    
  ];

  return (
    <div style={styles.container}>
      {/* Hero Section */}
      <div style={styles.heroSection}>
        {/* Background Elements */}
        <div style={styles.backgroundBlur1}></div>
        <div style={styles.backgroundBlur2}></div>
        <div style={styles.backgroundBlur3}></div>

        <div style={styles.contentContainer}>
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            style={{ textAlign: "center", maxWidth: "700px", margin: "0 auto" }}
          >
            <h1 style={styles.title}>Get In Touch</h1>
            <div style={styles.titleBar}></div>
            <p style={styles.subtitle}>
              Feel free to reach out if you want to collaborate, have questions, or just want to say hello!
            </p>
          </motion.div>
        </div>
      </div>

      {/* Contact Cards */}
      <div style={styles.contentContainer}>
        <motion.div
          id="cards-container"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={styles.cardsContainer}
        >
          {contactCards.map((card, index) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              style={{
                ...styles.card,
                ...(activeCard === card.id ? styles.cardHover : {})
              }}
              onMouseEnter={() => setActiveCard(card.id)}
              onMouseLeave={() => setActiveCard(null)}
            >
              <div style={{ ...styles.cardTopBar, background: card.color }}></div>
              <div
                style={{
                  ...styles.iconContainer,
                  ...(activeCard === card.id ? { background: card.color } : {})
                }}
              >
                <span style={{ fontSize: "28px" }}>{card.icon}</span>
              </div>
              <h3 style={styles.cardTitle}>{card.title}</h3>
              <p style={styles.cardValue}>{card.value}</p>

              <div
                style={{
                  ...styles.cardHoverInfo,
                  ...(activeCard === card.id ? styles.cardHoverInfoVisible : {})
                }}
              >
                <p style={{ fontSize: "14px", color: "#e5e7eb" }}>
                  {card.hoverText}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Main Content */}
      <div style={styles.contentContainer}>
        <div id="two-column-grid" style={styles.twoColumnGrid}>
          {/* Contact Form */}
          {/* <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            style={styles.formSection}
          >
            <h2 style={styles.sectionTitle}>
              <span style={styles.iconBadge}>
                <span style={{ color: "white", fontSize: "14px" }}>✉️</span>
              </span>
              Send a Message
            </h2>
            
            <div style={{ marginTop: "24px" }}>
              <div id="form-grid" style={{ ...styles.formGrid, marginBottom: "24px" }}>
                <div style={styles.formGroup}>
                  <label style={styles.label}>Your Name</label>
                  <input
                    type="text"
                    style={styles.input}
                    placeholder="John Doe"
                    disabled
                  />
                </div>
                <div style={styles.formGroup}>
                  <label style={styles.label}>Your Email</label>
                  <input
                    type="email"
                    style={styles.input}
                    placeholder="john@example.com"
                    disabled
                  />
                </div>
              </div>
              
              <div style={styles.formGroup}>
                <label style={styles.label}>Subject</label>
                <input
                  type="text"
                  style={styles.input}
                  placeholder="How can I help you?"
                  disabled
                />
              </div>
              
              <div style={styles.formGroup}>
                <label style={styles.label}>Message</label>
                <textarea
                  style={styles.textarea}
                  placeholder="Write your message here..."
                  disabled
                ></textarea>
              </div>
              
              <button
                disabled
                style={styles.button}
              >
                <span>Send Message</span>
                <span style={{ marginLeft: "8px" }}>→</span>
              </button>
              
              <p style={{ textAlign: "center", color: "#6b7280", fontSize: "14px", marginTop: "16px" }}>
                <span style={{ marginRight: "8px" }}>ℹ️</span>
                This is a demo form. No functionality is implemented.
              </p>
            </div>
          </motion.div> */}

          {/* Right Side Content */}
          <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              style={styles.formSection}
            >
              <h2 style={styles.sectionTitle}>
                <span style={styles.iconBadge}>
                  <span style={{ color: "white", fontSize: "14px" }}>🔗</span>
                </span>
                Connect With Me
              </h2>

              <div style={styles.socialLinksContainer}>
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href} 
                    target="_blank"  
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    style={styles.socialLink}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "scale(1.1)";
                      e.currentTarget.style.color = "white";
                      e.currentTarget.style.background = "linear-gradient(to right, #3b82f6, #8b5cf6)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "scale(1)";
                      e.currentTarget.style.color = "#9ca3af";
                      e.currentTarget.style.background = "#374151";
                    }}
                  >
                    <span style={{ fontWeight: "bold" }}>{social.symbol}</span>
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* FAQ */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              style={styles.formSection}
            >
              <h2 style={styles.sectionTitle}>
                <span style={styles.iconBadge}>
                  <span style={{ color: "white", fontSize: "14px" }}>❓</span>
                </span>
                FAQ
              </h2>

              <div>
                {["Do you work remotely?", "What services do you offer?", "How can we collaborate?"].map((question, index) => (
                  <div key={index} style={styles.faqItem}>
                    <h3 style={styles.faqQuestion}>
                      <span style={styles.faqIcon}>→</span>
                      {question}
                    </h3>
                    <p style={styles.faqAnswer}>
                      {index === 0 && "Yes, I work remotely with clients from all around the world."}
                      {index === 1 && "I specialize in web development, UI/UX design, and digital marketing solutions."}
                      {index === 2 && "Feel free to reach out via email or phone, and we can discuss your project needs."}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Map Placeholder */}
            {/* <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              style={styles.mapPlaceholder}
            >
              <div style={{ textAlign: "center" }}>
                <span style={{ fontSize: "36px", marginBottom: "16px", display: "block" }}>
                  🗺️
                </span>
                <p style={{ color: "#d1d5db", fontSize: "14px" }}>
                  Interactive map would be displayed here
                </p>
              </div>
            </motion.div> */}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer style={styles.footer}>
        <div style={styles.contentContainer}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            <p style={styles.footerText}>
              © {new Date().getFullYear()} Bhagwat Sadashiv Munde. All rights reserved.
            </p>
          </motion.div>
        </div>
      </footer>
    </div>
  );
};

export default ContactSection;