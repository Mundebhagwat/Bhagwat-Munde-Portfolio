import React, { useState, useEffect } from "react";
import { 
  Box, 
  Typography, 
  Grid, 
  Chip, 
  Container, 
  Paper, 
  Divider,
  Fade,
  useMediaQuery,
  useTheme
} from "@mui/material";
import { motion } from "framer-motion";
import CodeIcon from '@mui/icons-material/Code';
import StorageIcon from '@mui/icons-material/Storage';
import DesignServicesIcon from '@mui/icons-material/DesignServices';

// Skills categorized by type
const skills = {
  frontend: ["React", "JavaScript", "TypeScript", "CSS", "Material-UI", "HTML5", "Redux"],
  backend: ["Node.js", "Express", "MongoDB", "PostgreSQL", "GraphQL", "REST API"],
  tools: ["Git", "GitHub", "VS Code", "Docker"]
};

const AboutMe = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [visible, setVisible] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  const handleImageError = (e) => {
    console.error("Image failed to load:", e);
    // You could set a fallback image here if needed
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8 } }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6 } }
  };

  return (
    <Box
      sx={{
        py: { xs: 5, md: 8 },
        background: `linear-gradient(135deg, #f9f9f9 0%, #f0f0f0 100%)`,
        minHeight: "80vh",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Container maxWidth="lg">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Heading with decorative elements */}
          <Box 
            sx={{ 
              textAlign: "center", 
              mb: 6, 
              position: "relative",
            }}
          >
            <Typography 
              variant="overline" 
              sx={{ 
                color: "#00695c",
                letterSpacing: 4,
                fontWeight: 500,
                display: "block",
                mb: 1
              }}
            >
              WHO I AM
            </Typography>
            
            <Typography 
              variant="h3" 
              sx={{ 
                fontWeight: 700, 
                mb: 2,
                background: "linear-gradient(90deg, #004d40 0%, #00796b 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                textShadow: "0px 2px 4px rgba(0,0,0,0.05)"
              }}
            >
              About Me
            </Typography>
            
            <Box 
              sx={{ 
                width: "80px", 
                height: "4px", 
                background: "linear-gradient(90deg, #004d40 0%, #00796b 100%)", 
                margin: "0 auto",
                borderRadius: "2px"
              }} 
            />
          </Box>

          {/* Main content area */}
          <Paper 
            elevation={3} 
            sx={{ 
              borderRadius: 4, 
              overflow: "hidden",
              background: "white",
              boxShadow: "0 10px 30px rgba(0,0,0,0.08)"
            }}
          >
            <Grid container spacing={0}>
              {/* Profile Picture Section */}
              <Grid 
                item 
                xs={12} 
                md={5}
                sx={{
                  background: "linear-gradient(135deg, #004d40 0%, #00796b 100%)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  p: { xs: 4, md: 6 },
                  position: "relative"
                }}
              >
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.8 }}
                  style={{
                    position: "relative",
                    width: "100%",
                    maxWidth: "320px",
                    zIndex: 2
                  }}
                >
                  <Box
                    sx={{
                      borderRadius: "50%",
                      border: "4px solid rgba(255,255,255,0.85)",
                      overflow: "hidden",
                      boxShadow: "0 8px 25px rgba(0,0,0,0.2)",
                      position: "relative",
                      paddingTop: "100%", // 1:1 Aspect ratio
                    }}
                  >
                    <img
                      src="https://res.cloudinary.com/dbqjo8ncc/image/upload/v1743825160/mjo4gbgj3cyrlvzbz0di.png"
                      alt="Developer"
                      style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                      onLoad={handleImageLoad}
                      onError={handleImageError}
                    />
                    {!imageLoaded && (
                      <Box 
                        sx={{
                          position: "absolute",
                          top: 0,
                          left: 0,
                          width: "100%",
                          height: "100%",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          backgroundColor: "rgba(0,0,0,0.1)",
                          color: "#fff"
                        }}
                      >
                        <Typography variant="body2">Loading image...</Typography>
                      </Box>
                    )}
                  </Box>
                  
                  {/* Decorative elements */}
                  <Box
                    sx={{
                      position: "absolute",
                      width: "50%",
                      height: "50%",
                      borderRadius: "50%",
                      border: "2px dashed rgba(255,255,255,0.3)",
                      top: "-10%",
                      left: "-10%",
                      zIndex: -1
                    }}
                  />
                  <Box
                    sx={{
                      position: "absolute",
                      width: "30%",
                      height: "30%",
                      borderRadius: "50%",
                      background: "rgba(255,255,255,0.1)",
                      bottom: "5%",
                      right: "-5%",
                      zIndex: -1
                    }}
                  />
                </motion.div>
              </Grid>

              {/* Content Section */}
              <Grid item xs={12} md={7}>
                <Box sx={{ p: { xs: 3, sm: 4, md: 5 } }}>
                  <motion.div
                    variants={itemVariants}
                    initial="hidden"
                    animate="visible"
                  >
                    <Typography variant="h5" sx={{ fontWeight: 600, mb: 3, color: "#00695c" }}>
                      Passionate Full-Stack Developer
                    </Typography>
                    
                    <Typography variant="body1" paragraph sx={{ lineHeight: 1.8, color: "#333" }}>
                      Hi, I'm a passionate developer who loves creating intuitive and scalable web applications.
                      With a strong background in full-stack development, I blend technical expertise with creative
                      problem-solving to build engaging digital experiences.
                    </Typography>
                    
                    <Typography variant="body1" paragraph sx={{ lineHeight: 1.8, color: "#333" }}>
                      I'm constantly exploring new technologies and methodologies to enhance my skillset.
                      Currently, I'm focused on developing meaningful projects that combine beautiful design
                      with robust functionality using the latest web development tools and frameworks.
                    </Typography>

                    <Box sx={{ my: 4 }}>
                      <Divider sx={{ mb: 4 }} />
                      
                      {/* Skills section */}
                      <Typography variant="h6" sx={{ fontWeight: 600, mb: 3, color: "#00695c" }}>
                        Technical Expertise
                      </Typography>
                      
                      {/* Frontend Skills */}
                      <Box sx={{ mb: 3 }}>
                        <Box sx={{ display: "flex", alignItems: "center", mb: 1.5 }}>
                          <CodeIcon sx={{ mr: 1, color: "#00695c" }} />
                          <Typography variant="subtitle1" sx={{ fontWeight: 500 }}>
                            Frontend Development
                          </Typography>
                        </Box>
                        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                          {skills.frontend.map((skill, index) => (
                            <Fade in={visible} style={{ transitionDelay: `${index * 100}ms` }} key={index}>
                              <Chip
                                label={skill}
                                sx={{
                                  backgroundColor: "#e0f2f1",
                                  color: "#00695c",
                                  fontWeight: 500,
                                  '&:hover': {
                                    backgroundColor: "#b2dfdb",
                                    boxShadow: "0 2px 5px rgba(0,0,0,0.08)",
                                  },
                                  transition: "all 0.2s ease"
                                }}
                              />
                            </Fade>
                          ))}
                        </Box>
                      </Box>
                      
                      {/* Backend Skills */}
                      <Box sx={{ mb: 3 }}>
                        <Box sx={{ display: "flex", alignItems: "center", mb: 1.5 }}>
                          <StorageIcon sx={{ mr: 1, color: "#00695c" }} />
                          <Typography variant="subtitle1" sx={{ fontWeight: 500 }}>
                            Backend Development
                          </Typography>
                        </Box>
                        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                          {skills.backend.map((skill, index) => (
                            <Fade in={visible} style={{ transitionDelay: `${(index + skills.frontend.length) * 100}ms` }} key={index}>
                              <Chip
                                label={skill}
                                sx={{
                                  backgroundColor: "#e0f2f1",
                                  color: "#00695c",
                                  fontWeight: 500,
                                  '&:hover': {
                                    backgroundColor: "#b2dfdb",
                                    boxShadow: "0 2px 5px rgba(0,0,0,0.08)",
                                  },
                                  transition: "all 0.2s ease"
                                }}
                              />
                            </Fade>
                          ))}
                        </Box>
                      </Box>
                      
                      {/* Tools & Others */}
                      <Box>
                        <Box sx={{ display: "flex", alignItems: "center", mb: 1.5 }}>
                          <DesignServicesIcon sx={{ mr: 1, color: "#00695c" }} />
                          <Typography variant="subtitle1" sx={{ fontWeight: 500 }}>
                            Tools & Development Environment
                          </Typography>
                        </Box>
                        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                          {skills.tools.map((skill, index) => (
                            <Fade in={visible} style={{ transitionDelay: `${(index + skills.frontend.length + skills.backend.length) * 100}ms` }} key={index}>
                              <Chip
                                label={skill}
                                sx={{
                                  backgroundColor: "#e0f2f1",
                                  color: "#00695c",
                                  fontWeight: 500,
                                  '&:hover': {
                                    backgroundColor: "#b2dfdb",
                                    boxShadow: "0 2px 5px rgba(0,0,0,0.08)",
                                  },
                                  transition: "all 0.2s ease"
                                }}
                              />
                            </Fade>
                          ))}
                        </Box>
                      </Box>
                    </Box>
                  </motion.div>
                </Box>
              </Grid>
            </Grid>
          </Paper>
        </motion.div>
      </Container>
    </Box>
  );
};

export default AboutMe;