/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
      id
      firstName
      lastName
      age
      sex
      email
      mobileNo
      address
      collegeName
      companyName
      officeAddress
      userPost
      companyWebsite
      userRole
      degree
      branch
      courseCompletion
      collegeAddress
      resumeFile
      hireQuestion
      jobApplicant {
        items {
          id
          userID
          jobID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
      id
      firstName
      lastName
      age
      sex
      email
      mobileNo
      address
      collegeName
      companyName
      officeAddress
      userPost
      companyWebsite
      userRole
      degree
      branch
      courseCompletion
      collegeAddress
      resumeFile
      hireQuestion
      jobApplicant {
        items {
          id
          userID
          jobID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
      id
      firstName
      lastName
      age
      sex
      email
      mobileNo
      address
      collegeName
      companyName
      officeAddress
      userPost
      companyWebsite
      userRole
      degree
      branch
      courseCompletion
      collegeAddress
      resumeFile
      hireQuestion
      jobApplicant {
        items {
          id
          userID
          jobID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const createJobApplicant = /* GraphQL */ `
  mutation CreateJobApplicant(
    $input: CreateJobApplicantInput!
    $condition: ModelJobApplicantConditionInput
  ) {
    createJobApplicant(input: $input, condition: $condition) {
      id
      userID
      jobID
      user {
        id
        firstName
        lastName
        age
        sex
        email
        mobileNo
        address
        collegeName
        companyName
        officeAddress
        userPost
        companyWebsite
        userRole
        degree
        branch
        courseCompletion
        collegeAddress
        resumeFile
        hireQuestion
        jobApplicant {
          nextToken
        }
        createdAt
        updatedAt
      }
      job {
        id
        jobUserId
        jobName
        jobTitle
        jobType
        companyName
        comapanyWebsite
        aboutCompany
        experience
        duration
        salary
        noOfPosition
        jobLocation
        lastDate
        jobDescription {
          nextToken
        }
        jobCretaria {
          nextToken
        }
        jobSkills {
          nextToken
        }
        perks {
          nextToken
        }
        jobApplicants {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateJobApplicant = /* GraphQL */ `
  mutation UpdateJobApplicant(
    $input: UpdateJobApplicantInput!
    $condition: ModelJobApplicantConditionInput
  ) {
    updateJobApplicant(input: $input, condition: $condition) {
      id
      userID
      jobID
      user {
        id
        firstName
        lastName
        age
        sex
        email
        mobileNo
        address
        collegeName
        companyName
        officeAddress
        userPost
        companyWebsite
        userRole
        degree
        branch
        courseCompletion
        collegeAddress
        resumeFile
        hireQuestion
        jobApplicant {
          nextToken
        }
        createdAt
        updatedAt
      }
      job {
        id
        jobUserId
        jobName
        jobTitle
        jobType
        companyName
        comapanyWebsite
        aboutCompany
        experience
        duration
        salary
        noOfPosition
        jobLocation
        lastDate
        jobDescription {
          nextToken
        }
        jobCretaria {
          nextToken
        }
        jobSkills {
          nextToken
        }
        perks {
          nextToken
        }
        jobApplicants {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteJobApplicant = /* GraphQL */ `
  mutation DeleteJobApplicant(
    $input: DeleteJobApplicantInput!
    $condition: ModelJobApplicantConditionInput
  ) {
    deleteJobApplicant(input: $input, condition: $condition) {
      id
      userID
      jobID
      user {
        id
        firstName
        lastName
        age
        sex
        email
        mobileNo
        address
        collegeName
        companyName
        officeAddress
        userPost
        companyWebsite
        userRole
        degree
        branch
        courseCompletion
        collegeAddress
        resumeFile
        hireQuestion
        jobApplicant {
          nextToken
        }
        createdAt
        updatedAt
      }
      job {
        id
        jobUserId
        jobName
        jobTitle
        jobType
        companyName
        comapanyWebsite
        aboutCompany
        experience
        duration
        salary
        noOfPosition
        jobLocation
        lastDate
        jobDescription {
          nextToken
        }
        jobCretaria {
          nextToken
        }
        jobSkills {
          nextToken
        }
        perks {
          nextToken
        }
        jobApplicants {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const createJob = /* GraphQL */ `
  mutation CreateJob(
    $input: CreateJobInput!
    $condition: ModelJobConditionInput
  ) {
    createJob(input: $input, condition: $condition) {
      id
      jobUserId
      jobName
      jobTitle
      jobType
      companyName
      comapanyWebsite
      aboutCompany
      experience
      duration
      salary
      noOfPosition
      jobLocation
      lastDate
      jobDescription {
        items {
          id
          content
          createdAt
          jobID
          updatedAt
        }
        nextToken
      }
      jobCretaria {
        items {
          id
          content
          createdAt
          jobID
          updatedAt
        }
        nextToken
      }
      jobSkills {
        items {
          id
          content
          createdAt
          jobID
          updatedAt
        }
        nextToken
      }
      perks {
        items {
          id
          content
          createdAt
          jobID
          updatedAt
        }
        nextToken
      }
      jobApplicants {
        items {
          id
          userID
          jobID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateJob = /* GraphQL */ `
  mutation UpdateJob(
    $input: UpdateJobInput!
    $condition: ModelJobConditionInput
  ) {
    updateJob(input: $input, condition: $condition) {
      id
      jobUserId
      jobName
      jobTitle
      jobType
      companyName
      comapanyWebsite
      aboutCompany
      experience
      duration
      salary
      noOfPosition
      jobLocation
      lastDate
      jobDescription {
        items {
          id
          content
          createdAt
          jobID
          updatedAt
        }
        nextToken
      }
      jobCretaria {
        items {
          id
          content
          createdAt
          jobID
          updatedAt
        }
        nextToken
      }
      jobSkills {
        items {
          id
          content
          createdAt
          jobID
          updatedAt
        }
        nextToken
      }
      perks {
        items {
          id
          content
          createdAt
          jobID
          updatedAt
        }
        nextToken
      }
      jobApplicants {
        items {
          id
          userID
          jobID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteJob = /* GraphQL */ `
  mutation DeleteJob(
    $input: DeleteJobInput!
    $condition: ModelJobConditionInput
  ) {
    deleteJob(input: $input, condition: $condition) {
      id
      jobUserId
      jobName
      jobTitle
      jobType
      companyName
      comapanyWebsite
      aboutCompany
      experience
      duration
      salary
      noOfPosition
      jobLocation
      lastDate
      jobDescription {
        items {
          id
          content
          createdAt
          jobID
          updatedAt
        }
        nextToken
      }
      jobCretaria {
        items {
          id
          content
          createdAt
          jobID
          updatedAt
        }
        nextToken
      }
      jobSkills {
        items {
          id
          content
          createdAt
          jobID
          updatedAt
        }
        nextToken
      }
      perks {
        items {
          id
          content
          createdAt
          jobID
          updatedAt
        }
        nextToken
      }
      jobApplicants {
        items {
          id
          userID
          jobID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const createPerk = /* GraphQL */ `
  mutation CreatePerk(
    $input: CreatePerkInput!
    $condition: ModelPerkConditionInput
  ) {
    createPerk(input: $input, condition: $condition) {
      id
      content
      createdAt
      jobID
      job {
        id
        jobUserId
        jobName
        jobTitle
        jobType
        companyName
        comapanyWebsite
        aboutCompany
        experience
        duration
        salary
        noOfPosition
        jobLocation
        lastDate
        jobDescription {
          nextToken
        }
        jobCretaria {
          nextToken
        }
        jobSkills {
          nextToken
        }
        perks {
          nextToken
        }
        jobApplicants {
          nextToken
        }
        createdAt
        updatedAt
      }
      updatedAt
    }
  }
`;
export const updatePerk = /* GraphQL */ `
  mutation UpdatePerk(
    $input: UpdatePerkInput!
    $condition: ModelPerkConditionInput
  ) {
    updatePerk(input: $input, condition: $condition) {
      id
      content
      createdAt
      jobID
      job {
        id
        jobUserId
        jobName
        jobTitle
        jobType
        companyName
        comapanyWebsite
        aboutCompany
        experience
        duration
        salary
        noOfPosition
        jobLocation
        lastDate
        jobDescription {
          nextToken
        }
        jobCretaria {
          nextToken
        }
        jobSkills {
          nextToken
        }
        perks {
          nextToken
        }
        jobApplicants {
          nextToken
        }
        createdAt
        updatedAt
      }
      updatedAt
    }
  }
`;
export const deletePerk = /* GraphQL */ `
  mutation DeletePerk(
    $input: DeletePerkInput!
    $condition: ModelPerkConditionInput
  ) {
    deletePerk(input: $input, condition: $condition) {
      id
      content
      createdAt
      jobID
      job {
        id
        jobUserId
        jobName
        jobTitle
        jobType
        companyName
        comapanyWebsite
        aboutCompany
        experience
        duration
        salary
        noOfPosition
        jobLocation
        lastDate
        jobDescription {
          nextToken
        }
        jobCretaria {
          nextToken
        }
        jobSkills {
          nextToken
        }
        perks {
          nextToken
        }
        jobApplicants {
          nextToken
        }
        createdAt
        updatedAt
      }
      updatedAt
    }
  }
`;
export const createJobDescription = /* GraphQL */ `
  mutation CreateJobDescription(
    $input: CreateJobDescriptionInput!
    $condition: ModelJobDescriptionConditionInput
  ) {
    createJobDescription(input: $input, condition: $condition) {
      id
      content
      createdAt
      jobID
      job {
        id
        jobUserId
        jobName
        jobTitle
        jobType
        companyName
        comapanyWebsite
        aboutCompany
        experience
        duration
        salary
        noOfPosition
        jobLocation
        lastDate
        jobDescription {
          nextToken
        }
        jobCretaria {
          nextToken
        }
        jobSkills {
          nextToken
        }
        perks {
          nextToken
        }
        jobApplicants {
          nextToken
        }
        createdAt
        updatedAt
      }
      updatedAt
    }
  }
`;
export const updateJobDescription = /* GraphQL */ `
  mutation UpdateJobDescription(
    $input: UpdateJobDescriptionInput!
    $condition: ModelJobDescriptionConditionInput
  ) {
    updateJobDescription(input: $input, condition: $condition) {
      id
      content
      createdAt
      jobID
      job {
        id
        jobUserId
        jobName
        jobTitle
        jobType
        companyName
        comapanyWebsite
        aboutCompany
        experience
        duration
        salary
        noOfPosition
        jobLocation
        lastDate
        jobDescription {
          nextToken
        }
        jobCretaria {
          nextToken
        }
        jobSkills {
          nextToken
        }
        perks {
          nextToken
        }
        jobApplicants {
          nextToken
        }
        createdAt
        updatedAt
      }
      updatedAt
    }
  }
`;
export const deleteJobDescription = /* GraphQL */ `
  mutation DeleteJobDescription(
    $input: DeleteJobDescriptionInput!
    $condition: ModelJobDescriptionConditionInput
  ) {
    deleteJobDescription(input: $input, condition: $condition) {
      id
      content
      createdAt
      jobID
      job {
        id
        jobUserId
        jobName
        jobTitle
        jobType
        companyName
        comapanyWebsite
        aboutCompany
        experience
        duration
        salary
        noOfPosition
        jobLocation
        lastDate
        jobDescription {
          nextToken
        }
        jobCretaria {
          nextToken
        }
        jobSkills {
          nextToken
        }
        perks {
          nextToken
        }
        jobApplicants {
          nextToken
        }
        createdAt
        updatedAt
      }
      updatedAt
    }
  }
`;
export const createJobCretaria = /* GraphQL */ `
  mutation CreateJobCretaria(
    $input: CreateJobCretariaInput!
    $condition: ModelJobCretariaConditionInput
  ) {
    createJobCretaria(input: $input, condition: $condition) {
      id
      content
      createdAt
      jobID
      job {
        id
        jobUserId
        jobName
        jobTitle
        jobType
        companyName
        comapanyWebsite
        aboutCompany
        experience
        duration
        salary
        noOfPosition
        jobLocation
        lastDate
        jobDescription {
          nextToken
        }
        jobCretaria {
          nextToken
        }
        jobSkills {
          nextToken
        }
        perks {
          nextToken
        }
        jobApplicants {
          nextToken
        }
        createdAt
        updatedAt
      }
      updatedAt
    }
  }
`;
export const updateJobCretaria = /* GraphQL */ `
  mutation UpdateJobCretaria(
    $input: UpdateJobCretariaInput!
    $condition: ModelJobCretariaConditionInput
  ) {
    updateJobCretaria(input: $input, condition: $condition) {
      id
      content
      createdAt
      jobID
      job {
        id
        jobUserId
        jobName
        jobTitle
        jobType
        companyName
        comapanyWebsite
        aboutCompany
        experience
        duration
        salary
        noOfPosition
        jobLocation
        lastDate
        jobDescription {
          nextToken
        }
        jobCretaria {
          nextToken
        }
        jobSkills {
          nextToken
        }
        perks {
          nextToken
        }
        jobApplicants {
          nextToken
        }
        createdAt
        updatedAt
      }
      updatedAt
    }
  }
`;
export const deleteJobCretaria = /* GraphQL */ `
  mutation DeleteJobCretaria(
    $input: DeleteJobCretariaInput!
    $condition: ModelJobCretariaConditionInput
  ) {
    deleteJobCretaria(input: $input, condition: $condition) {
      id
      content
      createdAt
      jobID
      job {
        id
        jobUserId
        jobName
        jobTitle
        jobType
        companyName
        comapanyWebsite
        aboutCompany
        experience
        duration
        salary
        noOfPosition
        jobLocation
        lastDate
        jobDescription {
          nextToken
        }
        jobCretaria {
          nextToken
        }
        jobSkills {
          nextToken
        }
        perks {
          nextToken
        }
        jobApplicants {
          nextToken
        }
        createdAt
        updatedAt
      }
      updatedAt
    }
  }
`;
export const createJobSkill = /* GraphQL */ `
  mutation CreateJobSkill(
    $input: CreateJobSkillInput!
    $condition: ModelJobSkillConditionInput
  ) {
    createJobSkill(input: $input, condition: $condition) {
      id
      content
      createdAt
      jobID
      job {
        id
        jobUserId
        jobName
        jobTitle
        jobType
        companyName
        comapanyWebsite
        aboutCompany
        experience
        duration
        salary
        noOfPosition
        jobLocation
        lastDate
        jobDescription {
          nextToken
        }
        jobCretaria {
          nextToken
        }
        jobSkills {
          nextToken
        }
        perks {
          nextToken
        }
        jobApplicants {
          nextToken
        }
        createdAt
        updatedAt
      }
      updatedAt
    }
  }
`;
export const updateJobSkill = /* GraphQL */ `
  mutation UpdateJobSkill(
    $input: UpdateJobSkillInput!
    $condition: ModelJobSkillConditionInput
  ) {
    updateJobSkill(input: $input, condition: $condition) {
      id
      content
      createdAt
      jobID
      job {
        id
        jobUserId
        jobName
        jobTitle
        jobType
        companyName
        comapanyWebsite
        aboutCompany
        experience
        duration
        salary
        noOfPosition
        jobLocation
        lastDate
        jobDescription {
          nextToken
        }
        jobCretaria {
          nextToken
        }
        jobSkills {
          nextToken
        }
        perks {
          nextToken
        }
        jobApplicants {
          nextToken
        }
        createdAt
        updatedAt
      }
      updatedAt
    }
  }
`;
export const deleteJobSkill = /* GraphQL */ `
  mutation DeleteJobSkill(
    $input: DeleteJobSkillInput!
    $condition: ModelJobSkillConditionInput
  ) {
    deleteJobSkill(input: $input, condition: $condition) {
      id
      content
      createdAt
      jobID
      job {
        id
        jobUserId
        jobName
        jobTitle
        jobType
        companyName
        comapanyWebsite
        aboutCompany
        experience
        duration
        salary
        noOfPosition
        jobLocation
        lastDate
        jobDescription {
          nextToken
        }
        jobCretaria {
          nextToken
        }
        jobSkills {
          nextToken
        }
        perks {
          nextToken
        }
        jobApplicants {
          nextToken
        }
        createdAt
        updatedAt
      }
      updatedAt
    }
  }
`;
export const createJobCount = /* GraphQL */ `
  mutation CreateJobCount(
    $input: CreateJobCountInput!
    $condition: ModelJobCountConditionInput
  ) {
    createJobCount(input: $input, condition: $condition) {
      id
      count
      createdAt
      updatedAt
    }
  }
`;
export const updateJobCount = /* GraphQL */ `
  mutation UpdateJobCount(
    $input: UpdateJobCountInput!
    $condition: ModelJobCountConditionInput
  ) {
    updateJobCount(input: $input, condition: $condition) {
      id
      count
      createdAt
      updatedAt
    }
  }
`;
export const deleteJobCount = /* GraphQL */ `
  mutation DeleteJobCount(
    $input: DeleteJobCountInput!
    $condition: ModelJobCountConditionInput
  ) {
    deleteJobCount(input: $input, condition: $condition) {
      id
      count
      createdAt
      updatedAt
    }
  }
`;
