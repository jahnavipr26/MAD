import React from 'react';
import { 
  View, 
  Image, 
  StyleSheet, 
  Text, 
  ScrollView, 
  TouchableOpacity, 
  Alert 
} from 'react-native';

export default function App() {

  const handleResume = () => {
    Alert.alert("Resume", "Resume download coming soon!");
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>

      {/* Profile Image */}
    <Image
  source={{
    uri: "https://www.livemint.com/lm-img/img/2026/02/08/600x338/ANI-20260207425-0_1770532916043_1770532939281.jpg"
  }}
  style={styles.image}
/>


      {/* Name & Role */}
      <Text style={styles.name}>Koushal Mandal</Text>
      <Text style={styles.role}>Android / React Native Developer</Text>

      {/* About */}
      <Text style={styles.sectionTitle}>About Me</Text>
      <Text style={styles.text}>
        Passionate developer with interest in mobile application development,
        Java, React Native, and problem solving.
      </Text>

      {/* Skills */}
      <Text style={styles.sectionTitle}>Skills</Text>
      <Text style={styles.text}>• Java</Text>
      <Text style={styles.text}>• React Native</Text>
      <Text style={styles.text}>• Git & GitHub</Text>
      <Text style={styles.text}>• Android Development</Text>

      {/* Education */}
      <Text style={styles.sectionTitle}>Education</Text>
      <Text style={styles.text}>Bachelor of Computer Applications</Text>
      <Text style={styles.text}>Computer Science</Text>

      {/* Contact */}
      <Text style={styles.sectionTitle}>Contact</Text>
      <Text style={styles.text}>📧 koushalmandalbca24@rvu.edu.in</Text>
      <Text style={styles.text}>📱 +91 8969760918</Text>

      {/* Button */}
      <TouchableOpacity style={styles.button} onPress={handleResume}>
        <Text style={styles.buttonText}>Download Resume</Text>
      </TouchableOpacity>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 60,
    paddingBottom: 40,
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },

  image: {
    width: 150,
    height: 150,
    borderRadius: 75,
    resizeMode: 'cover',
    marginBottom: 15,
  },

  name: {
    fontSize: 26,
    fontWeight: 'bold',
  },

  role: {
    fontSize: 16,
    color: '#555',
    marginBottom: 20,
  },

  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 25,
    marginBottom: 10,
    alignSelf: 'flex-start',
    marginLeft: 30,
  },

  text: {
    fontSize: 16,
    marginBottom: 5,
    alignSelf: 'flex-start',
    marginLeft: 30,
    marginRight: 30,
    color: '#333',
  },

  button: {
    backgroundColor: '#007AFF',
    paddingVertical: 14,
    paddingHorizontal: 40,
    borderRadius: 10,
    marginTop: 30,
  },

  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
