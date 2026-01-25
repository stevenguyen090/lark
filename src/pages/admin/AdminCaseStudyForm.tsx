import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const AdminCaseStudyForm = () => {
  const { id } = useParams();
  const isEditing = Boolean(id);
  console.log('Current ID:', id);
  console.log('Editing Mode:', isEditing);

  const handleSubmit = (formData) => {
    console.log('Form data:', formData);
    const validationResult = validateFormData(formData);
    console.log('Validation Result:', validationResult);

    if (!validationResult.isValid) {
      // Handle validation errors
      return;
    }

    const dataToSave = transformDataForSubmission(formData);
    console.log('Data to save:', dataToSave);

    if (isEditing) {
      console.log('Before calling updateMutation');
      updateMutation.mutate({ id, data: dataToSave }, {
        onSuccess: () => {
          console.log('Update successful');
        },
        onError: (error) => {
          console.error('Update failed:', error);
        }
      });
    } else {
      console.log('Before calling createMutation');
      createMutation.mutate(dataToSave, {
        onSuccess: () => {
          console.log('Create successful');
        },
        onError: (error) => {
          console.error('Create failed:', error);
        }
      });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* form fields go here */}
      <button type="submit">Save Case Study</button>
    </form>
  );
};

export default AdminCaseStudyForm;