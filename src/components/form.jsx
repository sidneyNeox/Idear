import React, { useState } from 'react';
import {
  Box,
  Flex,
  Text,
  Button,
  ChakraProvider,
  CSSReset,
  Link,
  extendTheme,
} from '@chakra-ui/react';

const questions = [
  { id: 1, text: 'Você tem um problema formulado?' },
  { id: 2, text: 'Você sabe qual é o objetivo do seu projeto?' },
  { id: 3, text: 'Você possui recursos financeiros para o projeto?' },
  // adicione perguntas no formato dessa extrutura.
];

const theme = extendTheme({
  fonts: {
    heading: 'Roboto, sans-serif',
    body: 'Open Sans, sans-serif',
  },
});

function Form() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState(Array(questions.length).fill(null));
  const [submitted, setSubmitted] = useState(false);

  const handleAnswer = (answer) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = { id: questions[currentQuestion].id, answer };
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      if (!newAnswers.includes(null)) {
        const responseWithIds = newAnswers.map(({ id, answer }) => `${id}: ${answer}`);
        alert('Formulário enviado com sucesso! Respostas: ' + JSON.stringify(responseWithIds));
        console.log('Respostas com IDs:', responseWithIds);
        setSubmitted(true);
        //Aqui que vamos colocar o envio das respostas para o servidor.

      } else {
        alert('Por favor, responda todas as perguntas antes de enviar o formulário.');
      }
    }
  };

  const handleClickStep = (index) => {
    if (index <= currentQuestion && !submitted) {
      setCurrentQuestion(index);
    }
  };

  return (
    <ChakraProvider theme={theme}>
      <CSSReset />
      <Box w="70%" mx="auto" marginTop={'40px'}>
        <Flex alignItems="center" justifyContent="space-between">
          {questions.map((question, index) => (
            <React.Fragment key={index}>
              <Link
                onClick={() => handleClickStep(index)}
                textDecoration={currentQuestion === index ? 'underline' : 'none'}
                cursor={
                  index <= currentQuestion || submitted ? 'pointer' : 'not-allowed'
                }
              >
                <Box
                  w="30px"
                  h="30px"
                  textAlign="center"
                  borderRadius="50%"
                  bgColor={
                    currentQuestion >= index
                      ? '#F2441D'
                      : answers[index]
                        ? '#F2441D'
                        : 'rgba(242, 68, 29, 0.5)'
                  }
                  borderWidth="4px"
                  borderColor="white"
                  color="white"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  fontSize="lg"
                  pointerEvents={submitted ? 'none' : 'auto'}
                  opacity={submitted ? 1 : 1}
                >
                </Box>
              </Link>
              {index !== questions.length - 1 && (
                <Box flex="1">
                  <Box
                    h="4px"
                    bgColor={
                      currentQuestion > index
                        ? '#F2441D'
                        : answers[index]
                          ? '#F2441D'
                          : 'rgba(242, 68, 29, 0.5)'
                    }
                  />
                </Box>
              )}
              {index === questions.length - 1 && (
                <Box flex="1">
                  <Box
                    h="4px"
                    bgColor={
                      currentQuestion === questions.length || submitted
                        ? '#F2441D'
                        : 'rgba(242, 68, 29, 0.5)'
                    }
                  />
                </Box>
              )}
            </React.Fragment>
          ))}
          <Box
            w="259px"
            h="63px"
            textAlign="center"
            borderRadius="15px"
            bgColor={
              currentQuestion === questions.length || submitted
                ? '#F2441D'
                : 'rgba(242, 68, 29, 0.5)'
            }
            borderWidth="4px"
            borderColor="white"
            color="white"
            display="flex"
            alignItems="center"
            justifyContent="center"
            fontSize="lg"
            pointerEvents={submitted ? 'none' : 'auto'}
            opacity={submitted ? 1 : 1}
          >
            Ideia
          </Box>
        </Flex>
        <Text
          as="h1"
          fontSize="32px"
          color="#F2441D"
          fontWeight="800"
          fontStyle="normal"
          textAlign="center"
          mt="4"
          mb="2"
        >
          Questionário
        </Text>
        {submitted ? (
          <Box textAlign="center" mt="4">
            <Text fontSize="32px" color="#F2441D" minHeight="10px">
              Formulário Enviado
            </Text>
          </Box>
        ) : (
          <Text
            mt="4"
            textAlign="center"
            fontSize="32px"
            color="#000"
            fontWeight="800"
            minHeight="100px"
          >
            {questions[currentQuestion].text}
          </Text>
        )}

        {currentQuestion < questions.length && !submitted ? (
          <Flex mt="4" justifyContent="center">
            <Button
              colorScheme="teal"
              onClick={() => handleAnswer('Sim')}
              w="206px"
              h="69px"
              mr="2"
            >
              Sim
            </Button>
            <Button
              colorScheme="red"
              onClick={() => handleAnswer('Não')}
              w="206px"
              h="69px"
              ml="2"
            >
              Não
            </Button>
          </Flex>
        ) : null}
      </Box>
    </ChakraProvider>
  );
}

export default Form;
