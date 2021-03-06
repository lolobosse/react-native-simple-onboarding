import React from 'react';
import { View, Text } from 'react-native';

const Page = ({ width, height, children }) => (
  <View style={{ width, height }}>
    {children}
  </View>
);

const PageContent = ({ children }) => (
  <View style={styles.content}>
      {children}
  </View>
);

const PageData = ({ isLight, image, title, subtitle, ...rest }) => (
  <Page {...rest}>
    <PageContent>
      <View style={styles.image}>
        {image}
      </View>
      <View style={styles.otherElements}>
        <Text style={{ ...styles.title, ...(isLight ? styles.titleLight : {}) }}>
          {title}
        </Text>
        <Text style={{ ...styles.subtitle, ...(isLight ? styles.subtitleLight : {}) }}>
          {subtitle}
        </Text>
      </View>
    </PageContent>
  </Page>
);

const styles = {
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    flex: 0.5,
    paddingBottom: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  otherElements: {
    flex: 0.5,
  },
  title: {
    textAlign: 'center',
    fontSize: 24,
    color: '#fff',
    paddingBottom: 15,
  },
  titleLight: {
    color: '#000',
  },
  subtitle: {
    textAlign: 'center',
    fontSize: 16,
    paddingHorizontal: 10,
    color: 'rgba(255, 255, 255, 0.7)',
  },
  subtitleLight: {
    color: 'rgba(0, 0, 0, 0.7)',
  },
};

export default PageData;
