const blogs = [
    {
      title: "NLP Transformers",
      description: "Have you ever faced a challenge to understand someone's message even though they are speaking the same language? We all face it in some situations because language is tricky...",
      imageUrl: "./assets/images/blogimg/NLP_tranformers.png",
      link: "https://www.linkedin.com/pulse/nlp-transformers-kognitiv-club-ryx1c/"
    },
    {
      title: "AI IN DRUG DISCOVERY",
      description: "AI has changed the field of drug development by delivering more effective computer technologies that speed up and improve the process of discovering potential target therapies...",
      imageUrl: "./assets/images/blogimg/AI_in_drug_discovery.jpeg",
      link: "https://www.linkedin.com/pulse/ai-drug-discovery-kognitiv-club-ccbsc/"
    },
    {
      title: "AI in Military Weapons",
      description: "The use of lethal autonomous systems (LAW) in military weaponry has raised ethical concerns and contributed to an AI arms race...",
      imageUrl: "./assets/images/blogimg/AI_in_military_weapons.jpeg",
      link: "https://www.linkedin.com/pulse/ai-military-weapons-kognitiv-club-lbyve/"
    },
    {
      title: "Ethical AI",
      description: "AI in our daily lives can lead to dramatic changes, including its impacts on decision-making and automation in various fields...",
      imageUrl: "./assets/images/blogimg/Ethical_AI.jpeg",
      link: "https://www.linkedin.com/pulse/ethical-ai-kognitiv-club-v7j1c/"
    },
    {
      title: "AI AND IOT",
      description: "Artificial Intelligence (AI) is a necessary and can increase Internet of Things (IoT) functionality and make interactions smarter, more efficient, and based on evidence...",
      imageUrl: "./assets/images/blogimg/AI_IOT.jpeg",
      link: "https://www.linkedin.com/pulse/ai-iot-kognitiv-club-vxsfc/"
    },
    {
      title: "N-Shot Learning",
      description: "N-shot learning is a machine learning method designed to train models with limited datasets...",
      imageUrl: "./assets/images/blogimg/N-Shot_learning.png",
      link: "https://www.linkedin.com/pulse/n-shot-learning-kognitiv-club-qlj9c/"
    },
    {
      title: "Multimodal AI:",
      description: "Multimodal AI is smart tech that mixes lots of different kinds of data to do better at figuring stuff out, understanding things...",
      imageUrl: "./assets/images/blogimg/Multimodal_AI.jpeg",
      link: "https://www.linkedin.com/pulse/multimodal-ai-kognitiv-club-c72cc/"
    },
    {
      title: "Understanding ANN",
      description: "ANN is nothing more than a subset of machine learning (ML), some of whose structural and functional elements were inspired by human brains...",
      imageUrl: "./assets/images/blogimg/Understanding_ANN.png",
      link: "https://www.linkedin.com/pulse/understanding-ann-kognitiv-club-jgllc/"
    },
    {
      title: "AI in SAAS",
      description: "SAAS stands for software as a service. Here as an example of explaining SAAS when we take Google Workspace...",
      imageUrl: "./assets/images/blogimg/AI_in_SAAS.png",
      link: "https://www.linkedin.com/pulse/ai-saas-kognitiv-club-bpxsc/"
    },
    {
      title: "AI in Astronomy",
      description: "Generally AI is defined as the simulation of human resources processes by the machines especially the computer systems...",
      imageUrl: "./assets/images/blogimg/AI_in_Astronomy.jpeg",
      link: "https://www.linkedin.com/pulse/ai-astronomy-kognitiv-club-1l6nc/"
    },
    {
      title: "Democratization of Artificial Intelligence",
      description: "Imagine a society in which anybody can use artificial intelligence (AI) to solve issues, unleash creativity, and enhance life, independent of technical expertise...",
      imageUrl: "./assets/images/blogimg/Democratization_of_AI.jpeg",
      link: "https://www.linkedin.com/pulse/democratization-artificial-intelligence-kognitiv-club-krevc/"
    },
    {
      title: "Single Shot Detectors(SSDs) For Object Detection",
      description: "Object detection in real time is a computer technology related to computer vision and image processing...",
      imageUrl: "./assets/images/blogimg/SSDs_for_object.jpeg",
      link: "https://www.linkedin.com/pulse/single-shot-detectorsssds-object-detection-kognitiv-club-zizuc/"
    },
    {
      title: "AI in Machinery",
      description: "In the ever-evolving landscape of technology, artificial intelligence has emerged as a driving force behind transformative changes across various industries...",
      imageUrl: "./assets/images/blogimg/Ai_in_machinery.jpeg",
      link: "https://www.linkedin.com/pulse/ai-machinery-kognitiv-club-cvkgc/"
    },
    {
      title: "Emergent Intelligence",
      description: "Emergent intelligence is a phenomenon wherein complex behaviors and patterns arise from the interactions of simpler components...",
      imageUrl: "./assets/images/blogimg/Emergent_intelligence.jpeg",
      link: "https://www.linkedin.com/pulse/emergent-intelligence-kognitiv-club-fkqvc/"
    },
    {
      title: "AI in Food Industry",
      description: "In this era of flourishment of AI and other technologies, Food Management is improved compared to past generations...",
      imageUrl: "./assets/images/blogimg/Ai_in_food_industry.png",
      link: "https://www.linkedin.com/pulse/ai-food-industry-kognitiv-club-4ksfc/"
    },
    {
      title: "AI IN SPORTS",
      description: "The usage of Artificial intelligence in sports was started in mid 1997 .Over the last few years there are many advancements and changes in the AI across various sectors...",
      imageUrl: "./assets/images/blogimg/Ai_in_sports.jpeg",
      link: "https://www.linkedin.com/pulse/ai-sports-kognitiv-club-omg1c/"
    },
    {
      title: "AI in Diabetic Retinopathy",
      description: "Diabetic retinopathy is an ever-increasing problem. Early screening and timely treatment of the same can reduce the burden of sight-threatening retinopathy...",
      imageUrl: "./assets/images/blogimg/Ai_in_diabetic.jpeg",
      link: "https://www.linkedin.com/pulse/ai-diabetic-retinopathy-kognitiv-club-y8n7c/"
    },
    {
      title: "Artificial General Intelligence",
      description: "Artificial general intelligence (AGI) is a type of AI which can think, learn and perform activities like humans...",
      imageUrl: "./assets/images/blogimg/artificial_general_intelligence.png",
      link: "https://www.linkedin.com/pulse/artificial-general-intelligence-kognitiv-club-opcqc/"
    },
    {
      title: "Impact of Artificial Intelligence on Modern Agriculture",
      description: "These days, agriculture techniques have a revolution, which has taken help from the Artificial Intelligence (AI) technologies...",
      imageUrl: "./assets/images/blogimg/aiinagriculture.jpeg",
      link: "https://www.linkedin.com/pulse/impact-artificial-intelligence-modern-agriculture-kognitiv-club-g5eyc/"
    },
    {
      title: "AI in Software DevOps",
      description: "Historically, the software Development is completely based on the heavy coding, debugging, and deployment...",
      imageUrl: "./assets/images/blogimg/AIindevops.jpeg",
      link: "https://www.linkedin.com/pulse/ai-software-devops-kognitiv-club-5jdqc/"
    },
    {
      title: "AI Poisoning",
      description: "In the sprawling landscapes of artificial intelligence (AI) and machine learning (ML), where data reigns supreme, a silent saboteur...",
      imageUrl: "./assets/images/blogimg/aipoisoning.png",
      link: "https://www.linkedin.com/pulse/ai-poisoning-kognitiv-club-2q5oc"
    },
    {
      title: "AI in Space",
      description: "Artificial intelligence is the simulation of human intelligence processes by machines, especially computer systems. AI is used in ..",
      imageUrl: "./assets/images/blogimg/ai_space.jpg",
      link: "https://www.linkedin.com/pulse/ai-space-kognitiv-club-c5wgc"
    },
    {
      title: "Web3 Incorporating the use of AI",
      description: "Ethereum co-founder Gavin Wood introduced the term “Web3” in 2014, and in 2021, it garnered attention from cryptocurrency enthusiasts, ...",
      imageUrl: "./assets/images/blogimg/web3.jpg",
      link: "https://www.linkedin.com/pulse/web3-incorporating-use-ai-kognitiv-club-ian0c"
    },
    {
      title: "Crime Forecasting using ML and CV",
      description: "Crime poses an intricate issue creating substantial hurdles, for communities worldwide and the law enforcement ...",
      imageUrl: "./assets/images/blogimg/crime.png",
      link: "https://www.linkedin.com/pulse/crime-forecasting-using-ml-cv-kognitiv-club-zb8gc"
    },
    {
      title: "Cognitive Science",
      description: "Commence on a voyage of understanding the difficulties of the human brain, where the quest of awareness is an alluring excursion.",
      imageUrl: "./assets/images/blogimg/cog.png",
      link: "https://www.linkedin.com/pulse/introduction-kognitiv-club-q9qhc"
    },
    {
      title: "AI and Art of Creativity",
      description: "The domains of art and creativity have conventionally been seen as inherently human pursuits and acting as channels for our sentiments..",
      imageUrl: "./assets/images/blogimg/aiart.jpeg",
      link: "https://www.linkedin.com/pulse/ai-art-creativity-kognitiv-club-y0qec"
    },
    {
      title: "AI and Wildlife Conservation Drones",
      description: "In the dynamic realm of wildlife conservation, a profound intersection with artificial intelligence (AI) is shaping a paradigm shift...",
      imageUrl: "./assets/images/blogimg/aidrones.jpeg",
      link: "https://www.linkedin.com/pulse/ai-wildlife-conservation-drones-kognitiv-club-b2tbc"
    },
    {
      title: "Autonomous Vehicle",
      description: "Self-driving cars, or autonomous vehicles, promise to transform the way people move and transfer things.",
      imageUrl: "./assets/images/blogimg/autocars.jpg",
      link: "https://www.linkedin.com/pulse/autonomous-vehicles-kognitiv-club-om8ce"
    },
    {
      title: "Threats in Robotics",
      description: "Robotics is one of the field of Engineering where it deals with the design...",
      imageUrl: "./assets/images/blogimg/robothreats.jpg",
      link: "https://www.linkedin.com/pulse/threats-robotics-kognitiv-club-khecc/"
    },
    {
      title: "AI in Data Security",
      description: "Artificial intelligence (AI) plays a crucial role in the dynamic field of cyber security...",
      imageUrl: "./assets/images/blogimg/ai_datasec.png",
      link: "https://www.linkedin.com/pulse/ai-data-security-kognitiv-club-fbazc/"
    },
    {
      title: "Enhancements of VR and AR using AI",
      description: "Have you ever wished to create a universe where your imagination...",
      imageUrl: "./assets/images/blogimg/vr_ar.jpeg",
      link: "https://www.linkedin.com/pulse/enhancement-vr-ar-using-ai-kognitiv-club-vac4c/"
    },
    {
      title: "Meta Learning",
      description: "Learning something new can feel like solving a giant puzzle. But what if I told you...",
      imageUrl: "./assets/images/blogimg/meta.jpg",
      link: "https://www.linkedin.com/pulse/meta-learning-kognitiv-club-bw8ac/"
    },
    {
      title: "Social Media Trend Analysis",
      description: "Now-a-days social media is getting a trending platform through which...",
      imageUrl: "./assets/images/blogimg/social.jpg",
      link: "https://www.linkedin.com/pulse/social-media-trend-analysis-kognitiv-club-hixnc/"
    },
    {
      title: "Virtual Agents",
      description: "In modern dynamic business panorama, the integration of innovative technologies...",
      imageUrl: "./assets/images/blogimg/virtualagents.png",
      link: "https://www.linkedin.com/pulse/virtual-agents-kognitiv-club-dcucc/"
    },
    {
      title: "Transfer Learning",
      description: "One who knows to drive a car, can handle to drive a truck or bus due to similar controls like steering...",
      imageUrl: "./assets/images/blogimg/transfer_learn.png",
      link: "https://www.linkedin.com/pulse/transfer-learning-kognitiv-club-2v8ec/"
    },
    {
      title: "AI Optimized Hardware",
      description: "In the ever-evolving landscape of technology, a transformative force is at play – the magic of AI-Optimized...",
      imageUrl: "./assets/images/blogimg/ai_hardware.png",
      link: "https://www.linkedin.com/pulse/ai-optimized-hardware-kognitiv-club-ynbtc/"
    },
    {
      title: "Conversational AI",
      description: "You would possibly heard approximately it, but do you surely understand how it is reshaping the...",
      imageUrl: "./assets/images/blogimg/convai.png",
      link: "https://www.linkedin.com/pulse/conversational-ai-kognitiv-club-wue8c/"
    },
    {
      title: "Disease Outbreak Prediction",
      description: "Disease Outbreak is nothing but spreading the infections, which are very harmful to the humans...",
      imageUrl: "./assets/images/blogimg/disease.jpg",
      link: "https://www.linkedin.com/pulse/disease-outbreak-prediction-kognitiv-club-tkroe"
    },
    {
      title: "Machine Learning in 6G Wireless Technology",
      description: "Imagine your phone not only being fast and reliable but also super smart such that...",
      imageUrl: "./assets/images/blogimg/6gai.jpeg",
      link: "https://www.linkedin.com/pulse/machine-learning-era-6g-wireless-technology-kognitiv-club-upy6f"
    },
    {
      title: "Quantum Computing in AI",
      description: "Quantum computers can handle a large number of possibilities at once. This has the potential to speed up AI algorithms and...",
      imageUrl: "./assets/images/blogimg/quant.jpeg",
      link: "https://www.linkedin.com/pulse/quantum-computing-ai-kognitiv-club-nyqfc"
    },
    {
      title: "Sentiment Analysis",
      description: "Sentiment analysis is a Natural Language Processing (NLP) technique used to determine whether data is positive, negative or neutral...",
      imageUrl: "./assets/images/blogimg/senti.jpeg",
      link: "https://www.linkedin.com/pulse/sentiment-analysis-kognitiv-club-qoyoc"
    },
    {
      title: "AI Advancements and Applications",
      description: "Advancements in AI had a great impact on various aspects of our lives. Everyone says...",
      imageUrl: "./assets/images/blogimg/aiadv.jpeg",
      link: "https://www.linkedin.com/pulse/ai-advancements-applications-kognitiv-club-4mlpc"
    },
    {
      title: "Object Detection using YOLO",
      description: "We humans have the ability to look at objects and distinguish them using one of sensory organ eye...",
      imageUrl: "./assets/images/blogimg/objyolo.jpeg",
      link: "https://www.linkedin.com/pulse/object-detection-using-yolo-kognitiv-club-vbsqc"
    },
    {
      title: "Iris Classification",
      description: "Iris Flower Classification is a notable problem in the field of machine...",
      imageUrl: "./assets/images/blogimg/iris.jpeg",
      link: "https://www.linkedin.com/pulse/iris-classification-kognitiv-club-57i7c"
    },
    {
      title: "Startegies for Text Classification",
      description: "Text classification is one of the machine learning technique that will allocate...",
      imageUrl: "./assets/images/blogimg/text.png",
      link: "https://www.linkedin.com/pulse/strategies-text-classification-kognitiv-club"
    },
    {
      title: "Sales Forecasting Using AI",
      description: "AI sales forecasting is a method that uses artificial intelligence tools to...",
      imageUrl: "./assets/images/blogimg/sfai.jpeg",
      link: "https://www.linkedin.com/pulse/sales-forecasting-using-ai-kognitiv-club"
    },
    {
      title: "Human Activity Recognition",
      description: "Nowadays smartphones are able to acquire, store, share, and elaborate huge amount of data in a very short time...",
      imageUrl: "./assets/images/blogimg/har.png",
      link: "https://www.linkedin.com/pulse/human-activity-recognition-kognitiv-club"
    },
    {
      title: "Speech Emotion Recognition",
      description: "We can usually tell how someone is feeling by their facial expressions and words. But how does a machine understand...",
      imageUrl: "./assets/images/blogimg/speech.png",
      link: "https://www.linkedin.com/pulse/speech-emotion-recognition-kognitiv-club"
    },
    {
      title: "Movie Recommeder System",
      description: "We've all experienced that feeling of scrolling trying to decide which movie to watch next. That's when Support Vector Machines (SVMs) step in...",
      imageUrl: "./assets/images/blogimg/movrec.jpeg",
      link: "https://www.linkedin.com/pulse/movie-recommender-system-kognitiv-club-1c"
    },
    {
      title: "BigMart Sales Prediction",
      description: "In the ever-evolving world companies often compete with each other to gain market dominance, and that includes big supermarket chains as well...",
      imageUrl: "./assets/images/blogimg/bigmart.jpeg",
      link: "https://www.linkedin.com/pulse/bigmart-sales-prediction-kognitiv-club"
    },
    {
      title: "House Price Prediction",
      description: "Home value predication model is also called as House price index(HPI) is used to measure price changes of residential housing in many countries...",
      imageUrl: "./assets/images/blogimg/houseprice.jpeg",
      link: "https://www.linkedin.com/pulse/house-price-prediction-kognitiv-club"
    },
    {
      title: "The AI Revolution in Business",
      description: "In recent years, artificial intelligence (AI) has emerged as a transformative force in the business environment. Its ability...",
      imageUrl: "./assets/images/blogimg/aibussin.jpeg",
      link: "https://www.linkedin.com/pulse/ai-revolution-business-kognitiv-club"
    },
    {
      title: "The Rise of Intelligent Automation",
      description: "Have you noticed how artificial intelligence and robotics seem to be popping up everywhere in recent...",
      imageUrl: "./assets/images/blogimg/Roboindus.jpeg",
      link: "https://www.linkedin.com/pulse/rise-intelligent-automation-how-ai-robotics-transforming"
    },
    {
      title: "Gaming with AI",
      description: "Most of the people who spends lot of time on Internet are fond of video games. It is estimated that by the end of 2023 there gonna be 3.26 billion ...",
      imageUrl: "./assets/images/blogimg/gameAI.jpeg",
      link: "https://www.linkedin.com/pulse/gaming-ai-kognitiv-club"
    },
    {
      title: "OpenCV",
      description: "In our tech-driven world, something truly magical is happening. From autonomous vehicles navigating complex routes to Face Recognition...",
      imageUrl: "./assets/images/blogimg/cv.jpeg",
      link: "https://www.linkedin.com/pulse/opencv-kognitiv-club"
    },
    {
      title: "Recommendation Systems",
      description: "In today’s era we are bombarded with an amount of information and choices when it comes to selecting movies, books or products. The options seem endless...",
      imageUrl: "./assets/images/blogimg/recomsys.jpeg",
      link: "https://www.linkedin.com/pulse/recommendation-systems-kognitiv-club"
    },
    {
      title: "Prompt Engineering",
      description: "Prompt Engineering is a game changer, it is used by everyone, they get solutions, they get content, they get what they want. Majorly prompt engineering is ..",
      imageUrl: "./assets/images/blogimg/prompt.png",
      link: "https://www.linkedin.com/pulse/prompt-engineering-kognitiv-club"
    },
    {
      title: "Journey into the World of AI",
      description: "Do you still confuse about AI? You want to know how the AI functions? Today this article will give a best way to apprehend it.Artificial Intelligence is ...",
      imageUrl: "./assets/images/blogimg/journeyAI.jpeg",
      link: "https://www.linkedin.com/pulse/journey-world-ai-kognitiv-club"
    },
    {
      title: "What is Deep Learning?",
      description: "Deep learning is a subset of machine learning based on neural networks. It has been popular these days because it helps in understanding a large amount of ...",
      imageUrl: "/assets/images/blogimg/dl.png",
      link: "https://www.linkedin.com/pulse/what-deep-learning-kognitiv-club"
    },
    {
      title: "Exploring AI's Mastery of Language",
      description: "NLP, a branch of AI focuses on empowering machines to comprehend and generate language. In this article we dive deeply into NLP delving into its progression...",
      imageUrl: "./assets/images/blogimg/nlp.png",
      link: "https://www.linkedin.com/pulse/exploring-ais-mastery-language-kognitiv-club/"
    },
    {
      title: "Artificial Intelligence for Education",
      description: "This article includes the overview of how Artificial Intelligence and education are bonded . AI in Education has the potential to alter both teachers and...",
      imageUrl: "./assets/images/blogimg/Aifored.jpeg",
      link: "https://www.linkedin.com/pulse/artificial-intelligence-education-kognitiv-club"
    },
    {
      title: "Clustering and K-Means Clustering",
      description: "A way of grouping the data points into different clusters, consisting of similar data points. The objects with the possible similarities remain in ...",
      imageUrl: "./assets/images/blogimg/clustvskmeans.jpg",
      link: "https://www.linkedin.com/pulse/clustering-k-means-kodi-jahnavi/?trackingId=2xLVPY7WQcSo%2BFiodNfL3w%3D%3D"
    },
    {
      title: "Confusion Matrix and Performance Metrics",
      description: "In the field of AI and explicitly the issue of factual order, a disarray grid, otherwise called a blunder matrix, is a particular table design that ...",
      imageUrl: "./assets/images/blogimg/cmandpm.jpg",
      link: "https://www.linkedin.com/pulse/confusion-matrix-performance-metrics-phani-melam/?trackingId=pFgkeMNsST6GREvtLkLEzQ%3D%3D"
    },
    {
      title: "A Simple Guide For Novices To Bivariate Analysis In 2022",
      description: "The term bivariate analysis refers to the study of bivariate data. To determine the link between two value sets, a single statistical analysis was utilised...",
      imageUrl: "./assets/images/blogimg/bivariate.jpg",
      link: "https://www.linkedin.com/pulse/simple-guide-novices-bivariate-analysis-2022-shiva-chary/"
    },
    {
      title: "Regression vs Classification",
      description: "Even the most experienced data scientists might occasionally become perplexed when comparing regression and classification in machine learning. They may eventually ...",
      imageUrl: "./assets/images/blogimg/regvsclas.jpg",
      link: "https://www.linkedin.com/pulse/regression-vs-classification-machine-learning-define-sathwikanjali/"
    },
    {
      title: "Visualization fundamentals & Process of Visualization",
      description: "It is the representation of data through use of common graphics, such as charts, plots, infographics, and even animations. These visual displays of information....",
      imageUrl: "./assets/images/blogimg/datavis.jpg",
      link: "https://www.linkedin.com/pulse/visualization-fundamentals-process-vyshnavi-lalitha-seshagiri/"
    },
    {
      title: "A lovely piece of logical art in the form of an artificial neural network.",
      description: "Artificial neural networks (ANNs) have recently become a popular and useful model for classification, clustering, pattern recognition, and prediction in a variety of areas...",
      imageUrl: "./assets/images/blogimg/ann.jpg",
      link: "https://www.linkedin.com/pulse/lovely-piece-logical-art-form-artificial-neural-kumar-renduchinthala/"
    },
    {
      title: "Imbalanced Class Proportions:",
      description: "Did you ever wonder how to classify the data having inequal proportions of target labels?.. If yes, then you are in the right place...",
      imageUrl: "./assets/images/blogimg/Imbalanced Class Proportions.jpg",
      link: "https://www.linkedin.com/pulse/imbalanced-class-proportions-kognitiv-club"
    },
    {
      title: "The Learner from Mistakes(RL):",
      description: "Reinforcement learning (RL) is transitioning from a research field focused on game playing to a technology with real-world applications.",
      imageUrl: "./assets/images/blogimg/The Learner from Mistakes(RL).jpg",
      link: "https://www.linkedin.com/pulse/learner-from-mistakesrl-kognitiv-club"
    },
    {
      title: "The Story of Adversarial Images and Videos:",
      description: "Generative adversarial networks (GANs) have been the go-to state-of-the-art algorithm to image and video generation...",
      imageUrl: "./assets/images/blogimg/The Story of Adversarial Images and Videos.png",
      link: "https://www.linkedin.com/pulse/story-adversarial-images-videos-kognitiv-club"
    },
    {
      title: "AI vs ML vs Dl, Types of Activation Function",
      description: "AI is an umbrella that covers everything related to making machines smarter. There are many formal definitions for AI...",
      imageUrl: "./assets/images/blogimg/almldl.jpg",
      link: "https://www.linkedin.com/pulse/ai-vs-ml-dl-types-activation-function-prasanna-swetha-udimudi/"
    },
    {
      title: "Long Short-Term Memory Networks",
      description: "Sequence prediction problems have been around for a long time...",
      imageUrl: "./assets/images/blogimg/lstm.jpg",
      link: "https://www.linkedin.com/pulse/long-short-term-memory-networks-vamsi-mitra-g/"
    },
    {
      title: "YOLO Algorithm",
      description: "Object detection is a phenomenon in Computer vision that involves the detection of various objects in digital images or videos...",
      imageUrl: "./assets/images/blogimg/yoloalgo.jpg",
      link: "https://www.linkedin.com/pulse/yolo-algorithm-prasanna-swetha-udimudi/"
    },
    {
      title: "Self-organizing maps",
      description: "A self-organizing map (SOM) or self-organizing feature map (SOFM) is an unsupervised machine learning technique used to produce...",
      imageUrl: "./assets/images/blogimg/som.png",
      link: "https://www.linkedin.com/pulse/self-organizing-maps-srinivas-voore/"
    },
    {
      title: "Convolutional Neural Networks (CNN)",
      description: "Because of its ability to handle vast volumes of data, Deep Learning has proven to be a very useful technology over the last few decades...",
      imageUrl: "./assets/images/blogimg/cnn.png",
      link: "https://www.linkedin.com/pulse/convolutional-neural-networks-cnn-pavan-sai-gontina/"
    },
    {
      title: "Deep Q-Learning",
      description: "Reinforcement is a part of machine learning concerned about the action, which an agent in an environment takes to maximize the rewards...",
      imageUrl: "./assets/images/blogimg/Deep Q-Learning.png",
      link: "https://www.linkedin.com/pulse/deep-q-learning-jithendra-katta/"
    },
    {
      title: "PySpark: Apache Spark in Pythonic Way!!",
      description: "Apache Spark is an open-source, distributed processing system used for handling the works which uses large scale of data...",
      imageUrl: "./assets/images/blogimg/pyspark.jpg",
      link: "https://www.linkedin.com/pulse/pyspark-apache-spark-pythonic-way-dheeraj-satyavarapu/"
    },
    {
      title: "Regression VS Classification",
      description: "The main difference between Regression and Classification algorithms that Regression algorithms are used to predict the continuous...",
      imageUrl: "./assets/images/blogimg/regvsclas1.png",
      link: "https://www.linkedin.com/pulse/regression-vs-classification-udbhav-govindu/"
    },
    {
      title: "Big Data in Health Care Industry",
      description: "The new era is driven by big data. Today, we are bombarded with massive amounts of data from every part of our lives, including health...",
      imageUrl: "./assets/images/blogimg/healthcarebd.jpg",
      link: "https://www.linkedin.com/pulse/big-data-health-care-industry-dwarampudi-vijaya-sree-sai-reddy/"
    },
    {
      title: "DBSCAN Algorithm",
      description: "DBSCAN is a type of clustering algorithm. In clustering, a group of different data objects is classified as similar objects...",
      imageUrl: "./assets/images/blogimg/dbscanalgo.jpg",
      link: "https://www.linkedin.com/pulse/dbscan-algorithm-udbhav-govindu/"
    },
    {
      title: "Decision Tree",
      description: "Decision Tree is used to build classification and regression models. It is used to create data models that will predict class labels or values for the decision-making process...",
      imageUrl: "./assets/images/blogimg/dt.jpg",
      link: "https://www.linkedin.com/pulse/decision-tree-dwarampudi-vijaya-sree-sai-reddy/"
    },
    {
      title: "Upper Confidence Bound",
      description: "This is a famous game in which there will be many multi armed bandit machines. You have to select a machine and have to pull the arm...",
      imageUrl: "./assets/images/blogimg/ucb.png",
      link: "https://www.linkedin.com/pulse/upper-confidence-bound-jithendra-katta/"
    },
    {
      title: "Types of Data Preprocessing and its importance:",
      description: "There is a huge amount of data in various forms like tables, images, audio files, images etc But Machine...",
      imageUrl: "./assets/images/blogimg/brain.jpg",
      link: "https://www.linkedin.com/pulse/types-data-pre-processing-importance-machine-learning-reddy"
    },
    {
      title: "Metrics to Evaluate For Machine Learning Algorithms ( Part-1 ):",
      description: "Metrics are demonstrated for both classsification and regression type machine learning problems...",
      imageUrl: "./assets/images/blogimg/cf.png",
      link: "https://kowshikbasha2.blogspot.com/2020/04/metrics-to-evaluate-for-machine.html"
    },
    {
      title: "Overfitting and Underfitting:",
      description: "Overfitting happens when a model learns the detail and noise in the training data...",
      imageUrl: "./assets/images/blogimg/errorrates.png",
      link: "https://kowshikbasha.blogspot.com/2020/04/overfitting-and-underfitting.html"
    }
    // Add other blog objects similarly
  ];

  // Function to generate blog articles
  function generateBlogArticles() {
    const blogContainer = document.getElementById('blog__search');

    blogs.map(blog => {
      const article = document.createElement('article');
      article.classList.add('blog');

      const blogImageDiv = document.createElement('div');
      blogImageDiv.classList.add('blog__Image');

      const img = document.createElement('img');
      img.src = blog.imageUrl;
      blogImageDiv.appendChild(img);

      const blogInfoDiv = document.createElement('div');
      blogInfoDiv.classList.add('blog__info');

      const h4 = document.createElement('h4');
      h4.textContent = blog.title;

      const p = document.createElement('p');
      p.textContent = blog.description;

      const a = document.createElement('a');
      a.href = blog.link;
      a.classList.add('btn', 'btn-primary');
      a.textContent = 'Read More';

      blogInfoDiv.appendChild(h4);
      blogInfoDiv.appendChild(p);
      blogInfoDiv.appendChild(a);

      article.appendChild(blogImageDiv);
      article.appendChild(blogInfoDiv);

      blogContainer.appendChild(article);
    });
  }

  // Call the function to generate the blog articles
  generateBlogArticles();