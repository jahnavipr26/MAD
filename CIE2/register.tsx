import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Dimensions,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from "react-native";
import { useRouter, Stack } from "expo-router";
import { Ionicons, AntDesign, FontAwesome } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { Checkbox } from "expo-checkbox";

const { width } = Dimensions.get("window");

export default function Register() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPass, setShowPass] = useState(false);
  const [agree, setAgree] = useState(false);
  const [errors, setErrors] = useState({ name: false, email: false, password: false });

  const handleCreateAccount = () => {
    const newErrors = {
      name: name.trim() === "",
      email: email.trim() === "",
      password: password.trim() === "",
    };
    setErrors(newErrors);
    // If any field is empty, do nothing
    if (newErrors.name || newErrors.email || newErrors.password) return;
    // All filled — go to success, replacing register in the stack
    router.replace("/success");
  };

  return (
    <View style={styles.root}>
      <Stack.Screen options={{ headerShown: false }} />

      {/* Background */}
      <LinearGradient
        colors={["#06040F", "#0D0B1F", "#110C2E"]}
        style={StyleSheet.absoluteFillObject}
      />
      <View style={styles.glowTop} />
      <View style={styles.glowBottom} />

      {/* Back button */}
      <TouchableOpacity style={styles.backBtn} onPress={() => router.back()}>
        <Ionicons name="chevron-back" size={20} color="#66646cff" />
      </TouchableOpacity>

      <ScrollView
        contentContainerStyle={styles.scroll}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
      >
        <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : undefined}>

          {/* ─── HEADER ─── */}
          <View style={styles.header}>
            <Text style={styles.eyebrow}>CREATE ACCOUNT</Text>
            <Text style={styles.title}>Join Argon</Text>
            <Text style={styles.subtitle}>
              Build something beautiful today.
            </Text>
          </View>

          {/* ─── CARD ─── */}
          <View style={styles.card}>

            {/* Social buttons */}
            <View style={styles.socialRow}>
              <TouchableOpacity style={styles.socialBtn} activeOpacity={0.75}>
                <FontAwesome name="github" size={18} color="#E9D5FF" />
                <Text style={styles.socialText}>GitHub</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.socialBtn} activeOpacity={0.75}>
                <AntDesign name="google" size={18} color="#E9D5FF" />
                <Text style={styles.socialText}>Google</Text>
              </TouchableOpacity>
            </View>

            {/* Separator */}
            <View style={styles.sep}>
              <View style={styles.sepLine} />
              <Text style={styles.sepText}>or sign up with credentials</Text>
              <View style={styles.sepLine} />
            </View>

            {/* ─── INPUTS ─── */}
            <View style={styles.fields}>

              <View style={styles.fieldBlock}>
                <Text style={styles.label}>Full Name</Text>
                <View style={[styles.inputWrap, errors.name && styles.inputError]}>
                  <Ionicons name="person-outline" size={16} color={errors.name ? "#F87171" : "#7C3AED"} style={styles.inputIcon} />
                  <TextInput
                    style={styles.input}
                    placeholder="Jane Doe"
                    placeholderTextColor="#3D3360"
                    value={name}
                    onChangeText={(t) => { setName(t); setErrors((e) => ({ ...e, name: false })); }}
                    selectionColor="#A78BFA"
                  />
                </View>
                {errors.name && <Text style={styles.errorText}>Name is required</Text>}
              </View>

              <View style={styles.fieldBlock}>
                <Text style={styles.label}>Email Address</Text>
                <View style={[styles.inputWrap, errors.email && styles.inputError]}>
                  <Ionicons name="mail-outline" size={16} color={errors.email ? "#F87171" : "#7C3AED"} style={styles.inputIcon} />
                  <TextInput
                    style={styles.input}
                    placeholder="jane@studio.io"
                    placeholderTextColor="#3D3360"
                    keyboardType="email-address"
                    autoCapitalize="none"
                    value={email}
                    onChangeText={(t) => { setEmail(t); setErrors((e) => ({ ...e, email: false })); }}
                    selectionColor="#A78BFA"
                  />
                </View>
                {errors.email && <Text style={styles.errorText}>Email is required</Text>}
              </View>

              <View style={styles.fieldBlock}>
                <Text style={styles.label}>Password</Text>
                <View style={[styles.inputWrap, errors.password && styles.inputError]}>
                  <Ionicons name="lock-closed-outline" size={16} color={errors.password ? "#F87171" : "#7C3AED"} style={styles.inputIcon} />
                  <TextInput
                    style={[styles.input, { flex: 1 }]}
                    placeholder="Min. 8 characters"
                    placeholderTextColor="#3D3360"
                    secureTextEntry={!showPass}
                    value={password}
                    onChangeText={(t) => { setPassword(t); setErrors((e) => ({ ...e, password: false })); }}
                    selectionColor="#A78BFA"
                  />
                  <TouchableOpacity onPress={() => setShowPass(!showPass)} style={styles.eyeBtn}>
                    <Ionicons name={showPass ? "eye-off-outline" : "eye-outline"} size={16} color="#6B5FA0" />
                  </TouchableOpacity>
                </View>
                {errors.password && <Text style={styles.errorText}>Password is required</Text>}
                {/* Strength bar */}
                <View style={styles.strengthRow}>
                  <View style={styles.strengthBars}>
                    <View style={[styles.bar, password.length > 0 && styles.barFill1]} />
                    <View style={[styles.bar, password.length > 4 && styles.barFill2]} />
                    <View style={[styles.bar, password.length > 8 && styles.barFill3]} />
                    <View style={[styles.bar, password.length > 12 && styles.barFill3]} />
                  </View>
                  <Text style={styles.strengthText}>
                    {password.length === 0
                      ? ""
                      : password.length <= 4
                      ? "Weak"
                      : password.length <= 8
                      ? "Fair"
                      : "Strong"}
                  </Text>
                </View>
              </View>

            </View>

            {/* Checkbox */}
            <View style={styles.checkRow}>
              <Checkbox
                value={agree}
                onValueChange={setAgree}
                color={agree ? "#7C3AED" : undefined}
                style={styles.checkbox}
              />
              <Text style={styles.checkLabel}>
                I agree to the{" "}
                <Text style={styles.checkLink}>Privacy Policy</Text>
              </Text>
            </View>

            {/* Submit */}
            <TouchableOpacity style={styles.submitWrap} activeOpacity={0.85} onPress={handleCreateAccount}>
              <LinearGradient
                colors={["#A78BFA", "#7C3AED"]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={styles.submitGradient}
              >
                <Text style={styles.submitText}>Create Account</Text>
              </LinearGradient>
            </TouchableOpacity>

            <Text style={styles.footerNote}>
              Already have an account?{" "}
              <Text style={styles.footerLink}>Sign in</Text>
            </Text>

          </View>

        </KeyboardAvoidingView>
      </ScrollView>
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
    top: -80,
    left: -40,
    width: width * 0.9,
    height: 300,
    borderRadius: 999,
    backgroundColor: "rgba(124, 58, 237, 0.15)",
    transform: [{ scaleX: 1.3 }],
  },
  glowBottom: {
    position: "absolute",
    bottom: 100,
    right: -80,
    width: 220,
    height: 220,
    borderRadius: 999,
    backgroundColor: "rgba(99, 102, 241, 0.1)",
  },
  backBtn: {
    position: "absolute",
    top: 56,
    left: 24,
    zIndex: 10,
    width: 36,
    height: 36,
    borderRadius: 10,
    backgroundColor: "rgba(167, 139, 250, 0.1)",
    borderWidth: 1,
    borderColor: "rgba(167, 139, 250, 0.2)",
    justifyContent: "center",
    alignItems: "center",
  },
  scroll: {
    paddingTop: 110,
    paddingHorizontal: 24,
    paddingBottom: 48,
  },

  // ─── HEADER
  header: {
    marginBottom: 28,
  },
  eyebrow: {
    fontSize: 11,
    fontWeight: "700",
    color: "#7C3AED",
    letterSpacing: 3,
    marginBottom: 10,
  },
  title: {
    fontSize: 36,
    fontWeight: "800",
    color: "#F5F3FF",
    letterSpacing: -0.5,
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 14,
    color: "#7B6DAA",
    lineHeight: 22,
  },

  // ─── CARD
  card: {
    backgroundColor: "rgba(18, 14, 36, 0.85)",
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "rgba(167, 139, 250, 0.15)",
    padding: 24,
    shadowColor: "#7C3AED",
    shadowOffset: { width: 0, height: 16 },
    shadowOpacity: 0.25,
    shadowRadius: 32,
    elevation: 16,
  },

  // ─── SOCIAL
  socialRow: {
    flexDirection: "row",
    gap: 12,
    marginBottom: 24,
  },
  socialBtn: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    paddingVertical: 12,
    borderRadius: 12,
    backgroundColor: "rgba(167, 139, 250, 0.07)",
    borderWidth: 1,
    borderColor: "rgba(167, 139, 250, 0.2)",
  },
  socialText: {
    fontSize: 14,
    fontWeight: "600",
    color: "#C4B5FD",
  },

  // ─── SEPARATOR
  sep: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 24,
    gap: 10,
  },
  sepLine: {
    flex: 1,
    height: 1,
    backgroundColor: "rgba(167, 139, 250, 0.12)",
  },
  sepText: {
    fontSize: 11,
    color: "#5B4E80",
    letterSpacing: 0.3,
  },

  // ─── FIELDS
  fields: {
    gap: 18,
    marginBottom: 20,
  },
  fieldBlock: {
    gap: 7,
  },
  label: {
    fontSize: 12,
    fontWeight: "600",
    color: "#9B8EC4",
    letterSpacing: 0.3,
  },
  inputWrap: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(255,255,255,0.03)",
    borderWidth: 1,
    borderColor: "rgba(167, 139, 250, 0.18)",
    borderRadius: 12,
    paddingHorizontal: 14,
    height: 50,
  },
  inputIcon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    fontSize: 15,
    color: "#EDE9FE",
    height: 50,
  },
  eyeBtn: {
    paddingLeft: 10,
  },

  // ─── STRENGTH
  strengthRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    marginTop: 8,
  },
  strengthBars: {
    flexDirection: "row",
    gap: 4,
  },
  bar: {
    width: 28,
    height: 3,
    borderRadius: 99,
    backgroundColor: "rgba(167, 139, 250, 0.12)",
  },
  barFill1: {
    backgroundColor: "#F87171",
  },
  barFill2: {
    backgroundColor: "#FBBF24",
  },
  barFill3: {
    backgroundColor: "#34D399",
  },
  strengthText: {
    fontSize: 11,
    color: "#7B6DAA",
    fontWeight: "600",
  },
  inputError: {
    borderColor: "rgba(248, 113, 113, 0.5)",
    backgroundColor: "rgba(248, 113, 113, 0.04)",
  },
  errorText: {
    fontSize: 11,
    color: "#F87171",
    marginTop: 4,
    marginLeft: 2,
  },

  // ─── CHECKBOX
  checkRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    marginBottom: 24,
  },
  checkbox: {
    width: 18,
    height: 18,
    borderRadius: 5,
  },
  checkLabel: {
    flex: 1,
    fontSize: 13,
    color: "#7B6DAA",
    lineHeight: 20,
  },
  checkLink: {
    color: "#A78BFA",
    fontWeight: "600",
  },

  // ─── SUBMIT
  submitWrap: {
    borderRadius: 14,
    overflow: "hidden",
    shadowColor: "#7C3AED",
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.5,
    shadowRadius: 20,
    elevation: 12,
    marginBottom: 20,
  },
  submitGradient: {
    paddingVertical: 17,
    alignItems: "center",
  },
  submitText: {
    fontSize: 16,
    fontWeight: "700",
    color: "#FFFFFF",
    letterSpacing: 0.3,
  },

  // ─── FOOTER
  footerNote: {
    textAlign: "center",
    fontSize: 13,
    color: "#5B4E80",
  },
  footerLink: {
    color: "#A78BFA",
    fontWeight: "600",
  },
});
