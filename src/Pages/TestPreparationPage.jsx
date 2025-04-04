import React, { useEffect, useState } from "react";
import {
  Box,
  Typography,
  Card,
  CardContent,
  Table,
  List,
  ListItem,
  Button,
  Chip,
  Grid,
  Modal,
  ModalClose,
  ModalDialog,
  Sheet,
  ListItemDecorator,
  Tabs,
  TabList,
  Tab,
} from "@mui/joy";
import {
  School as SATIcon,
  Language as IELTSIcon,
  RecordVoiceOver as PTEIcon,
  Translate as TOEFLICon,
  AutoStories as GREIcon,
  Analytics as GMATIcon,
  Schedule as TimeIcon,
  Star as ScoreIcon,
  Calculate as MathIcon,
  LibraryBooks as ReadingIcon,
  EditNote as WritingIcon,
  Headphones as ListeningIcon,
  Mic as SpeakingIcon,
  Description as SyllabusIcon,
  PlayCircle as StartIcon,
  Article as PatternIcon,
  LocationOn as TestCenterIcon,
  BarChart as ScoreChartIcon,
  Group as ClassIcon,
  MenuBook as BookIcon,
  Quiz as PracticeIcon,
  EmojiEvents as ScholarshipIcon,
  Public as CountryIcon,
  Help as QuestionIcon,
} from "@mui/icons-material";
import ArticleIcon from "@mui/icons-material/Article";

const TestPreparationPage = () => {
  const [openSyllabus, setOpenSyllabus] = useState(false);
  const [currentTest, setCurrentTest] = useState("SAT");
  const [openPattern, setOpenPattern] = useState(false);

useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const testData = {
    SAT: {
      icon: <SATIcon fontSize="large" />,
      color: "primary",
      introduction: [
        "The SAT is a standardized test widely used for college admissions in the United States, designed to assess a student's readiness for college-level work. It evaluates mathematical, critical reading, and writing skills developed through years of schooling.",
        "For Nepali students, the SAT represents a golden opportunity to showcase academic abilities beyond the +2 curriculum. The math section (average Nepali score: 620) plays to Nepali students' strengths, while the reading/writing sections (average: 520) require focused preparation to overcome language barriers.",
        "A strong SAT score (1300+) can compensate for differences in grading systems and open doors to US scholarships. Over 85% of US universities consider SAT scores for admission and merit-based financial aid.",
      ],
      quickFacts: [
        { icon: <TimeIcon />, text: "Duration: 3 hours (without essay)" },
        { icon: <ScoreIcon />, text: "Score Range: 400-1600" },
        { icon: <MathIcon />, text: "Math Level: Grade 10-12" },
        {
          icon: <TestCenterIcon />,
          text: "Test Centers: 5 locations in Nepal",
        },
        { icon: <ScoreChartIcon />, text: "Nepal Average Score: 1140" },
      ],
      pattern: [
        {
          section: "Reading",
          time: "65 min",
          questions: 52,
          score: "200-400",
          details:
            "5 passages (500-750 words each) from literature, history, and sciences",
        },
        {
          section: "Writing",
          time: "35 min",
          questions: 44,
          score: "200-400",
          details:
            "4 passages with editing tasks focusing on grammar and expression",
        },
        {
          section: "Math (No Calc)",
          time: "25 min",
          questions: 20,
          score: "200-800",
          details: "15 multiple choice, 5 grid-in (algebra, problem solving)",
        },
        {
          section: "Math (Calc)",
          time: "55 min",
          questions: 38,
          score: "200-800",
          details:
            "30 multiple choice, 8 grid-in (advanced math, data analysis)",
        },
      ],
      preparation: [
        "12-week comprehensive program with 3 phases: Foundation, Practice, Mastery",
        "Daily vocabulary building (500+ academic words with Nepali translations)",
        "Weekly full-length practice tests with detailed error analysis",
        "Math concept bridging (focus on gaps between Nepali and US curricula)",
        "Reading speed techniques tailored for non-native English speakers",
      ],
      scoreInterpretation: [
        {
          range: "1400-1600",
          meaning: "Top 5% globally - Ivy League competitive",
        },
        {
          range: "1200-1390",
          meaning: "Top 20% - Good for state universities",
        },
        {
          range: "1000-1190",
          meaning: "Average - Needs improvement for scholarships",
        },
        { range: "400-990", meaning: "Needs significant preparation" },
      ],
      testCenters: [
        "Kathmandu: Lincoln School, Ullens School, Rato Bangala",
        "Pokhara: Pokhara Int'l School",
        "Lalitpur: Premier Int'l School",
        "Bhaktapur: Galaxy Public School",
      ],
    },
    IELTS: {
      icon: <IELTSIcon fontSize="large" />,
      color: "success",
      introduction: [
        "IELTS (International English Language Testing System) is the world's most popular English proficiency test for study, work, and migration, accepted by over 11,000 organizations globally. It assesses real-life English usage in academic and general contexts.",
        "Nepali students typically score highest in Reading (average 6.5) and lowest in Writing (average 5.5). The test's focus on British English and academic vocabulary requires specific preparation beyond everyday English knowledge.",
        "For students aiming to study in the UK, Australia, Canada or New Zealand, IELTS is often mandatory, with most universities requiring 6.5+ overall band. A 0.5 band improvement can significantly increase university options.",
      ],
      quickFacts: [
        { icon: <TimeIcon />, text: "Duration: 2h 45m" },
        { icon: <ScoreIcon />, text: "Band Scale: 0-9 (in 0.5 increments)" },
        {
          icon: <TestCenterIcon />,
          text: "Test Centers: 8 locations nationwide",
        },
        { icon: <ScoreChartIcon />, text: "Nepal Average: 6.2 overall" },
        { icon: <CountryIcon />, text: "Preferred by: UK, Australia, Canada" },
      ],
      pattern: [
        {
          section: "Listening",
          time: "30 min",
          questions: 40,
          score: "0-9",
          details:
            "4 recordings with varied accents (conversations, monologues)",
        },
        {
          section: "Reading",
          time: "60 min",
          questions: 40,
          score: "0-9",
          details: "3 long texts (academic) or sections (general training)",
        },
        {
          section: "Writing",
          time: "60 min",
          tasks: 2,
          score: "0-9",
          details: "Task 1 (report/letter) + Task 2 (250-word essay)",
        },
        {
          section: "Speaking",
          time: "11-14 min",
          parts: 3,
          score: "0-9",
          details: "Face-to-face interview with examiner",
        },
      ],
      preparation: [
        "8-week intensive course with accent training (focus on British pronunciation)",
        "Academic writing templates for Task 1 (graphs) and Task 2 (essays)",
        "Weekly speaking mock tests with native speaker feedback",
        "Time management strategies for reading section (20 min per passage)",
        "Grammar correction drills targeting common Nepali mistakes",
      ],
      scoreInterpretation: [
        { range: "8.0-9.0", meaning: "Expert user - Top universities" },
        { range: "7.0-7.5", meaning: "Good user - Most master's programs" },
        {
          range: "6.0-6.5",
          meaning: "Competent user - Undergraduate programs",
        },
        { range: "5.0-5.5", meaning: "Modest user - Foundation courses" },
      ],
      testCenters: [
        "Kathmandu: British Council, IDP",
        "Pokhara: International Test Center",
        "Chitwan: Global Education Center",
        "Butwal: Western Region Center",
        "Dharan: Eastern Region Center",
      ],
    },
    PTE: {
      icon: <PTEIcon fontSize="large" />,
      color: "danger",
      introduction: [
        "PTE Academic (Pearson Test of English) is a computer-based English test accepted by universities worldwide, known for its fast results (typically within 48 hours) and AI scoring system. It's particularly popular for Australian university applications.",
        "For Nepali students, PTE offers several advantages - the speaking section is recorded (reducing interview anxiety), and the test format is more predictable than IELTS. However, the integrated skills tasks require specific strategies.",
        "The test's focus on academic English makes it ideal for students targeting countries like Australia (100% acceptance) and Canada (90% acceptance). Most universities require 58-65 score (equivalent to IELTS 6.5).",
      ],
      quickFacts: [
        { icon: <TimeIcon />, text: "Duration: 3 hours single session" },
        {
          icon: <ScoreIcon />,
          text: "Score Range: 10-90 (Global Scale of English)",
        },
        {
          icon: <TestCenterIcon />,
          text: "Test Centers: Kathmandu (3 locations)",
        },
        { icon: <ScoreChartIcon />, text: "Nepal Average: 62" },
        { icon: <CountryIcon />, text: "Preferred by: Australia, New Zealand" },
      ],
      pattern: [
        {
          section: "Speaking & Writing",
          time: "77-93 min",
          tasks: "7 types",
          score: "10-90",
          details:
            "Includes read aloud, repeat sentence, describe image, essay",
        },
        {
          section: "Reading",
          time: "32-41 min",
          tasks: "5 types",
          score: "10-90",
          details: "Fill in blanks, multiple choice, reorder paragraphs",
        },
        {
          section: "Listening",
          time: "45-57 min",
          tasks: "8 types",
          score: "10-90",
          details:
            "Summarize spoken text, highlight correct summary, write from dictation",
        },
      ],
      preparation: [
        "6-week computer-based training with official PTE software",
        "Pronunciation clinics focusing on speech clarity for AI scoring",
        "Essay templates for 20 most common PTE topics",
        "Integrated skills practice (listen then speak tasks)",
        "Weekly mock tests with detailed score reports",
      ],
      scoreInterpretation: [
        { range: "79-90", meaning: "Expert (IELTS 8.0+ equivalent)" },
        { range: "65-78", meaning: "Proficient (IELTS 6.5-7.5)" },
        { range: "50-64", meaning: "Competent (IELTS 5.5-6.0)" },
        { range: "30-49", meaning: "Basic user (needs improvement)" },
      ],
      testCenters: [
        "Kathmandu: Kantipath Center",
        "Kathmandu: New Baneshwor Center",
        "Kathmandu: Patan Center",
      ],
    },
    TOEFL: {
      icon: <TOEFLICon fontSize="large" />,
      color: "warning",
      introduction: [
        "TOEFL (Test of English as a Foreign Language) is the preferred English proficiency test for US universities, assessing academic English skills through reading, listening, speaking and writing tasks. Over 11,000 institutions across 150 countries accept TOEFL scores.",
        "Nepali students typically perform best in Reading (average 22) and need most improvement in Speaking (average 18). The test's American English focus and integrated tasks require specific preparation strategies.",
        "For students targeting US universities (especially STEM fields), TOEFL is often recommended over IELTS. Most universities require 80-100 total score (out of 120), with top programs demanding 100+.",
      ],
      quickFacts: [
        { icon: <TimeIcon />, text: "Duration: 3h 30m (Home Edition: 3h)" },
        { icon: <ScoreIcon />, text: "Score Range: 0-120" },
        {
          icon: <TestCenterIcon />,
          text: "Test Centers: 6 locations in Nepal",
        },
        { icon: <ScoreChartIcon />, text: "Nepal Average: 83" },
        { icon: <CountryIcon />, text: "Preferred by: USA, Canada, Germany" },
      ],
      pattern: [
        {
          section: "Reading",
          time: "54-72 min",
          questions: "30-40",
          score: "0-30",
          details: "3-4 academic passages (700 words each)",
        },
        {
          section: "Listening",
          time: "41-57 min",
          questions: "28-39",
          score: "0-30",
          details: "Lectures (3-5 min) and conversations (3 min)",
        },
        {
          section: "Speaking",
          time: "17 min",
          tasks: "4",
          score: "0-30",
          details: "Independent (opinion) + integrated (read/listen/speak)",
        },
        {
          section: "Writing",
          time: "50 min",
          tasks: "2",
          score: "0-30",
          details: "Integrated (read/listen/write) + independent essay",
        },
      ],
      preparation: [
        "10-week comprehensive program with American accent training",
        "Note-taking strategies for listening lectures",
        "Speaking templates for all 4 task types",
        "Academic vocabulary builder (300+ words)",
        "Weekly full tests with detailed feedback",
      ],
      scoreInterpretation: [
        { range: "100-120", meaning: "Excellent - Top universities" },
        { range: "80-99", meaning: "Good - Most universities" },
        { range: "60-79", meaning: "Fair - Conditional admission" },
        { range: "0-59", meaning: "Needs significant improvement" },
      ],
      testCenters: [
        "Kathmandu: Kantipath Center",
        "Pokhara: Lakeside Center",
        "Chitwan: Narayangarh Center",
        "Biratnagar: Eastern Center",
      ],
    },
    GRE: {
      icon: <GREIcon fontSize="large" />,
      color: "neutral",
      introduction: [
        "GRE (Graduate Record Examination) is the standard test for graduate school admissions (master's and PhD) worldwide, assessing verbal reasoning, quantitative reasoning, and analytical writing skills. Over 1,300 business schools also accept GRE scores.",
        "Nepali students typically excel in Quantitative (average 158) but struggle with Verbal (average 145). The test's advanced vocabulary (3000+ words) and analytical writing requirements demand focused preparation.",
        "For students targeting US graduate programs (especially STEM fields), a strong GRE score (310+) can compensate for lower GPAs. Top programs often require 320+ (160+ in each section).",
      ],
      quickFacts: [
        { icon: <TimeIcon />, text: "Duration: 3h 45m (1m 10s per question)" },
        {
          icon: <ScoreIcon />,
          text: "Score Range: Verbal 130-170, Quant 130-170",
        },
        { icon: <TestCenterIcon />, text: "Test Centers: Kathmandu, Pokhara" },
        { icon: <ScoreChartIcon />, text: "Nepal Average: 303 (V145 Q158)" },
        { icon: <CountryIcon />, text: "Required by: US, Canada grad schools" },
      ],
      pattern: [
        {
          section: "Verbal",
          time: "60 min",
          questions: "40",
          score: "130-170",
          details:
            "2 sections, 20 questions each (text completion, sentence equivalence)",
        },
        {
          section: "Quantitative",
          time: "70 min",
          questions: "40",
          score: "130-170",
          details:
            "2 sections, 20 questions each (calculus, algebra, geometry)",
        },
        {
          section: "Analytical Writing",
          time: "60 min",
          tasks: "2",
          score: "0-6",
          details: "Analyze an issue + analyze an argument",
        },
        {
          section: "Research/Unscored",
          time: "Varies",
          questions: "Varies",
          score: "-",
          details: "Experimental section (unidentified)",
        },
      ],
      preparation: [
        "16-week rigorous program with vocabulary mastery (50 words/week)",
        "Advanced math concepts review (probability, statistics, combinatorics)",
        "Issue/argument essay templates with sample responses",
        "Computer-adaptive test strategies",
        "Bi-weekly full-length practice tests",
      ],
      scoreInterpretation: [
        { range: "320-340", meaning: "Top 10% - Elite programs" },
        { range: "310-319", meaning: "Competitive - Good programs" },
        { range: "300-309", meaning: "Average - Many options" },
        { range: "260-299", meaning: "Below average - Needs improvement" },
      ],
      testCenters: [
        "Kathmandu: Kantipath Test Center",
        "Pokhara: Lakeside Test Center",
      ],
    },
    GMAT: {
      icon: <GMATIcon fontSize="large" />,
      color: "info",
      introduction: [
        "GMAT (Graduate Management Admission Test) is the primary exam for MBA admissions worldwide, testing analytical writing, quantitative, verbal, and integrated reasoning skills. Over 7,000 business programs across 2,300+ universities accept GMAT scores.",
        "Nepali students typically perform well in Quantitative (average 42) but need improvement in Verbal (average 28) and Integrated Reasoning (average 4.2). The test's unique question types (Data Sufficiency, Critical Reasoning) require specific strategies.",
        "For MBA aspirants, a strong GMAT score (650+) can open doors to top business schools. The average score at top programs is 720+, while 600+ is competitive for most schools.",
      ],
      quickFacts: [
        { icon: <TimeIcon />, text: "Duration: 3h 7m (computer-adaptive)" },
        { icon: <ScoreIcon />, text: "Score Range: 200-800 (Quant + Verbal)" },
        { icon: <TestCenterIcon />, text: "Test Centers: Kathmandu only" },
        { icon: <ScoreChartIcon />, text: "Nepal Average: 570" },
        { icon: <CountryIcon />, text: "Required by: Global MBA programs" },
      ],
      pattern: [
        {
          section: "Quantitative",
          time: "62 min",
          questions: "31",
          score: "6-51",
          details:
            "Problem Solving + Data Sufficiency (algebra, arithmetic, geometry)",
        },
        {
          section: "Verbal",
          time: "65 min",
          questions: "36",
          score: "6-51",
          details:
            "Reading Comprehension, Critical Reasoning, Sentence Correction",
        },
        {
          section: "Integrated Reasoning",
          time: "30 min",
          questions: "12",
          score: "1-8",
          details:
            "Multi-source reasoning, table analysis, graphics interpretation",
        },
        {
          section: "Analytical Writing",
          time: "30 min",
          tasks: "1",
          score: "0-6",
          details: "Analysis of an argument essay",
        },
      ],
      preparation: [
        "12-week intensive MBA-focused program",
        "Data sufficiency problem-solving techniques",
        "Business vocabulary builder (500+ words)",
        "Integrated reasoning graphics interpretation",
        "Weekly computer-adaptive practice tests",
      ],
      scoreInterpretation: [
        { range: "700-800", meaning: "Top 10% - Elite MBA programs" },
        { range: "650-690", meaning: "Competitive - Top 50 programs" },
        { range: "600-640", meaning: "Average - Good options" },
        { range: "500-590", meaning: "Below average - Needs improvement" },
      ],
      testCenters: ["Kathmandu: GMAT Test Center, Naxal"],
    },
  };

  return (
    <Box sx={{ p: { xs: 2, md: 4 }, maxWidth: "1400px", mx: "auto" }}>
      {/* Syllabus Modal */}
      <Modal open={openSyllabus} onClose={() => setOpenSyllabus(false)}>
        <ModalDialog size="lg" sx={{ overflow: "auto", maxHeight: "80vh" }}>
          <ModalClose />
          <Typography
            level="h2"
            sx={{
              mb: 2,
              display: "flex",
              alignItems: "center",
              gap: 1,
              color: `${testData[currentTest].color}.700`,
            }}
          >
            <SyllabusIcon /> {currentTest} Complete Syllabus
          </Typography>

          {currentTest === "SAT" && (
            <Box>
              <Sheet
                variant="outlined"
                sx={{ borderRadius: "sm", p: 2, mb: 2 }}
              >
                <Typography level="title-lg" color="primary">
                  Mathematics (800 points)
                </Typography>
                <Grid container spacing={2} sx={{ mt: 1 }}>
                  <Grid xs={12} md={6}>
                    <Typography level="title-sm">
                      Heart of Algebra (35%)
                    </Typography>
                    <List size="sm">
                      <ListItem>◉ Linear equations and systems</ListItem>
                      <ListItem>◉ Linear inequalities and graphs</ListItem>
                      <ListItem>◉ Word problems with algebra</ListItem>
                    </List>
                  </Grid>
                  <Grid xs={12} md={6}>
                    <Typography level="title-sm">
                      Problem Solving (25%)
                    </Typography>
                    <List size="sm">
                      <ListItem>◉ Ratios, percentages, proportions</ListItem>
                      <ListItem>◉ Unit conversion and analysis</ListItem>
                      <ListItem>
                        ◉ Scatterplots and data interpretation
                      </ListItem>
                    </List>
                  </Grid>
                </Grid>
              </Sheet>

              <Sheet
                variant="outlined"
                sx={{ borderRadius: "sm", p: 2, mb: 2 }}
              >
                <Typography level="title-lg" color="primary">
                  Evidence-Based Reading
                </Typography>
                <List sx={{ "--List-item-paddingY": "8px" }}>
                  <ListItem>
                    ◉ 1 literature passage (classic or contemporary fiction)
                  </ListItem>
                  <ListItem>
                    ◉ 1 history/social studies passage (US founding documents)
                  </ListItem>
                  <ListItem>
                    ◉ 1 science passage (earth science, biology, chemistry)
                  </ListItem>
                  <ListItem>
                    ◉ 1 social science passage (economics, psychology)
                  </ListItem>
                  <ListItem>◉ 1 paired passage (comparative reading)</ListItem>
                </List>
              </Sheet>
            </Box>
          )}

          {currentTest === "IELTS" && (
            <Box>
              <Sheet
                variant="outlined"
                sx={{ borderRadius: "sm", p: 2, mb: 2 }}
              >
                <Typography level="title-lg" color="success">
                  Writing Task 2 (Essay)
                </Typography>
                <List sx={{ "--List-item-paddingY": "8px" }}>
                  <ListItem>◉ 250-word minimum</ListItem>
                  <ListItem>
                    ◉ 4-5 paragraphs (introduction, body, conclusion)
                  </ListItem>
                  <ListItem>
                    ◉ Common topics: Education, Technology, Environment
                  </ListItem>
                  <ListItem>
                    ◉ Assessment criteria: Task response, coherence, vocabulary,
                    grammar
                  </ListItem>
                </List>
              </Sheet>

              <Sheet variant="outlined" sx={{ borderRadius: "sm", p: 2 }}>
                <Typography level="title-lg" color="success">
                  Speaking Part 3
                </Typography>
                <List sx={{ "--List-item-paddingY": "8px" }}>
                  <ListItem>◉ 4-5 minute discussion</ListItem>
                  <ListItem>
                    ◉ Abstract questions related to Part 2 topic
                  </ListItem>
                  <ListItem>
                    ◉ Assessment: Fluency, vocabulary, grammar, pronunciation
                  </ListItem>
                  <ListItem>
                    ◉ Common themes: Society, education, technology
                  </ListItem>
                </List>
              </Sheet>
            </Box>
          )}

          {currentTest === "GMAT" && (
            <Box>
              <Sheet
                variant="outlined"
                sx={{ borderRadius: "sm", p: 2, mb: 2 }}
              >
                <Typography level="title-lg" color="info">
                  Quantitative Section
                </Typography>
                <Grid container spacing={2} sx={{ mt: 1 }}>
                  <Grid xs={12} md={6}>
                    <Typography level="title-sm">
                      Problem Solving (≈50%)
                    </Typography>
                    <List size="sm">
                      <ListItem>
                        ◉ Arithmetic: Number properties, percentages
                      </ListItem>
                      <ListItem>◉ Algebra: Equations, inequalities</ListItem>
                      <ListItem>◉ Geometry: Lines, angles, circles</ListItem>
                    </List>
                  </Grid>
                  <Grid xs={12} md={6}>
                    <Typography level="title-sm">
                      Data Sufficiency (≈50%)
                    </Typography>
                    <List size="sm">
                      <ListItem>◉ Analyze quantitative problems</ListItem>
                      <ListItem>◉ Determine if data is sufficient</ListItem>
                      <ListItem>◉ Unique to GMAT format</ListItem>
                    </List>
                  </Grid>
                </Grid>
              </Sheet>
            </Box>
          )}
          {currentTest === "PTE" && (
            <Box>
              <Sheet
                variant="outlined"
                sx={{ borderRadius: "sm", p: 2, mb: 2 }}
              >
                <Typography level="title-lg" color="danger">
                  Speaking Section
                </Typography>
                <Grid container spacing={2} sx={{ mt: 1 }}>
                  <Grid xs={12} md={6}>
                    <Typography level="title-sm">Read Aloud (30%)</Typography>
                    <List size="sm">
                      <ListItem>◉ 6-7 texts (60 words each)</ListItem>
                      <ListItem>
                        ◉ Assesses oral fluency and pronunciation
                      </ListItem>
                      <ListItem>◉ 30-40 seconds preparation time</ListItem>
                    </List>
                  </Grid>
                  <Grid xs={12} md={6}>
                    <Typography level="title-sm">
                      Describe Image (25%)
                    </Typography>
                    <List size="sm">
                      <ListItem>◉ Charts, graphs, maps or pictures</ListItem>
                      <ListItem>◉ 25 seconds to prepare</ListItem>
                      <ListItem>◉ 40 seconds response time</ListItem>
                    </List>
                  </Grid>
                </Grid>
              </Sheet>

              <Sheet variant="outlined" sx={{ borderRadius: "sm", p: 2 }}>
                <Typography level="title-lg" color="danger">
                  Writing Section
                </Typography>
                <List sx={{ "--List-item-paddingY": "8px" }}>
                  <ListItem>
                    ◉ Summarize Written Text (1-2 sentences in 10 minutes)
                  </ListItem>
                  <ListItem>◉ Essay (200-300 words in 20 minutes)</ListItem>
                  <ListItem>
                    ◉ Assessment: Content, form, grammar, vocabulary
                  </ListItem>
                  <ListItem>
                    ◉ Common topics: Education, Technology, Environment
                  </ListItem>
                </List>
              </Sheet>
            </Box>
          )}

          {currentTest === "TOEFL" && (
            <Box>
              <Sheet
                variant="outlined"
                sx={{ borderRadius: "sm", p: 2, mb: 2 }}
              >
                <Typography level="title-lg" color="warning">
                  Integrated Writing Task
                </Typography>
                <Grid container spacing={2} sx={{ mt: 1 }}>
                  <Grid xs={12} md={6}>
                    <Typography level="title-sm">Reading Passage</Typography>
                    <List size="sm">
                      <ListItem>◉ 250-300 words academic text</ListItem>
                      <ListItem>◉ 3 minutes to read</ListItem>
                      <ListItem>◉ Main ideas and key points</ListItem>
                    </List>
                  </Grid>
                  <Grid xs={12} md={6}>
                    <Typography level="title-sm">Lecture</Typography>
                    <List size="sm">
                      <ListItem>◉ 2-3 minutes audio clip</ListItem>
                      <ListItem>◉ Challenges reading points</ListItem>
                      <ListItem>◉ 20 minutes to write 150-225 words</ListItem>
                    </List>
                  </Grid>
                </Grid>
              </Sheet>

              <Sheet variant="outlined" sx={{ borderRadius: "sm", p: 2 }}>
                <Typography level="title-lg" color="warning">
                  Speaking Section
                </Typography>
                <List sx={{ "--List-item-paddingY": "8px" }}>
                  <ListItem>◉ 4 tasks (independent and integrated)</ListItem>
                  <ListItem>◉ 15-30 seconds preparation time</ListItem>
                  <ListItem>◉ 45-60 seconds response time</ListItem>
                  <ListItem>
                    ◉ Assessment: Delivery, language use, topic development
                  </ListItem>
                </List>
              </Sheet>
            </Box>
          )}

          {currentTest === "GRE" && (
            <Box>
              <Sheet
                variant="outlined"
                sx={{ borderRadius: "sm", p: 2, mb: 2 }}
              >
                <Typography level="title-lg" color="neutral">
                  Verbal Reasoning
                </Typography>
                <Grid container spacing={2} sx={{ mt: 1 }}>
                  <Grid xs={12} md={6}>
                    <Typography level="title-sm">
                      Text Completion (30%)
                    </Typography>
                    <List size="sm">
                      <ListItem>◉ 1-5 sentence passages with blanks</ListItem>
                      <ListItem>◉ 1-3 blanks per question</ListItem>
                      <ListItem>
                        ◉ Tests vocabulary and sentence structure
                      </ListItem>
                    </List>
                  </Grid>
                  <Grid xs={12} md={6}>
                    <Typography level="title-sm">
                      Reading Comprehension (40%)
                    </Typography>
                    <List size="sm">
                      <ListItem>◉ 10-12 passages (100-400 words)</ListItem>
                      <ListItem>◉ Multiple-choice questions</ListItem>
                      <ListItem>
                        ◉ Tests understanding of complex texts
                      </ListItem>
                    </List>
                  </Grid>
                </Grid>
              </Sheet>

              <Sheet variant="outlined" sx={{ borderRadius: "sm", p: 2 }}>
                <Typography level="title-lg" color="neutral">
                  Analytical Writing
                </Typography>
                <List sx={{ "--List-item-paddingY": "8px" }}>
                  <ListItem>◉ Analyze an Issue (30 minutes)</ListItem>
                  <ListItem>◉ Analyze an Argument (30 minutes)</ListItem>
                  <ListItem>◉ Scored 0-6 in half-point increments</ListItem>
                  <ListItem>
                    ◉ Assessment: Critical thinking and writing skills
                  </ListItem>
                </List>
              </Sheet>
            </Box>
          )}
        </ModalDialog>
      </Modal>

      {/* Exam Pattern Modal */}
      <Modal open={openPattern} onClose={() => setOpenPattern(false)}>
        <ModalDialog size="lg" sx={{ overflow: "auto", maxHeight: "80vh" }}>
          <ModalClose />
          <Typography
            level="h2"
            sx={{
              mb: 2,
              display: "flex",
              alignItems: "center",
              gap: 1,
              color: `${testData[currentTest].color}.700`,
            }}
          >
            <PatternIcon /> {currentTest} Detailed Exam Pattern
          </Typography>

          <Table borderAxis="bothBetween" hoverRow sx={{ mb: 2 }}>
            <thead>
              <tr>
                <th>Section</th>
                <th>Time</th>
                <th>
                  {["IELTS", "PTE", "TOEFL", "GRE", "GMAT"].includes(
                    currentTest
                  )
                    ? "Tasks"
                    : "Questions"}
                </th>
                <th>Score</th>
                <th>Details</th>
              </tr>
            </thead>
            <tbody>
              {testData[currentTest].pattern.map((section, index) => (
                <tr key={index}>
                  <td>{section.section}</td>
                  <td>{section.time}</td>
                  <td>{section.questions || section.tasks}</td>
                  <td>{section.score}</td>
                  <td>{section.details}</td>
                </tr>
              ))}
            </tbody>
          </Table>

          {currentTest === "IELTS" && (
            <Typography level="body-sm" sx={{ fontStyle: "italic" }}>
              *Academic and General Training versions available. Academic
              required for university admission.
            </Typography>
          )}
        </ModalDialog>
      </Modal>

      {/* Test Selection Tabs */}
      <Tabs
        defaultValue="SAT"
        onChange={(e, value) => setCurrentTest(value)}
        sx={{
          mb: 4,
          "& .MuiTab-root": {
            fontSize: { xs: "0.875rem", sm: "1rem" },
            py: 1.5,
            minHeight: "auto",
          },
        }}
      >
        <TabList
          variant="plain"
          sx={{
            "--List-padding": "0px",
            "--List-radius": "0px",
            "--ListItem-minHeight": "48px",
            "& .MuiTab-root": {
              fontWeight: "md",
              color: "text.secondary",
              "&.Mui-selected": {
                color: `${testData[currentTest].color}.500`,
                bgcolor: "transparent",
                "&::after": {
                  height: 3,
                  bgcolor: `${testData[currentTest].color}.500`,
                },
              },
              "&:hover": {
                bgcolor: "transparent",
              },
            },
          }}
        >
          <Tab value="SAT" indicatorInset>
            <SATIcon sx={{ mr: 1 }} /> SAT
          </Tab>
          <Tab value="IELTS" indicatorInset>
            <IELTSIcon sx={{ mr: 1 }} /> IELTS
          </Tab>
          <Tab value="PTE" indicatorInset>
            <PTEIcon sx={{ mr: 1 }} /> PTE
          </Tab>
          <Tab value="TOEFL" indicatorInset>
            <TOEFLICon sx={{ mr: 1 }} /> TOEFL
          </Tab>
          <Tab value="GRE" indicatorInset>
            <GREIcon sx={{ mr: 1 }} /> GRE
          </Tab>
          <Tab value="GMAT" indicatorInset>
            <GMATIcon sx={{ mr: 1 }} /> GMAT
          </Tab>
        </TabList>
      </Tabs>

      {/* Main Content */}
      <Card
        variant="outlined"
        sx={{
          mb: 4,
          borderTop: "4px solid",
          borderColor: `${testData[currentTest].color}.500`,
          boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
          "&:hover": {
            boxShadow: "0 6px 24px rgba(0,0,0,0.1)",
          },
        }}
      >
        <CardContent>
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              gap: 3,
              mb: 4,
            }}
          >
            <Box sx={{ flex: 1 }}>
              <Typography
                level="h1"
                sx={{
                  mb: 3,
                  color: `${testData[currentTest].color}.700`,
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                }}
              >
                {testData[currentTest].icon} {currentTest} Preparation
              </Typography>

              {/* Introduction Section */}
              <Card
                variant="plain"
                sx={{
                  backgroundColor: `${testData[currentTest].color}.50`,
                  mb: 3,
                  borderLeft: "4px solid",
                  borderColor: `${testData[currentTest].color}.500`,
                }}
              >
                <CardContent>
                  <Typography level="h2" sx={{ mb: 1.5 }}>
                    About {currentTest}
                  </Typography>
                  {testData[currentTest].introduction.map((para, index) => (
                    <Typography
                      key={index}
                      sx={{
                        mb:
                          index < testData[currentTest].introduction.length - 1
                            ? 1.5
                            : 0,
                      }}
                    >
                      {para}
                    </Typography>
                  ))}
                </CardContent>
              </Card>

              {/* Exam Pattern Quick View */}
              <Card variant="outlined">
                <CardContent>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      mb: 2,
                    }}
                  >
                    <Typography
                      level="h2"
                      sx={{ display: "flex", alignItems: "center", gap: 1 }}
                    >
                      <PatternIcon /> Exam Structure
                    </Typography>
                    <Button
                      variant="outlined"
                      size="sm"
                      onClick={() => setOpenPattern(true)}
                      sx={{
                        color: `${testData[currentTest].color}.700`,
                        borderColor: `${testData[currentTest].color}.300`,
                        "&:hover": {
                          borderColor: `${testData[currentTest].color}.500`,
                          bgcolor: `${testData[currentTest].color}.50`,
                        },
                      }}
                    >
                      View Full Pattern
                    </Button>
                  </Box>
                  <Table borderAxis="bothBetween" hoverRow>
                    <thead>
                      <tr>
                        <th>Section</th>
                        <th>Time</th>
                        <th>
                          {["IELTS", "PTE", "TOEFL", "GRE", "GMAT"].includes(
                            currentTest
                          )
                            ? "Tasks"
                            : "Questions"}
                        </th>
                        <th>Score</th>
                      </tr>
                    </thead>
                    <tbody>
                      {testData[currentTest].pattern
                        .slice(0, 3)
                        .map((section, index) => (
                          <tr key={index}>
                            <td>{section.section}</td>
                            <td>{section.time}</td>
                            <td>{section.questions || section.tasks}</td>
                            <td>{section.score}</td>
                          </tr>
                        ))}
                    </tbody>
                  </Table>
                </CardContent>
              </Card>
            </Box>

            {/* Quick Facts Sidebar */}
            <Box sx={{ width: { xs: "100%", md: "350px" } }}>
              <Card variant="soft" color={testData[currentTest].color}>
                <CardContent>
                  <Typography level="h3" sx={{ mb: 2 }}>
                    Key Facts
                  </Typography>
                  <List>
                    {testData[currentTest].quickFacts.map((fact, index) => (
                      <ListItem key={index}>
                        <ListItemDecorator
                          sx={{ color: `${testData[currentTest].color}.700` }}
                        >
                          {fact.icon}
                        </ListItemDecorator>
                        {fact.text}
                      </ListItem>
                    ))}
                  </List>
                </CardContent>
              </Card>

              {/* Score Interpretation */}
              <Card variant="outlined" sx={{ mt: 3 }}>
                <CardContent>
                  <Typography
                    level="h3"
                    sx={{
                      mb: 1,
                      display: "flex",
                      alignItems: "center",
                      gap: 1,
                    }}
                  >
                    <ScoreChartIcon /> Score Interpretation
                  </Typography>
                  <Table size="sm" borderAxis="none">
                    <thead>
                      <tr>
                        <th>Score Range</th>
                        <th>Meaning</th>
                      </tr>
                    </thead>
                    <tbody>
                      {testData[currentTest].scoreInterpretation.map(
                        (item, index) => (
                          <tr key={index}>
                            <td>{item.range}</td>
                            <td>{item.meaning}</td>
                          </tr>
                        )
                      )}
                    </tbody>
                  </Table>
                </CardContent>
              </Card>
            </Box>
          </Box>

          {/* Preparation Strategy */}
          <Card variant="outlined" sx={{ mb: 3 }}>
            <CardContent>
              <Typography
                level="h2"
                sx={{ mb: 2, display: "flex", alignItems: "center", gap: 1 }}
              >
                <ArticleIcon /> Our {currentTest} Preparation Approach
              </Typography>

              <Grid container spacing={3} sx={{ mb: 2 }}>
                {testData[currentTest].preparation.map((item, index) => (
                  <Grid xs={12} sm={6} md={4} key={index}>
                    <Card
                      variant="plain"
                      sx={{
                        height: "100%",
                        transition: "transform 0.2s",
                        "&:hover": {
                          transform: "translateY(-4px)",
                        },
                      }}
                    >
                      <CardContent sx={{ textAlign: "center" }}>
                        <Box
                          sx={{
                            fontSize: "xl2",
                            mb: 1,
                            color: `${testData[currentTest].color}.500`,
                            display: "flex",
                            justifyContent: "center",
                          }}
                        >
                          {index === 0 && <ClassIcon fontSize="large" />}
                          {index === 1 && <BookIcon fontSize="large" />}
                          {index === 2 && <PracticeIcon fontSize="large" />}
                          {index === 3 && <QuestionIcon fontSize="large" />}
                          {index === 4 && <ScholarshipIcon fontSize="large" />}
                        </Box>
                        <Typography level="title-lg" sx={{ mb: 1 }}>
                          {item.split(":")[0]}
                        </Typography>
                        <Typography level="body-sm">
                          {item.split(":")[1] || item}
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </CardContent>
          </Card>

          {/* Test Centers */}
          {testData[currentTest].testCenters && (
            <Card variant="outlined">
              <CardContent>
                <Typography
                  level="h2"
                  sx={{ mb: 2, display: "flex", alignItems: "center", gap: 1 }}
                >
                  <TestCenterIcon /> {currentTest} Test Centers in Nepal
                </Typography>
                <Grid container spacing={2}>
                  {testData[currentTest].testCenters.map((center, index) => (
                    <Grid xs={12} sm={6} key={index}>
                      <Chip
                        variant="outlined"
                        color={testData[currentTest].color}
                        sx={{ width: "100%", justifyContent: "flex-start" }}
                      >
                        {center}
                      </Chip>
                    </Grid>
                  ))}
                </Grid>
              </CardContent>
            </Card>
          )}
        </CardContent>
      </Card>

      {/* Action Buttons */}
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: 3,
          mb: 4,
        }}
      >
        <Button
          variant="outlined"
          size="lg"
          startDecorator={<SyllabusIcon />}
          onClick={() => setOpenSyllabus(true)}
          sx={{
            minWidth: 220,
            color: `${testData[currentTest].color}.700`,
            borderColor: `${testData[currentTest].color}.300`,
            "&:hover": {
              borderColor: `${testData[currentTest].color}.500`,
              bgcolor: `${testData[currentTest].color}.50`,
            },
          }}
        >
          View Complete Syllabus
        </Button>
        <Button
          variant="solid"
          color={testData[currentTest].color}
          size="lg"
          startDecorator={<StartIcon />}
          onClick={() =>
            window.open("https://demo.osom.global/student/cDnhFR", "_blank")
          }
          sx={{
            minWidth: 260,
            boxShadow: `0 4px 16px ${
              theme.vars.palette[testData[currentTest].color][300]
            }`,
            "&:hover": {
              boxShadow: `0 6px 20px ${
                theme.vars.palette[testData[currentTest].color][400]
              }`,
            },
          }}
        >
          Start {currentTest} Preparation
        </Button>
      </Box>

      {/* Test Comparison (mobile only) */}
      <Box sx={{ display: { xs: "block", md: "none" }, mb: 4 }}>
        <Typography level="h3" sx={{ mb: 2, textAlign: "center" }}>
          Which Test is Right For You?
        </Typography>
        <Card variant="outlined">
          <CardContent>
            <Table borderAxis="bothBetween">
              <thead>
                <tr>
                  <th>Test</th>
                  <th>Purpose</th>
                  <th>Duration</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>SAT</td>
                  <td>US Undergrad</td>
                  <td>3h</td>
                </tr>
                <tr>
                  <td>IELTS</td>
                  <td>UK/AU Study</td>
                  <td>2h45m</td>
                </tr>
                <tr>
                  <td>GMAT</td>
                  <td>MBA Programs</td>
                  <td>3h7m</td>
                </tr>
              </tbody>
            </Table>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
};

// Theme extension for custom shadows
const theme = {
  vars: {
    palette: {
      primary: { 300: "#90caf9", 400: "#64b5f6" },
      success: { 300: "#81c784", 400: "#66bb6a" },
      danger: { 300: "#e57373", 400: "#ef5350" },
      warning: { 300: "#ffb74d", 400: "#ffa726" },
      neutral: { 300: "#a1887f", 400: "#8d6e63" },
      info: { 300: "#4fc3f7", 400: "#29b6f6" },
    },
  },
};

export default TestPreparationPage;
