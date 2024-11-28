function VoiceSettings({ onToggle, isEnabled }) {
    return (
        <div>
            <label>
                <input
                    type="checkbox"
                    checked={isEnabled}
                    onChange={(e) => onToggle(e.target.checked)}
                />
                Enable Voice-Over
            </label>
        </div>
    );
}