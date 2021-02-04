export const createJob = /* GraphQL */ `
  mutation CreateJob(
    $input: CreateJobInput!
    $condition: ModelJobConditionInput
  ) {
    createJob(input: $input, condition: $condition) {
      id
      jobName
      jobTitle
      companyName
      comapanyWebsite
      aboutCompany
      experience
      duration
      salary
      noOfPosition
      jobLocation
      lastDate
      createdAt
      updatedAt
    }
    {
      id
    }
  }
`;