import { StyleSheet, Text, View, TouchableOpacity, Dimensions } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter, Stack } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";

const { width } = Dimensions.get("window");

export default function Success() {
  const router = useRouter();

  return (
    <View style={styles.root}>
      <Stack.Screen options={{ headerShown: false }} />
      <StatusBar style="light" />

      {/* Background */}
      <LinearGradient
        colors={["#06040F", "#0D0B1F", "#110C2E"]}
        style={StyleSheet.absoluteFillObject}
      />

      {/* Glow blobs */}
      <View style={styles.glowTop} />
      <View style={styles.glowBottom} />

      <View style={styles.content}>

        {/* ─── SUCCESS CARD ─── */}
        <View style={styles.card}>

          {/* Icon circle */}
          <View style={styles.iconRing}>
            <LinearGradient
              colors={["#A78BFA", "#7C3AED"]}
              style={styles.iconGradient}
            >
              <Ionicons name="checkmark" size={40} color="#fff" />
            </LinearGradient>
          </View>

          {/* Text */}
          <Text style={styles.eyebrow}>SUCCESS</Text>
          <Text style={styles.heading}>Account Created!</Text>
          <Text style={styles.sub}>
            Welcome aboard. Your account has been successfully created.
            You are all set to get started.
          </Text>

          {/* Divider */}
          <LinearGradient
            colors={["transparent", "#7C3AED", "transparent"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={styles.divider}
          />

          {/* Back to Home button */}
          <TouchableOpacity
            style={styles.btnWrap}
            activeOpacity={0.85}
            onPress={() => router.replace("/")}
          >
            <LinearGradient
              colors={["#A78BFA", "#7C3AED"]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={styles.btnGradient}
            >
              <Ionicons name="home-outline" size={18} color="#fff" />
              <Text style={styles.btnText}>Back to Home</Text>
            </LinearGradient>
          </TouchableOpacity>

        </View>

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
    top: "20%",
    left: -60,
    width: width * 1.3,
    height: 300,
    borderRadius: 999,
    backgroundColor: "rgba(124, 58, 237, 0.13)",
  },
  glowBottom: {
    position: "absolute",
    bottom: 60,
    right: -80,
    width: 240,
    height: 240,
    borderRadius: 999,
    backgroundColor: "rgba(99, 102, 241, 0.09)",
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 28,
  },

  // ─── CARD
  card: {
    width: "100%",
    backgroundColor: "rgba(18, 14, 36, 0.88)",
    borderRadius: 24,
    borderWidth: 1,
    borderColor: "rgba(167, 139, 250, 0.18)",
    padding: 32,
    alignItems: "center",
    shadowColor: "#7C3AED",
    shadowOffset: { width: 0, height: 20 },
    shadowOpacity: 0.3,
    shadowRadius: 40,
    elevation: 20,
  },

  // ─── ICON
  iconRing: {
    width: 88,
    height: 88,
    borderRadius: 44,
    borderWidth: 2,
    borderColor: "rgba(167, 139, 250, 0.35)",
    padding: 4,
    marginBottom: 28,
    shadowColor: "#7C3AED",
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.6,
    shadowRadius: 20,
    elevation: 14,
  },
  iconGradient: {
    flex: 1,
    borderRadius: 40,
    justifyContent: "center",
    alignItems: "center",
  },

  // ─── TEXT
  eyebrow: {
    fontSize: 11,
    fontWeight: "700",
    color: "#7C3AED",
    letterSpacing: 4,
    marginBottom: 10,
  },
  heading: {
    fontSize: 34,
    fontWeight: "800",
    color: "#F5F3FF",
    letterSpacing: -0.5,
    marginBottom: 14,
    textAlign: "center",
  },
  sub: {
    fontSize: 14,
    color: "#7B6DAA",
    lineHeight: 22,
    textAlign: "center",
    marginBottom: 28,
    paddingHorizontal: 8,
  },

  // ─── DIVIDER
  divider: {
    width: "100%",
    height: 1,
    marginBottom: 28,
    opacity: 0.6,
  },

  // ─── BUTTON
  btnWrap: {
    width: "100%",
    borderRadius: 14,
    overflow: "hidden",
    shadowColor: "#7C3AED",
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.5,
    shadowRadius: 20,
    elevation: 12,
  },
  btnGradient: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 17,
    gap: 10,
  },
  btnText: {
    fontSize: 16,
    fontWeight: "700",
    color: "#FFFFFF",
    letterSpacing: 0.3,
  },
});
