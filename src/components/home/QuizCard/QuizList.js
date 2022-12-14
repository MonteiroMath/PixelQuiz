import React from "react";
import { FlatList } from "react-native";

import QuizCard from "./QuizCard";
import styles from "./styles";

function QuizList({ quizzes, displayAnswered, handlePress }) {
  function renderItem({ item }) {
    return (
      <QuizCard
        quiz={item}
        displayAnswered={displayAnswered}
        handlePress={handlePress}
      />
    );
  }

  return quizzes ? (
    <FlatList
      style={styles.outsideList}
      data={quizzes}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      showsVerticalScrollIndicator={false}
    />
  ) : null;
}

export default QuizList;
