/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      firstName
      lastName
      age
      sex
      email
      mobileNo
      address
      collegeName
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
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        firstName
        lastName
        age
        sex
        email
        mobileNo
        address
        collegeName
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
      nextToken
    }
  }
`;
export const getJobApplicant = /* GraphQL */ `
  query GetJobApplicant($id: ID!) {
    getJobApplicant(id: $id) {
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
export const listJobApplicants = /* GraphQL */ `
  query ListJobApplicants(
    $filter: ModelJobApplicantFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listJobApplicants(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
          degree
          branch
          courseCompletion
          collegeAddress
          resumeFile
          hireQuestion
          createdAt
          updatedAt
        }
        job {
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
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getJob = /* GraphQL */ `
  query GetJob($id: ID!) {
    getJob(id: $id) {
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
export const listJobs = /* GraphQL */ `
  query ListJobs(
    $filter: ModelJobFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listJobs(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getPerk = /* GraphQL */ `
  query GetPerk($id: ID!) {
    getPerk(id: $id) {
      id
      content
      createdAt
      jobID
      job {
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
export const listPerks = /* GraphQL */ `
  query ListPerks(
    $filter: ModelPerkFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPerks(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        content
        createdAt
        jobID
        job {
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
        updatedAt
      }
      nextToken
    }
  }
`;
export const getJobDescription = /* GraphQL */ `
  query GetJobDescription($id: ID!) {
    getJobDescription(id: $id) {
      id
      content
      createdAt
      jobID
      job {
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
export const listJobDescriptions = /* GraphQL */ `
  query ListJobDescriptions(
    $filter: ModelJobDescriptionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listJobDescriptions(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        content
        createdAt
        jobID
        job {
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
        updatedAt
      }
      nextToken
    }
  }
`;
export const getJobCretaria = /* GraphQL */ `
  query GetJobCretaria($id: ID!) {
    getJobCretaria(id: $id) {
      id
      content
      createdAt
      jobID
      job {
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
export const listJobCretarias = /* GraphQL */ `
  query ListJobCretarias(
    $filter: ModelJobCretariaFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listJobCretarias(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        content
        createdAt
        jobID
        job {
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
        updatedAt
      }
      nextToken
    }
  }
`;
export const getJobSkill = /* GraphQL */ `
  query GetJobSkill($id: ID!) {
    getJobSkill(id: $id) {
      id
      content
      createdAt
      jobID
      job {
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
export const listJobSkills = /* GraphQL */ `
  query ListJobSkills(
    $filter: ModelJobSkillFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listJobSkills(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        content
        createdAt
        jobID
        job {
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
        updatedAt
      }
      nextToken
    }
  }
`;
export const getJobCount = /* GraphQL */ `
  query GetJobCount($id: ID!) {
    getJobCount(id: $id) {
      id
      count
      createdAt
      updatedAt
    }
  }
`;
export const listJobCounts = /* GraphQL */ `
  query ListJobCounts(
    $filter: ModelJobCountFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listJobCounts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        count
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const perksByJob = /* GraphQL */ `
  query PerksByJob(
    $jobID: ID
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelPerkFilterInput
    $limit: Int
    $nextToken: String
  ) {
    perksByJob(
      jobID: $jobID
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        content
        createdAt
        jobID
        job {
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
        updatedAt
      }
      nextToken
    }
  }
`;
export const jobDescriptionByJob = /* GraphQL */ `
  query JobDescriptionByJob(
    $jobID: ID
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelJobDescriptionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    jobDescriptionByJob(
      jobID: $jobID
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        content
        createdAt
        jobID
        job {
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
        updatedAt
      }
      nextToken
    }
  }
`;
export const jobCretariaByJob = /* GraphQL */ `
  query JobCretariaByJob(
    $jobID: ID
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelJobCretariaFilterInput
    $limit: Int
    $nextToken: String
  ) {
    jobCretariaByJob(
      jobID: $jobID
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        content
        createdAt
        jobID
        job {
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
        updatedAt
      }
      nextToken
    }
  }
`;
export const jobSkillsByJob = /* GraphQL */ `
  query JobSkillsByJob(
    $jobID: ID
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelJobSkillFilterInput
    $limit: Int
    $nextToken: String
  ) {
    jobSkillsByJob(
      jobID: $jobID
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        content
        createdAt
        jobID
        job {
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
        updatedAt
      }
      nextToken
    }
  }
`;
