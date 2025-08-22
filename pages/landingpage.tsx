// src/screens/LandingPage.tsx
import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Image,
  ScrollView,
  Modal,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { styles } from "../styles/landingpage.styles";

// ✅ Define route params
type RootStackParamList = {
  ProfessionalLogin: undefined;
  ProfessionalSignup: undefined;
  ClinicLogin: undefined;
  RegisterClinic: undefined;
  SearchJobs: { query: string };
  SearchProfessionals: { query: string };
};

// ✅ Strongly type navigation
type NavigationProp = NativeStackNavigationProp<RootStackParamList>;
const useAppNavigation = () => useNavigation<NavigationProp>();

// --- Reusable User Icon ---
const UserIcon: React.FC = () => (
  <Image
    source={require("/assets/clinicMenuIcon.png")}
    style={styles.userIcon}
    resizeMode="contain"
  />
);

// --- Feature Tabs ---
type FeatureTabsProps = {
  tabs: string[];
  selectedTab: string | null;
  onTabClick: (tab: string | null) => void;
};

const FeatureTabs: React.FC<FeatureTabsProps> = ({
  tabs,
  selectedTab,
  onTabClick,
}) => (
  <View style={styles.featureTabsContainer}>
    {tabs.map((tab) => (
      <TouchableOpacity
        key={tab}
        style={[
          styles.pillButton,
          selectedTab === tab && styles.pillButtonSelected,
        ]}
        onPress={() => onTabClick(selectedTab === tab ? null : tab)}
      >
        <Text style={styles.pillButtonText}>{tab}</Text>
      </TouchableOpacity>
    ))}
  </View>
);

// --- Main LandingPage ---
export default function LandingPage() {
  const navigation = useAppNavigation();

  const [professionalSearchQuery, setProfessionalSearchQuery] = useState("");
  const [officeSearchQuery, setOfficeSearchQuery] = useState("");
  const [selectedProfessionalTab, setSelectedProfessionalTab] = useState<
    string | null
  >(null);
  const [selectedClinicTab, setSelectedClinicTab] = useState<string | null>(
    null
  );
  const [showLocationPrompt, setShowLocationPrompt] = useState(false);

  useEffect(() => {
    setShowLocationPrompt(true);
  }, []);

  const handleAllowLocation = () => {
    setShowLocationPrompt(false);
    // TODO: implement expo-location here
  };

  return (
    <ScrollView contentContainerStyle={styles.wrapper}>
      {/* Location Prompt */}
      <Modal visible={showLocationPrompt} transparent animationType="fade">
        <View style={styles.locationOverlay}>
          <View style={styles.locationModal}>
            <Text style={styles.modalTitle}>Allow Location Access</Text>
            <Text style={styles.modalText}>
              We use your location to show nearby clinics or professionals.
            </Text>
            <View style={styles.modalActions}>
              <TouchableOpacity
                style={styles.btnAllow}
                onPress={handleAllowLocation}
              >
                <Text style={styles.btnText}>Allow</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.btnDeny}
                onPress={() => setShowLocationPrompt(false)}
              >
                <Text style={styles.btnText}>No Thanks</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>

      {/* Split Sections */}
      <View style={styles.splitContainer}>
        {/* --- Left: Professionals --- */}
        <View style={styles.section}>
          <Image
            source={require("../assets/ProfessionalBG.png")}
            style={styles.background}
          />

          <Image
            source={require("../assets/DentipalLogo.png")}
            style={styles.logo}
          />

          <View style={styles.headerLinks}>
            <TouchableOpacity
              style={styles.navLink}
              onPress={() => navigation.navigate("ProfessionalLogin")}
            >
              <UserIcon />
              <Text style={styles.navText}>Professional Login</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate("ProfessionalSignup")}
            >
              <Text style={[styles.navText, styles.registerLink]}>
                Register
              </Text>
            </TouchableOpacity>
          </View>

          <View style={styles.contentArea}>
            <Text style={styles.mainTitle}>
              I'm a dental professional {"\n"} looking to find shifts.
            </Text>
            <FeatureTabs
              tabs={[
                "Registered Dental Hygienists",
                "Dental Assistants",
                "Associate Dentists",
                "Front Desk",
              ]}
              selectedTab={selectedProfessionalTab}
              onTabClick={setSelectedProfessionalTab}
            />
          </View>

          <View style={styles.searchSection}>
            <TextInput
              placeholder="Search by role, location, or date.."
              placeholderTextColor="#ccc"
              value={professionalSearchQuery}
              onChangeText={setProfessionalSearchQuery}
              style={styles.searchInput}
            />
            <TouchableOpacity
              style={styles.findButton}
              onPress={() =>
                navigation.navigate("SearchJobs", {
                  query: professionalSearchQuery || "all",
                })
              }
            >
              <Text style={styles.findButtonText}>Find Shifts</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* --- Right: Clinics --- */}
        <View style={styles.section}>
          <Image
            source={require("../assets/ClinicBG.png")}
            style={styles.background}
          />

          <View style={styles.headerLinks}>
            <TouchableOpacity
              style={styles.navLink}
              onPress={() => navigation.navigate("ClinicLogin")}
            >
              <UserIcon />
              <Text style={styles.navText}>Office Login</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate("RegisterClinic")}
            >
              <Text style={[styles.navText, styles.registerLink]}>
                Register
              </Text>
            </TouchableOpacity>
          </View>

          <View style={styles.contentArea}>
            <Text style={styles.mainTitle}>
              I'm a dental office {"\n"} looking to fill shifts.
            </Text>
            <FeatureTabs
              tabs={[
                "Talent Marketplace",
                "Consulting Services",
                "Permanent Services",
                "Cost Benefit Analysis",
              ]}
              selectedTab={selectedClinicTab}
              onTabClick={setSelectedClinicTab}
            />
          </View>

          <View style={styles.searchSection}>
            <TextInput
              placeholder="Search for dentists, hygienists..."
              placeholderTextColor="#ccc"
              value={officeSearchQuery}
              onChangeText={setOfficeSearchQuery}
              style={styles.searchInput}
            />
            <TouchableOpacity
              style={styles.findButton}
              onPress={() =>
                navigation.navigate("SearchProfessionals", {
                  query: officeSearchQuery || "all",
                })
              }
            >
              <Text style={styles.findButtonText}>Find Professionals</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
