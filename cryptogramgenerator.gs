{\rtf1\ansi\ansicpg1252\cocoartf2639
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fnil\fcharset0 Menlo-Regular;}
{\colortbl;\red255\green255\blue255;\red77\green80\blue85;\red246\green247\blue249;\red46\green49\blue51;
\red20\green67\blue174;\red24\green25\blue27;\red162\green0\blue16;\red18\green115\blue126;\red186\green6\blue115;
}
{\*\expandedcolortbl;;\cssrgb\c37255\c38824\c40784;\cssrgb\c97255\c97647\c98039;\cssrgb\c23529\c25098\c26275;
\cssrgb\c9412\c35294\c73725;\cssrgb\c12549\c12941\c14118;\cssrgb\c70196\c7843\c7059;\cssrgb\c3529\c52157\c56863;\cssrgb\c78824\c15294\c52549;
}
\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\deftab720
\pard\pardeftab720\partightenfactor0

\f0\fs26 \cf2 \cb3 \expnd0\expndtw0\kerning0
\outl0\strokewidth0 \strokec2 //function generateRandomKey() \{\cf4 \cb1 \strokec4 \
\cf2 \cb3 \strokec2 //  var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';\cf4 \cb1 \strokec4 \
\cf2 \cb3 \strokec2 //  var shuffledCharacters = characters.split('').sort(function() \{ return \cf4 \cb1 \strokec4 \
\cf2 \cb3 \strokec2 //0.5 - Math.random() \}).join('');\cf4 \cb1 \strokec4 \
\cf2 \cb3 \strokec2 //  return shuffledCharacters;\cf4 \cb1 \strokec4 \
\cf2 \cb3 \strokec2 //\}\cf4 \cb1 \strokec4 \
\
\pard\pardeftab720\partightenfactor0
\cf5 \cb3 \strokec5 function\cf4 \strokec4  \cf6 \strokec6 generateRandomKey\cf4 \strokec4 () \{\cb1 \
\pard\pardeftab720\partightenfactor0
\cf4 \cb3   \cf5 \strokec5 var\cf4 \strokec4  \cf6 \strokec6 characters\cf4 \strokec4  = \cf7 \strokec7 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'\cf4 \strokec4 ;\cb1 \
\cb3   \cf5 \strokec5 var\cf4 \strokec4  \cf6 \strokec6 shuffledCharacters\cf4 \strokec4  = \cf6 \strokec6 characters\cf4 \strokec4 .\cf6 \strokec6 split\cf4 \strokec4 (\cf7 \strokec7 ''\cf4 \strokec4 ).\cf6 \strokec6 sort\cf4 \strokec4 (\cf5 \strokec5 function\cf4 \strokec4 () \{ \cf5 \strokec5 return\cf4 \strokec4  \cf8 \strokec8 0.5\cf4 \strokec4  - \cf9 \strokec9 Math\cf4 \strokec4 .\cf6 \strokec6 random\cf4 \strokec4 () \}).\cf6 \strokec6 join\cf4 \strokec4 (\cf7 \strokec7 ''\cf4 \strokec4 );\cb1 \
\cb3   \cb1 \
\cb3   \cf2 \strokec2 // Check for duplicates and shuffle again if duplicates are found\cf4 \cb1 \strokec4 \
\cb3   \cf5 \strokec5 while\cf4 \strokec4  (\cf6 \strokec6 hasDuplicates\cf4 \strokec4 (\cf6 \strokec6 shuffledCharacters\cf4 \strokec4 )) \{\cb1 \
\cb3     \cf6 \strokec6 shuffledCharacters\cf4 \strokec4  = \cf6 \strokec6 characters\cf4 \strokec4 .\cf6 \strokec6 split\cf4 \strokec4 (\cf7 \strokec7 ''\cf4 \strokec4 ).\cf6 \strokec6 sort\cf4 \strokec4 (\cf5 \strokec5 function\cf4 \strokec4 () \{ \cf5 \strokec5 return\cf4 \strokec4  \cf8 \strokec8 0.5\cf4 \strokec4  - \cf9 \strokec9 Math\cf4 \strokec4 .\cf6 \strokec6 random\cf4 \strokec4 () \}).\cf6 \strokec6 join\cf4 \strokec4 (\cf7 \strokec7 ''\cf4 \strokec4 );\cb1 \
\cb3   \}\cb1 \
\cb3   \cb1 \
\cb3   \cf5 \strokec5 return\cf4 \strokec4  \cf6 \strokec6 shuffledCharacters\cf4 \strokec4 ;\cb1 \
\cb3 \}\cb1 \
\
\pard\pardeftab720\partightenfactor0
\cf5 \cb3 \strokec5 function\cf4 \strokec4  \cf6 \strokec6 hasDuplicates\cf4 \strokec4 (\cf6 \strokec6 str\cf4 \strokec4 ) \{\cb1 \
\pard\pardeftab720\partightenfactor0
\cf4 \cb3   \cf5 \strokec5 var\cf4 \strokec4  \cf6 \strokec6 charMap\cf4 \strokec4  = \{\};\cb1 \
\cb3   \cf5 \strokec5 for\cf4 \strokec4  (\cf5 \strokec5 var\cf4 \strokec4  \cf6 \strokec6 i\cf4 \strokec4  = \cf8 \strokec8 0\cf4 \strokec4 ; \cf6 \strokec6 i\cf4 \strokec4  < \cf6 \strokec6 str\cf4 \strokec4 .\cf6 \strokec6 length\cf4 \strokec4 ; \cf6 \strokec6 i\cf4 \strokec4 ++) \{\cb1 \
\cb3     \cf5 \strokec5 var\cf4 \strokec4  \cf6 \strokec6 char\cf4 \strokec4  = \cf6 \strokec6 str\cf4 \strokec4 [\cf6 \strokec6 i\cf4 \strokec4 ];\cb1 \
\cb3     \cf5 \strokec5 if\cf4 \strokec4  (\cf6 \strokec6 charMap\cf4 \strokec4 [\cf6 \strokec6 char\cf4 \strokec4 ]) \{\cb1 \
\cb3       \cf5 \strokec5 return\cf4 \strokec4  \cf5 \strokec5 true\cf4 \strokec4 ; \cf2 \strokec2 // Duplicate found\cf4 \cb1 \strokec4 \
\cb3     \}\cb1 \
\cb3     \cf6 \strokec6 charMap\cf4 \strokec4 [\cf6 \strokec6 char\cf4 \strokec4 ] = \cf5 \strokec5 true\cf4 \strokec4 ;\cb1 \
\cb3   \}\cb1 \
\cb3   \cf5 \strokec5 return\cf4 \strokec4  \cf5 \strokec5 false\cf4 \strokec4 ; \cf2 \strokec2 // No duplicates\cf4 \cb1 \strokec4 \
\cb3 \}\cb1 \
\
\
\
\
\
\
\
\
\pard\pardeftab720\partightenfactor0
\cf5 \cb3 \strokec5 function\cf4 \strokec4  \cf9 \strokec9 CRYPTOGRAM\cf4 \strokec4 (\cf6 \strokec6 inputText\cf4 \strokec4 , \cf6 \strokec6 key\cf4 \strokec4 ) \{\cb1 \
\pard\pardeftab720\partightenfactor0
\cf4 \cb3   \cf5 \strokec5 var\cf4 \strokec4  \cf6 \strokec6 alphabet\cf4 \strokec4  = \cf7 \strokec7 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'\cf4 \strokec4 ;\cb1 \
\cb3   \cf5 \strokec5 var\cf4 \strokec4  \cf6 \strokec6 encryptedText\cf4 \strokec4  = \cf7 \strokec7 ''\cf4 \strokec4 ;\cb1 \
\cb3   \cf5 \strokec5 for\cf4 \strokec4  (\cf5 \strokec5 var\cf4 \strokec4  \cf6 \strokec6 i\cf4 \strokec4  = \cf8 \strokec8 0\cf4 \strokec4 ; \cf6 \strokec6 i\cf4 \strokec4  < \cf6 \strokec6 inputText\cf4 \strokec4 .\cf6 \strokec6 length\cf4 \strokec4 ; \cf6 \strokec6 i\cf4 \strokec4 ++) \{\cb1 \
\cb3     \cf5 \strokec5 var\cf4 \strokec4  \cf6 \strokec6 char\cf4 \strokec4  = \cf6 \strokec6 inputText\cf4 \strokec4 .\cf6 \strokec6 charAt\cf4 \strokec4 (\cf6 \strokec6 i\cf4 \strokec4 ).\cf6 \strokec6 toUpperCase\cf4 \strokec4 ();\cb1 \
\cb3     \cf5 \strokec5 if\cf4 \strokec4  (\cf6 \strokec6 alphabet\cf4 \strokec4 .\cf6 \strokec6 indexOf\cf4 \strokec4 (\cf6 \strokec6 char\cf4 \strokec4 ) !== -\cf8 \strokec8 1\cf4 \strokec4 ) \{\cb1 \
\cb3       \cf5 \strokec5 var\cf4 \strokec4  \cf6 \strokec6 index\cf4 \strokec4  = \cf6 \strokec6 alphabet\cf4 \strokec4 .\cf6 \strokec6 indexOf\cf4 \strokec4 (\cf6 \strokec6 char\cf4 \strokec4 );\cb1 \
\cb3       \cf6 \strokec6 encryptedText\cf4 \strokec4  += \cf6 \strokec6 key\cf4 \strokec4 .\cf6 \strokec6 charAt\cf4 \strokec4 (\cf6 \strokec6 index\cf4 \strokec4 );\cb1 \
\cb3     \} \cf5 \strokec5 else\cf4 \strokec4  \{\cb1 \
\cb3       \cf6 \strokec6 encryptedText\cf4 \strokec4  += \cf6 \strokec6 inputText\cf4 \strokec4 .\cf6 \strokec6 charAt\cf4 \strokec4 (\cf6 \strokec6 i\cf4 \strokec4 );\cb1 \
\cb3     \}\cb1 \
\cb3   \}\cb1 \
\cb3   \cf5 \strokec5 return\cf4 \strokec4  \cf6 \strokec6 encryptedText\cf4 \strokec4 ;\cb1 \
\cb3 \}\cb1 \
\
\
}