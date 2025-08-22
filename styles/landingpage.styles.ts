// src/screens/LandingPage.styles.ts
import { StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get("window");

export const styles = StyleSheet.create({
  wrapper: { flexGrow: 1, backgroundColor: "#000" },
  splitContainer: { flexDirection: width > 768 ? "row" : "column" },
  section: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
    padding: 20,
    position: "relative",
  },
  background: {
    ...StyleSheet.absoluteFillObject,
    width: "100%",
    height: "100%",
  },
  logo: {
    width: 120,
    height: 60,
    resizeMode: "contain",
    marginVertical: 10,
  },
  headerLinks: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  navLink: { flexDirection: "row", alignItems: "center" },
  navText: { color: "#fff", fontSize: 16, marginLeft: 5 },
  registerLink: { fontWeight: "bold" },
  userIcon: { width: 20, height: 20, tintColor: "#fff" },
  contentArea: {
    alignItems: "center",
    marginVertical: 20,
    maxWidth: 500,
  },
  mainTitle: {
    fontSize: 26,
    color: "#ffece7",
    fontWeight: "700",
    textAlign: "center",
    marginBottom: 20,
  },
  featureTabsContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: 10,
  },
  pillButton: {
    backgroundColor: "rgba(0,0,0,0.2)",
    borderWidth: 1,
    borderColor: "#fff",
    borderRadius: 20,
    paddingVertical: 8,
    paddingHorizontal: 16,
    margin: 4,
  },
  pillButtonSelected: {
    backgroundColor: "rgba(255,255,255,0.2)",
    borderColor: "#f8ccc1",
  },
  pillButtonText: { color: "#fff", fontSize: 14 },
  searchSection: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(122,128,128,0.5)",
    borderRadius: 8,
    padding: 8,
    marginTop: 30,
    width: "90%",
  },
  searchInput: {
    flex: 1,
    color: "#fff",
    paddingHorizontal: 10,
  },
  findButton: {
    backgroundColor: "#f8ccc1",
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 8,
    marginLeft: 10,
  },
  findButtonText: { color: "#000", fontWeight: "600" },
  // Location modal
  locationOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.6)",
    justifyContent: "center",
    alignItems: "center",
  },
  locationModal: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 12,
    width: "80%",
    alignItems: "center",
  },
  modalTitle: { fontSize: 18, fontWeight: "bold", marginBottom: 10 },
  modalText: { fontSize: 14, textAlign: "center", marginBottom: 15 },
  modalActions: { flexDirection: "row", gap: 10 },
  btnAllow: {
    backgroundColor: "#2FDB9A",
    padding: 10,
    borderRadius: 8,
    marginRight: 10,
  },
  btnDeny: {
    backgroundColor: "#6c757d",
    padding: 10,
    borderRadius: 8,
  },
  btnText: { color: "#fff", fontWeight: "600" },
});
