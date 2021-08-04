import React from 'react';
import { Modal, View } from 'react-native';
import styles from './styles';
import DefaultButton from '../DefaultButton';
import Typography from '../Typography';

interface Props {
  isModalVisible: boolean;
  onModalAction: () => void;
  text: string;
  actionButtonText: string;
}

const DefaultModal = ({ actionButtonText, isModalVisible, onModalAction, text }: Props) => {
  return (
    <Modal visible={isModalVisible} transparent animationType="fade">
      <View style={styles.mainContainerModal}>
        <View style={styles.alertModal}>
          <View style={{ marginVertical: 20 }}>
            <Typography>{text}</Typography>
          </View>
          <DefaultButton
            onPress={onModalAction}
            text={actionButtonText}
            compStyle={{ height: 40 }}
          />
        </View>
      </View>
    </Modal>
  );
};

export default DefaultModal;
