import { StyleSheet, Text, View, TouchableOpacity, Dimensions } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter, Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

const { width } = Dimensions.get("window");

export default function Index() {
  const router = useRouter();

  return (
    <View style={styles.root}>
      <Stack.Screen options={{ headerShown: false }} />
      <StatusBar style="light" />

      {/* Deep space base gradient */}
      <LinearGradient
        colors={["#06040F", "#0D0B1F", "#110C2E"]}
        style={StyleSheet.absoluteFillObject}
      />

      {/* Radial glow overlay — top */}
      <View style={styles.glowTop} />

      {/* Radial glow overlay — bottom */}
      <View style={styles.glowBottom} />

      <View style={styles.content}>

        {/* ─── CENTER ZONE: Logo + Headline ─── */}
        <View style={styles.centerZone}>
          <View style={styles.logoSection}>
            <Text style={styles.logoWordmark}>ARGON</Text>
            <View style={styles.logoDivider} />
            <Text style={styles.logoLabel}>DESIGN SYSTEM</Text>
          </View>

          <View style={styles.heroSection}>
            <Text style={styles.heroTitle}>
              Built for the{"\n"}next generation.
            </Text>
            <Text style={styles.heroSub}>
              Fully crafted React Native components with a
              premium aesthetic, ready to ship.
            </Text>
          </View>
        </View>

        {/* ─── BOTTOM: CTA ─── */}
        <View style={styles.ctaSection}>
          <TouchableOpacity
            style={styles.ctaButton}
            activeOpacity={0.85}
            onPress={() => router.push("/register")}
          >
            <LinearGradient
              colors={["#A78BFA", "#7C3AED"]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={styles.ctaGradient}
            >
              <Text style={styles.ctaText}>Get Started</Text>
              <Text style={styles.ctaArrow}>→</Text>
            </LinearGradient>
          </TouchableOpacity>

          <Text style={styles.ctaHint}>No credit card required</Text>
        </View>

      </View>

      {/* Bottom decorative line */}
      <View style={styles.bottomBar}>
        <LinearGradient
          colors={["transparent", "#7C3AED", "transparent"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={styles.bottomLine}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#06040F",
  },
  glowTop: {
    position: "absolute",
    top: "30%",
    left: -40,
    width: width * 1.4,
    height: 320,
    borderRadius: 999,
    backgroundColor: "rgba(124, 58, 237, 0.14)",
    transform: [{ scaleX: 1 }],
  },
  glowBottom: {
    position: "absolute",
    bottom: 80,
    right: -60,
    width: 220,
    height: 220,
    borderRadius: 999,
    backgroundColor: "rgba(99, 102, 241, 0.1)",
  },
  content: {
    flex: 1,
    paddingHorizontal: 30,
    paddingTop: 60,
    paddingBottom: 48,
    justifyContent: "space-between",
  },
  centerZone: {
    flex: 1,
    justifyContent: "center",
    gap: 32,
  },

  // ─── LOGO WORDMARK
  logoSection: {
    alignItems: "flex-start",
    gap: 10,
  },
  logoWordmark: {
    fontSize: 80,
    fontWeight: "900",
    color: "#EDE9FE",
    letterSpacing: -3,
    lineHeight: 84,
    textShadowColor: "rgba(167, 139, 250, 0.5)",
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 30,
  },
  logoDivider: {
    width: 48,
    height: 3,
    borderRadius: 99,
    backgroundColor: "#7C3AED",
    marginTop: -4,
  },
  logoLabel: {
    fontSize: 11,
    fontWeight: "700",
    color: "#7C3AED",
    letterSpacing: 5,
  },

  // ─── HERO
  heroSection: {
    paddingBottom: 10,
  },
  heroTitle: {
    fontSize: 32,
    fontWeight: "700",
    color: "#C4B5FD",
    lineHeight: 42,
    letterSpacing: -0.5,
    marginBottom: 14,
  },
  heroSub: {
    fontSize: 14,
    color: "#6B5FA0",
    lineHeight: 22,
    maxWidth: "85%",
  },

  // ─── CTA
  ctaSection: {
    gap: 14,
  },
  ctaButton: {
    borderRadius: 14,
    overflow: "hidden",
    shadowColor: "#7C3AED",
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.55,
    shadowRadius: 24,
    elevation: 14,
  },
  ctaGradient: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 18,
    gap: 10,
  },
  ctaText: {
    fontSize: 17,
    fontWeight: "700",
    color: "#FFFFFF",
    letterSpacing: 0.3,
  },
  ctaArrow: {
    fontSize: 18,
    color: "#DDD6FE",
  },
  ctaHint: {
    textAlign: "center",
    fontSize: 12,
    color: "#6B5FA0",
    letterSpacing: 0.3,
  },

  // ─── BOTTOM BAR
  bottomBar: {
    paddingBottom: 14,
    paddingHorizontal: 40,
  },
  bottomLine: {
    height: 1,
    opacity: 0.5,
  },
});
