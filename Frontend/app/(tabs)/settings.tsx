import { View, Text, StyleSheet, ScrollView, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTranslation } from 'react-i18next';
import { Ionicons } from '@expo/vector-icons';
import { changeLanguage } from '../../lib/i18n';

export default function SettingsScreen() {
  const { t, i18n } = useTranslation();

  const handleLanguageChange = async (language: string) => {
    await changeLanguage(language);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>{t('settings.title')}</Text>
      </View>
      <ScrollView style={styles.content}>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>{t('settings.language')}</Text>
          <View style={styles.languageOptions}>
            <Pressable
              style={[styles.languageOption, i18n.language === 'en' && styles.selectedLanguage]}
              onPress={() => handleLanguageChange('en')}
            >
              <Text style={[styles.languageText, i18n.language === 'en' && styles.selectedLanguageText]}>
                {t('settings.languages.en')}
              </Text>
              {i18n.language === 'en' && (
                <Ionicons name="checkmark" size={24} color="#3b82f6" />
              )}
            </Pressable>
            <Pressable
              style={[styles.languageOption, i18n.language === 'fr' && styles.selectedLanguage]}
              onPress={() => handleLanguageChange('fr')}
            >
              <Text style={[styles.languageText, i18n.language === 'fr' && styles.selectedLanguageText]}>
                {t('settings.languages.fr')}
              </Text>
              {i18n.language === 'fr' && (
                <Ionicons name="checkmark" size={24} color="#3b82f6" />
              )}
            </Pressable>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8fafc',
  },
  header: {
    paddingHorizontal: 20,
    paddingVertical: 16,
  },
  title: {
    fontSize: 32,
    fontFamily: 'Inter-Bold',
    color: '#0f172a',
  },
  content: {
    flex: 1,
    paddingHorizontal: 20,
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontFamily: 'Inter-SemiBold',
    color: '#0f172a',
    marginBottom: 12,
  },
  languageOptions: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    overflow: 'hidden',
  },
  languageOption: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#e2e8f0',
  },
  selectedLanguage: {
    backgroundColor: '#f1f5f9',
  },
  languageText: {
    fontSize: 16,
    fontFamily: 'Inter-Medium',
    color: '#0f172a',
  },
  selectedLanguageText: {
    color: '#3b82f6',
  },
});