import React, { useState } from 'react';
import { RESERVATION_DATA } from '@/data/reservation.data';
import { FormPayload } from './ReservationSuccess';
import styles from './ReservationSection.module.css';

interface ReservationFormProps {
  formData: FormPayload;
  onChange: <K extends keyof FormPayload>(field: K, value: FormPayload[K]) => void;
  onSubmitSuccess: () => void;
  formRef?: React.Ref<HTMLFormElement>;
}

interface FormErrors {
  fullName?: string;
  email?: string;
  phone?: string;
}

export const ReservationForm: React.FC<ReservationFormProps> = ({
  formData,
  onChange,
  onSubmitSuccess,
  formRef,
}) => {
  const [errors, setErrors] = useState<FormErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});

  const validate = (): boolean => {
    const nextErrors: FormErrors = {};

    if (!formData.fullName.trim()) {
      nextErrors.fullName = 'Please enter your full name.';
    }

    if (!formData.email.trim()) {
      nextErrors.email = 'Please provide a contact email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      nextErrors.email = 'Please provide a valid email address.';
    }

    if (!formData.phone.trim()) {
      nextErrors.phone = 'Please provide a contact telephone or WhatsApp number.';
    } else if (formData.phone.trim().length < 7) {
      nextErrors.phone = 'Please provide a valid contact number.';
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleFieldChange = <K extends keyof FormPayload>(
    field: K,
    value: FormPayload[K]
  ) => {
    onChange(field, value);
    if (errors[field as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setTouched({
      fullName: true,
      email: true,
      phone: true,
    });

    if (validate()) {
      onSubmitSuccess();
    }
  };

  return (
    <form
      ref={formRef}
      className={styles.enquiryForm}
      onSubmit={handleSubmit}
      noValidate
      aria-label="Concierge Reservation Enquiry Form"
    >
      <div className={styles.formHeader}>
        <h3 className={styles.formTitle}>Concierge Enquiry Form</h3>
        <p className={styles.formSubtitle}>
          Complete your preferences below. Your bespoke stay proposal will be
          personally compiled by our Pushkar team.
        </p>
      </div>

      {/* Enquiry Type Selector */}
      <div className={styles.fieldGroup}>
        <label className={styles.fieldLabel} id="enquiry-type-label">
          ENQUIRY TYPE <span className={styles.requiredStar}>*</span>
        </label>
        <div
          className={styles.typeRadioGrid}
          role="radiogroup"
          aria-labelledby="enquiry-type-label"
        >
          {RESERVATION_DATA.enquiryTypes.map((type) => {
            const isSelected = formData.enquiryType === type.id;
            return (
              <button
                key={type.id}
                type="button"
                role="radio"
                aria-checked={isSelected}
                onClick={() => handleFieldChange('enquiryType', type.id)}
                className={`${styles.typeRadioButton} ${
                  isSelected ? styles.typeRadioSelected : ''
                }`}
              >
                <span className={styles.radioTitle}>{type.label}</span>
                <span className={styles.radioDesc}>{type.description}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Guest Personal Information Grid */}
      <div className={styles.formRowDual}>
        {/* Full Name */}
        <div className={styles.fieldGroup}>
          <label htmlFor="res-full-name" className={styles.fieldLabel}>
            FULL NAME <span className={styles.requiredStar}>*</span>
          </label>
          <input
            id="res-full-name"
            type="text"
            required
            autoComplete="name"
            value={formData.fullName}
            onChange={(e) => handleFieldChange('fullName', e.target.value)}
            onBlur={() => setTouched((p) => ({ ...p, fullName: true }))}
            placeholder="e.g. Maharani Gayatri Devi"
            className={`${styles.textInput} ${
              touched.fullName && errors.fullName ? styles.inputError : ''
            }`}
            aria-invalid={touched.fullName && !!errors.fullName}
            aria-describedby={errors.fullName ? 'res-name-error' : undefined}
          />
          {touched.fullName && errors.fullName && (
            <span id="res-name-error" className={styles.errorMessage} role="alert">
              {errors.fullName}
            </span>
          )}
        </div>

        {/* Email Address */}
        <div className={styles.fieldGroup}>
          <label htmlFor="res-email" className={styles.fieldLabel}>
            EMAIL ADDRESS <span className={styles.requiredStar}>*</span>
          </label>
          <input
            id="res-email"
            type="email"
            required
            autoComplete="email"
            value={formData.email}
            onChange={(e) => handleFieldChange('email', e.target.value)}
            onBlur={() => setTouched((p) => ({ ...p, email: true }))}
            placeholder="e.g. sanctuary@example.com"
            className={`${styles.textInput} ${
              touched.email && errors.email ? styles.inputError : ''
            }`}
            aria-invalid={touched.email && !!errors.email}
            aria-describedby={errors.email ? 'res-email-error' : undefined}
          />
          {touched.email && errors.email && (
            <span id="res-email-error" className={styles.errorMessage} role="alert">
              {errors.email}
            </span>
          )}
        </div>
      </div>

      {/* Phone / WhatsApp Number */}
      <div className={styles.fieldGroup}>
        <label htmlFor="res-phone" className={styles.fieldLabel}>
          PHONE / WHATSAPP NUMBER <span className={styles.requiredStar}>*</span>
        </label>
        <input
          id="res-phone"
          type="tel"
          required
          autoComplete="tel"
          value={formData.phone}
          onChange={(e) => handleFieldChange('phone', e.target.value)}
          onBlur={() => setTouched((p) => ({ ...p, phone: true }))}
          placeholder="+91 98290 XXXXX"
          className={`${styles.textInput} ${
            touched.phone && errors.phone ? styles.inputError : ''
          }`}
          aria-invalid={touched.phone && !!errors.phone}
          aria-describedby={errors.phone ? 'res-phone-error' : undefined}
        />
        {touched.phone && errors.phone && (
          <span id="res-phone-error" className={styles.errorMessage} role="alert">
            {errors.phone}
          </span>
        )}
      </div>

      {/* Stay Dates (Optional) */}
      <div className={styles.formRowDual}>
        <div className={styles.fieldGroup}>
          <label htmlFor="res-arrival" className={styles.fieldLabel}>
            ARRIVAL DATE <span className={styles.optionalNote}>(Optional)</span>
          </label>
          <input
            id="res-arrival"
            type="date"
            value={formData.arrivalDate}
            onChange={(e) => handleFieldChange('arrivalDate', e.target.value)}
            className={styles.dateInput}
          />
        </div>

        <div className={styles.fieldGroup}>
          <label htmlFor="res-departure" className={styles.fieldLabel}>
            DEPARTURE DATE <span className={styles.optionalNote}>(Optional)</span>
          </label>
          <input
            id="res-departure"
            type="date"
            value={formData.departureDate}
            onChange={(e) => handleFieldChange('departureDate', e.target.value)}
            className={styles.dateInput}
          />
        </div>
      </div>

      {/* Villa Preference (From 6 Verified Signature Villas) */}
      <div className={styles.fieldGroup}>
        <label htmlFor="res-villa" className={styles.fieldLabel}>
          VILLA PREFERENCE <span className={styles.optionalNote}>(Optional)</span>
        </label>
        <select
          id="res-villa"
          value={formData.villaPreference}
          onChange={(e) => handleFieldChange('villaPreference', e.target.value)}
          className={styles.selectInput}
        >
          {RESERVATION_DATA.villas.map((villa) => (
            <option key={villa.id} value={villa.id}>
              {villa.name}
            </option>
          ))}
        </select>
      </div>

      {/* Personal Message / Notes */}
      <div className={styles.fieldGroup}>
        <label htmlFor="res-notes" className={styles.fieldLabel}>
          PERSONAL NOTES OR CELEBRATION PLANS{' '}
          <span className={styles.optionalNote}>(Optional)</span>
        </label>
        <textarea
          id="res-notes"
          rows={3}
          value={formData.notes}
          onChange={(e) => handleFieldChange('notes', e.target.value)}
          placeholder="Share your travel rhythm, culinary preferences, or private celebration requests..."
          className={styles.textareaInput}
        />
      </div>

      {/* Submit Button */}
      <div className={styles.submitContainer}>
        <button
          type="submit"
          className={styles.submitButton}
          aria-label="Compile and review reservation enquiry"
        >
          <span>COMPILE CONCIERGE ENQUIRY</span>
          <span className={styles.arrowIcon} aria-hidden="true">
            →
          </span>
        </button>
        <p className={styles.privacyNote}>
          Your inquiry is transmitted exclusively to the private concierge host at
          Maya Garh Pushkar.
        </p>
      </div>
    </form>
  );
};
