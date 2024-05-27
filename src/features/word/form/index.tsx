import { ChangeEvent, FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { IoText } from "react-icons/io5";
import { RiEnglishInput } from "react-icons/ri";
import { CgTranscript } from "react-icons/cg";
import { PiUpload } from "react-icons/pi";
import { useCreateNewWord } from "@entities/word";
import { TranslateToEnglishButton, TranslateToKazakhButton } from "@entities/translate";
import { GetTranscriptionOfWordButton } from "@entities/gpt";
import { Button, ManualInput, Loader, Toast } from "@shared/ui";
import { VoiceType } from "@shared/consts/enums";
import { VoiceCard, voices } from "@entities/voice";
import { DASHBOARD_WORDS_PAGE_ROUTE } from "@shared/consts/routes";
import styles from "./CreateWordForm.module.scss";

export const CreateWordForm: React.FC = () => {
  const [kazValue, setKazValue] = useState<string>("");
  const [engValue, setEngValue] = useState<string>("");
  const [transcriptionValue, setTranscriptionValue] = useState<string>("");
  const [file, setFile] = useState<File | null>(null);
  const [voice, setVoice] = useState<VoiceType>(VoiceType.JAMES);

  const navigate = useNavigate();

  const { mutate, isLoading, isError } = useCreateNewWord();

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files ? event.target.files[0] : null;
    if (file) {
      setFile(file);
    }
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("kaz", kazValue);
    formData.append("eng", engValue);
    formData.append("transcription", transcriptionValue);
    formData.append("file", file!);
    formData.append("voice", voice);

    mutate(formData, {
      onSuccess: () => {
        navigate(DASHBOARD_WORDS_PAGE_ROUTE);
      }
    });
  };

  return (
    <form className={styles.form} onSubmit={onSubmit}>
      <div className={styles.inputs}>
        <div className={styles.part}>
          <ManualInput
            message="Сөздің ағылшынша аудармасың толтырып, Google Translate арқылы сөздің қазақша аудармасың ала аласыз"
            value={kazValue}
            setValue={setKazValue}
            placeholder="Сөздің қазақша аудармасың еңгізіңіз"
            title="Сөздің қазақша аудармасы"
            Icon={IoText}
          />
          <TranslateToKazakhButton value={engValue} setValue={setKazValue} />
        </div>
        <div className={styles.part}>
          <ManualInput
            message="Сөздің қазақша аудармасың толтырып, Google Translate арқылы сөздің ағылшынша аудармасың ала аласыз"
            value={engValue}
            setValue={setEngValue}
            title="Сөздің ағылшынша аудармасы"
            placeholder="Сөздің ағылшынша аудармасың еңгізіңіз"
            Icon={RiEnglishInput}
          />
          <TranslateToEnglishButton value={kazValue} setValue={setEngValue} />
        </div>
        <div className={styles.part}>
          <ManualInput
            message="Сөздің ағылшынша аудармасың толтырып, OpenAI арқылы сөздің транскрипциясың ала аласыз"
            value={transcriptionValue}
            setValue={setTranscriptionValue}
            placeholder="Сөздің транскрипциясың еңгізіңіз"
            title="Сөздің транскрипциясы"
            Icon={CgTranscript}
          />
          <GetTranscriptionOfWordButton value={engValue} setValue={setTranscriptionValue} />
        </div>
        <div>
          <p className={styles.title}>Дауысты таңдау</p>
          <div className={styles.voices}>
            {voices.map((item) => (
              <VoiceCard voice={item} activeVoiceType={voice} setVoice={setVoice} key={item.name} />
            ))}
          </div>
        </div>
      </div>
      <div>
        <p className={styles.title}>Суретті жүктеу</p>
        <label htmlFor="file" className={styles.uploader}>
          <PiUpload />
          <p>Суретті жүктеу</p>
        </label>
        <input
          className={styles.file}
          id="file"
          type="file"
          onChange={handleFileChange}
          accept="image/*"
        />
        {file && (
          <div>
            <p className={styles.title}>Суретті алдын ала қарау</p>
            <img src={URL.createObjectURL(file)} alt="Image Preview" className={styles.preview} />
          </div>
        )}
        <Button title="Сөзді қосу" marginTop={16} />
      </div>
      {isLoading && <Loader isFullPage={true} />}
      {isError && (
        <Toast isFail={true} title="Қате пайда болды" text="Сөзді қосу кезінде қате пайда болды" />
      )}
    </form>
  );
};
